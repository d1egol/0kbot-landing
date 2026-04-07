import { NextRequest, NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/validations";
import { createAdminClient } from "@/lib/supabase";
import {
  LEAD_SOURCES,
  LEAD_ESTADOS,
  ONBOARDING_TAMANO_MAP,
} from "@/lib/constants";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  sendOnboardingConfirmationEmail,
  sendOnboardingNotificationEmail,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  const { allowed, resetAt } = checkRateLimit(ip, 5, 60_000);
  if (!allowed) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta en unos minutos." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) },
      }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }

  const parsed = onboardingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.issues },
      { status: 422 }
    );
  }

  const data = parsed.data;
  console.log("[Onboarding API] Guardando lead:", data.email);

  // 1. Guardar en Supabase (crítico)
  try {
    const supabase = createAdminClient();
    const { error: dbError } = await supabase.from("leads").insert({
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa,
      tamano_empresa: ONBOARDING_TAMANO_MAP[data.tamano] ?? "<20",
      fuente: LEAD_SOURCES.ONBOARDING_FORM,
      estado: LEAD_ESTADOS.NUEVO,
      diagnostico_data: {
        telefono: data.telefono,
        rubro: data.rubro,
        tamano: data.tamano,
        proceso_principal: data.proceso_principal,
        intentado_antes: data.intentado_antes,
        resultado_ideal: data.resultado_ideal,
        plazo: data.plazo,
        presupuesto: data.presupuesto,
      },
    });

    if (dbError) throw dbError;
    console.log("[Onboarding API] Lead guardado:", data.email);
  } catch (err) {
    console.error("[Onboarding API] Supabase insert error:", err);
    return NextResponse.json(
      { error: "Error al guardar el formulario. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }

  // 2. Emails (no crítico) — loguear cada reject individualmente
  const [confirmResult, notifResult] = await Promise.allSettled([
    sendOnboardingConfirmationEmail(data),
    sendOnboardingNotificationEmail(data),
  ]);
  if (confirmResult.status === "rejected") {
    console.error(
      "[Onboarding API] Error email confirmación:",
      confirmResult.reason
    );
  }
  if (notifResult.status === "rejected") {
    console.error(
      "[Onboarding API] Error email notificación:",
      notifResult.reason
    );
  }

  return NextResponse.json({ success: true });
}
