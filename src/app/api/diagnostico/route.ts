import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { diagnosticoSchema } from "@/lib/validations";
import { LEAD_SOURCES, LEAD_ESTADOS } from "@/lib/constants";
import { checkRateLimit } from "@/lib/rate-limit";
import {
  sendDiagnosticoConfirmationEmail,
  sendDiagnosticoNotificationEmail,
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

  const result = diagnosticoSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 422 }
    );
  }

  const d = result.data;
  console.log("[Diagnóstico API] Guardando lead:", d.email);

  // 1. Guardar en Supabase (crítico)
  try {
    const supabase = createAdminClient();
    const { error } = await supabase.from("leads").insert({
      nombre: d.nombre,
      email: d.email,
      empresa: d.empresa || "(sin especificar)",
      tamano_empresa: d.tamano,
      problema: d.dolor,
      fuente: LEAD_SOURCES.DIAGNOSTICO_WIZARD,
      estado: LEAD_ESTADOS.NUEVO,
      diagnostico_data: {
        tamano: d.tamano,
        industria: d.industria,
        dolor: d.dolor,
        intentadoAntes: d.intentadoAntes,
        intentadoDetalle: d.intentadoDetalle ?? "",
        timeline: d.timeline,
        telefono: d.telefono ?? "",
        empresa: d.empresa ?? "",
      },
    });
    if (error) throw error;
    console.log("[Diagnóstico API] Lead guardado:", d.email);
  } catch (err) {
    console.error("[Diagnóstico API] Error en Supabase:", err);
    return NextResponse.json(
      { error: "Error interno al guardar el diagnóstico" },
      { status: 500 }
    );
  }

  // 2. Emails (no crítico)
  await Promise.allSettled([
    sendDiagnosticoConfirmationEmail(d),
    sendDiagnosticoNotificationEmail(d),
  ]);

  return NextResponse.json({ success: true }, { status: 200 });
}
