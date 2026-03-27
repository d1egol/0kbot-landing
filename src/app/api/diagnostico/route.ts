import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { diagnosticoSchema } from "@/lib/validations";
import {
  sendDiagnosticoConfirmationEmail,
  sendDiagnosticoNotificationEmail,
} from "@/lib/email";

function getAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase env vars not configured");
  return createClient(url, key);
}

export async function POST(request: NextRequest) {
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
    const supabase = getAdminClient();
    const { error } = await supabase.from("leads").insert({
      nombre: d.nombre,
      email: d.email,
      empresa: d.empresa || "(sin especificar)",
      tamano_empresa: d.tamano,
      problema: d.dolor,
      fuente: "diagnostico_wizard",
      estado: "nuevo",
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
