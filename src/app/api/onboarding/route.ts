import { NextRequest, NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/validations";
import { createAdminClient } from "@/lib/supabase";
import { LEAD_SOURCES, LEAD_ESTADOS } from "@/lib/constants";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  sendOnboardingConfirmationEmail,
  sendOnboardingNotificationEmail,
} from "@/lib/email";

const TAMANO_MAP: Record<string, string> = {
  "1-5": "<20",
  "6-20": "<20",
  "21-50": "20-50",
  "51-100": "50-100",
  "100+": ">200",
};

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

  try {
    const body = await request.json();
    const data = onboardingSchema.parse(body);

    const supabase = createAdminClient();

    const { error: dbError } = await supabase.from("leads").insert({
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa,
      tamano_empresa: TAMANO_MAP[data.tamano] ?? "<20",
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

    if (dbError) {
      console.error("[Onboarding API] Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Error al guardar el formulario. Por favor intenta de nuevo." },
        { status: 500 }
      );
    }

    await Promise.allSettled([
      sendOnboardingConfirmationEmail(data),
      sendOnboardingNotificationEmail(data),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Onboarding API error:", error);
    return NextResponse.json(
      { error: "Error procesando el formulario" },
      { status: 400 }
    );
  }
}
