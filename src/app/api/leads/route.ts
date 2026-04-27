import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { leadSchema } from "@/lib/validations";
import { sendTransactionalEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

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
    const supabase = createAdminClient();
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
    sendTransactionalEmail("lead", "confirmation", lead),
    sendTransactionalEmail("lead", "notification", lead),
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
