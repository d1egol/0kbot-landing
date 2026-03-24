import { NextResponse } from "next/server";

/**
 * POST /api/leads
 * Guardar un nuevo lead en Supabase y enviar email de notificación con Resend.
 * TODO: Implementar en Fase 1
 */
export async function POST() {
  return NextResponse.json(
    { error: "Not implemented. Se implementará en Fase 1." },
    { status: 501 }
  );
}
