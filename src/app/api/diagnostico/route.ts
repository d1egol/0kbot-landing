import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase";
import { diagnosticoSchema } from "@/lib/validations";
import { LEAD_SOURCES, LEAD_ESTADOS } from "@/lib/constants";
import { sendTransactionalEmail } from "@/lib/email";
import { rateLimitParseValidate } from "@/lib/api-handler";
import { logInfo, logError, newRequestId } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const requestId = newRequestId();
  const ctx = { flow: "diagnostico", endpoint: "/api/diagnostico", requestId };

  const guard = await rateLimitParseValidate(request, diagnosticoSchema);
  if (guard instanceof NextResponse) return guard;

  const d = guard.data;
  logInfo("Guardando diagnóstico", { ...ctx, email: d.email });

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
    logInfo("Lead diagnóstico guardado", { ...ctx, email: d.email, result: "ok" });
  } catch (err) {
    logError("Error en Supabase", {
      ...ctx,
      result: "fail",
      errorCode: "supabase_insert_failed",
      err: String(err),
    });
    return NextResponse.json(
      { error: "Error interno al guardar el diagnóstico" },
      { status: 500 }
    );
  }

  // 2. Emails (no crítico) — loguear cada reject individualmente
  const [confirmResult, notifResult] = await Promise.allSettled([
    sendTransactionalEmail("diagnostico", "confirmation", d),
    sendTransactionalEmail("diagnostico", "notification", d),
  ]);
  if (confirmResult.status === "rejected") {
    logError("Error email confirmación", { ...ctx, errorCode: "email_confirmation_failed", reason: String(confirmResult.reason) });
  }
  if (notifResult.status === "rejected") {
    logError("Error email notificación", { ...ctx, errorCode: "email_notification_failed", reason: String(notifResult.reason) });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
