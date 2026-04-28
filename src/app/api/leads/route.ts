import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { leadSchema } from "@/lib/validations";
import { sendTransactionalEmail } from "@/lib/email";
import { rateLimitParseValidate } from "@/lib/api-handler";
import { logInfo, logError, newRequestId } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const requestId = newRequestId();
  const ctx = { flow: "lead", endpoint: "/api/leads", requestId };

  const guard = await rateLimitParseValidate(request, leadSchema);
  if (guard instanceof NextResponse) return guard;

  const lead = guard.data;
  logInfo("Guardando lead", { ...ctx, email: lead.email });

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
    logInfo("Lead guardado en Supabase", { ...ctx, email: lead.email, result: "ok" });
  } catch (err) {
    logError("Error guardando en Supabase", {
      ...ctx,
      result: "fail",
      errorCode: "supabase_insert_failed",
      err: String(err),
    });
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
    logError("Error email confirmación", { ...ctx, errorCode: "email_confirmation_failed", reason: String(confirmResult.reason) });
  }
  if (notifResult.status === "rejected") {
    logError("Error email notificación", { ...ctx, errorCode: "email_notification_failed", reason: String(notifResult.reason) });
  }
  if (
    confirmResult.status === "fulfilled" &&
    notifResult.status === "fulfilled"
  ) {
    emailSent = true;
  }

  return NextResponse.json({ success: true, leadSaved: true, emailSent }, { status: 200 });
}
