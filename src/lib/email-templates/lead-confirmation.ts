import type { LeadInput } from "@/lib/validations";
import { EMAIL_COLORS as C } from "./shared";

export function leadConfirmationHtml(lead: LeadInput): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: system-ui, -apple-system, sans-serif; background: ${C.bg}; margin: 0; padding: 40px 20px;">
  <div style="max-width: 520px; margin: 0 auto; background: ${C.surface}; border-radius: 8px; overflow: hidden; border: 1px solid ${C.border};">
    <div style="background: ${C.primary}; padding: 32px; text-align: center;">
      <h1 style="color: ${C.surface}; font-size: 24px; font-weight: 700; margin: 0;">0kbot</h1>
    </div>
    <div style="padding: 32px;">
      <p style="color: ${C.textDark}; font-size: 16px; margin: 0 0 16px;">Hola ${lead.nombre},</p>
      <p style="color: ${C.textMid}; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
        Recibimos tu solicitud. Te contactamos en <strong>menos de 24 horas</strong> para coordinar el diagnóstico gratuito.
      </p>
      <div style="background: ${C.bg}; border-radius: 6px; padding: 20px; margin: 24px 0; border-left: 4px solid ${C.accent};">
        <p style="color: ${C.textDark}; font-size: 13px; font-weight: 600; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Lo que pasa ahora</p>
        <p style="color: ${C.textMid}; font-size: 14px; line-height: 1.8; margin: 0;">
          → Revisamos la información de ${lead.empresa}<br>
          → Te llamamos o escribimos para confirmar horario<br>
          → En 30 minutos identificamos dónde están tus pérdidas
        </p>
      </div>
      <p style="color: ${C.textMid}; font-size: 14px; line-height: 1.6; margin: 0 0 8px;">
        Cualquier consulta: <a href="mailto:hola@0kbot.com" style="color: ${C.primary};">hola@0kbot.com</a>
      </p>
    </div>
    <div style="border-top: 1px solid ${C.border}; padding: 20px 32px; text-align: center;">
      <p style="color: ${C.textMid}; font-size: 12px; margin: 0;">Diego · 0kbot · Santiago, Chile</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
