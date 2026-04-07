import type { OnboardingInput } from "@/lib/validations";
import { EMAIL_COLORS as C, formatSantiagoTimestamp } from "./shared";

export function onboardingNotificationHtml(d: OnboardingInput): string {
  const timestamp = formatSantiagoTimestamp();

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="font-family: system-ui, sans-serif; background: ${C.bg}; margin: 0; padding: 40px 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: ${C.surface}; border-radius: 8px; border: 1px solid ${C.border}; overflow: hidden;">
    <div style="background: ${C.primary}; padding: 20px 28px;">
      <p style="color: ${C.accent}; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Pre-reunión · ${d.rubro}</p>
      <h1 style="color: ${C.surface}; font-size: 20px; font-weight: 700; margin: 0;">${d.nombre} — ${d.empresa}</h1>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px; width: 35%;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px;"><a href="mailto:${d.email}" style="color: ${C.primary};">${d.email}</a></td>
        </tr>
        ${d.telefono ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Teléfono</td><td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px; font-weight: 500;">${d.telefono}</td></tr>` : ""}
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Rubro</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px; font-weight: 500;">${d.rubro}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Tamaño</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px;">${d.tamano} personas</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px; vertical-align: top;">Proceso principal</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px; line-height: 1.5;">${d.proceso_principal}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Intentado antes</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px;">${d.intentado_antes}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px; vertical-align: top;">Resultado ideal</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px; line-height: 1.5;">${d.resultado_ideal}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Plazo</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; font-size: 13px; font-weight: 600;">${d.plazo}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: ${C.textMid}; font-size: 13px;">Presupuesto</td>
          <td style="padding: 10px 0; font-size: 13px; font-weight: 600; color: ${C.primary};">${d.presupuesto}</td>
        </tr>
      </table>
    </div>
    <div style="background: ${C.bg}; padding: 16px 28px; border-top: 1px solid ${C.border};">
      <p style="font-size: 11px; color: ${C.textMid}; margin: 0;">Onboarding form · ${timestamp}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
