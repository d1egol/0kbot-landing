import { Resend } from "resend";

/**
 * Cliente de Resend para envío de emails transaccionales.
 * Solo usar en Server Components o API routes (nunca en el cliente).
 * Implementación completa en Fase 1.
 */
export function createResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("Falta RESEND_API_KEY en las variables de entorno.");
  }

  return new Resend(apiKey);
}
