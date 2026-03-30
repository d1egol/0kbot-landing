import type { DiagnosticoInput } from "@/lib/validations";

const C = {
  primary: "#1B5FA6",
  accent: "#D4A853",
  bg: "#F7F5F0",
  surface: "#FFFFFF",
  border: "#E5E2DB",
  textDark: "#1A1A1A",
  textMid: "#4A4A4A",
} as const;

export function diagnosticoConfirmationHtml(d: DiagnosticoInput): string {
  const firstName = d.nombre.split(" ")[0];

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
      <p style="color: ${C.textDark}; font-size: 16px; margin: 0 0 16px;">Hola ${firstName},</p>
      <p style="color: ${C.textMid}; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
        Recibimos tus respuestas. Te contactamos en <strong>menos de 24 horas</strong> para coordinar la llamada de diagnóstico (30 min, sin costo).
      </p>
      <div style="background: ${C.bg}; border-radius: 6px; padding: 20px; margin: 24px 0; border-left: 4px solid ${C.accent};">
        <p style="color: ${C.textDark}; font-size: 13px; font-weight: 600; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Resumen de tu diagnóstico</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: ${C.textMid}; font-size: 13px; width: 40%; vertical-align: top;">Empresa</td>
            <td style="padding: 6px 0; color: ${C.textDark}; font-size: 13px; font-weight: 500;">${d.empresa || "(no especificada)"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: ${C.textMid}; font-size: 13px; vertical-align: top;">Industria</td>
            <td style="padding: 6px 0; color: ${C.textDark}; font-size: 13px; font-weight: 500;">${d.industria}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: ${C.textMid}; font-size: 13px; vertical-align: top;">Problema principal</td>
            <td style="padding: 6px 0; color: ${C.textDark}; font-size: 13px; font-weight: 500;">${d.dolor}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: ${C.textMid}; font-size: 13px; vertical-align: top;">Cuándo empezar</td>
            <td style="padding: 6px 0; color: ${C.textDark}; font-size: 13px; font-weight: 500;">${d.timeline}</td>
          </tr>
        </table>
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
