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
  console.log("[Leads API] Guardando lead:", lead.email);

  // 1. Guardar en Supabase (crítico — si falla, retornamos 500)
  try {
    const supabase = getAdminClient();
    const { error } = await supabase.from("leads").insert({
      nombre: lead.nombre,
      email: lead.email,
      empresa: lead.empresa ?? "(sin especificar)",
      cargo: lead.cargo ?? null,
      tamano_empresa: lead.tamano_empresa ?? "<20",
      problema: lead.problema ?? null,
      fuente: lead.fuente,
      estado: lead.estado,
    });
    if (error) throw error;
    console.log("[Leads API] Lead guardado en Supabase:", lead.email);
  } catch (err) {
    console.error("[Leads API] Error guardando en Supabase:", err);
    return NextResponse.json(
      { error: "Error interno al guardar el lead" },
      { status: 500 }
    );
  }

  // 2. Enviar emails (no crítico — si falla, igual retornamos 200)
  let emailSent = false;
  const [confirmResult, notifResult] = await Promise.allSettled([
    sendConfirmationEmail(lead),
    sendNotificationEmail(lead),
  ]);

  if (confirmResult.status === "rejected") {
    console.error("[Leads API] Error email confirmación:", confirmResult.reason);
  }
  if (notifResult.status === "rejected") {
    console.error("[Leads API] Error email notificación:", notifResult.reason);
  }
  if (
    confirmResult.status === "fulfilled" &&
    notifResult.status === "fulfilled"
  ) {
    emailSent = true;
  }

  return NextResponse.json({ success: true, leadSaved: true, emailSent }, { status: 200 });
}
