import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { leadSchema } from "@/lib/validations";
import { sendConfirmationEmail, sendNotificationEmail } from "@/lib/email";

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

  const result = leadSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 422 }
    );
  }

  const lead = result.data;

  // 1. Guardar en Supabase (crítico — si falla, retornamos 500)
  try {
    const supabase = getAdminClient();
    const { error } = await supabase.from("leads").insert({
      nombre: lead.nombre,
      email: lead.email,
      empresa: lead.empresa,
      cargo: lead.cargo ?? null,
      tamano_empresa: lead.tamano_empresa,
      problema: lead.problema ?? null,
      fuente: lead.fuente,
      estado: lead.estado,
    });
    if (error) throw error;
  } catch (err) {
    console.error("[leads] Error guardando en Supabase:", err);
    return NextResponse.json(
      { error: "Error interno al guardar el lead" },
      { status: 500 }
    );
  }

  // 2. Enviar emails (no crítico — si falla, igual retornamos 200)
  try {
    await Promise.all([
      sendConfirmationEmail(lead),
      sendNotificationEmail(lead),
    ]);
  } catch (err) {
    console.error("[leads] Error enviando emails:", err);
    // No bloqueamos al usuario por esto
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
