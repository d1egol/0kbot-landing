import { NextRequest, NextResponse } from "next/server";
import { onboardingSchema } from "@/lib/validations";
import { createAdminClient } from "@/lib/supabase";
import {
  LEAD_SOURCES,
  LEAD_ESTADOS,
  ONBOARDING_TAMANO_MAP,
} from "@/lib/constants";
import { sendTransactionalEmail } from "@/lib/email";
import { rateLimitParseValidate } from "@/lib/api-handler";
import { logInfo, logError, newRequestId } from "@/lib/logger";

export async function POST(request: NextRequest) {
  const requestId = newRequestId();
  const ctx = { flow: "onboarding", endpoint: "/api/onboarding", requestId };

  const guard = await rateLimitParseValidate(request, onboardingSchema);
  if (guard instanceof NextResponse) return guard;

  const data = guard.data;
  logInfo("Guardando onboarding", { ...ctx, email: data.email });

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
    logInfo("Onboarding guardado", { ...ctx, email: data.email, result: "ok" });
  } catch (err) {
    logError("Supabase insert error", {
      ...ctx,
      result: "fail",
      errorCode: "supabase_insert_failed",
      err: String(err),
    });
    return NextResponse.json(
      { error: "Error al guardar el formulario. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }

  // 2. Emails (no crítico) — loguear cada reject individualmente
  const [confirmResult, notifResult] = await Promise.allSettled([
    sendTransactionalEmail("onboarding", "confirmation", data),
    sendTransactionalEmail("onboarding", "notification", data),
  ]);
  if (confirmResult.status === "rejected") {
    logError("Error email confirmación", { ...ctx, errorCode: "email_confirmation_failed", reason: String(confirmResult.reason) });
  }
  if (notifResult.status === "rejected") {
    logError("Error email notificación", { ...ctx, errorCode: "email_notification_failed", reason: String(notifResult.reason) });
  }

  return NextResponse.json({ success: true });
}
