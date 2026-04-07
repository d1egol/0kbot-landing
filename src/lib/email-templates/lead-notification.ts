import type { LeadInput } from "@/lib/validations";

const C = {
  primary: "#1B5FA6",
  accent: "#D4A853",
  bg: "#F7F5F0",
  surface: "#FFFFFF",
  border: "#E5E2DB",
  textDark: "#1A1A1A",
  textMid: "#4A4A4A",
} as const;

const TAMANO_LABELS: Record<string, string> = {
  "<20": "Menos de 20 personas",
  "20-50": "20 a 50 personas",
  "50-100": "50 a 100 personas",
  "100-200": "100 a 200 personas",
  ">200": "Más de 200 personas",
};

export function leadNotificationHtml(lead: LeadInput): string {
  const tamanoLabel = TAMANO_LABELS[lead.tamano_empresa ?? "<20"] ?? lead.tamano_empresa;
  const problema = lead.problema?.trim() || "(no especificado)";
  const cargo = lead.cargo?.trim() || "(no especificado)";
  const timestamp = new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });

  return `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="font-family: system-ui, sans-serif; background: ${C.bg}; margin: 0; padding: 40px 20px;">
  <div style="max-width: 520px; margin: 0 auto; background: ${C.surface}; border-radius: 8px; border: 1px solid ${C.border}; overflow: hidden;">
    <div style="background: ${C.primary}; padding: 20px 28px;">
      <p style="color: ${C.accent}; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Nuevo lead — ${lead.fuente}</p>
      <h1 style="color: ${C.surface}; font-size: 20px; font-weight: 700; margin: 0;">${lead.nombre}</h1>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px; width: 35%;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textDark}; font-size: 13px; font-weight: 500;">
            <a href="mailto:${lead.email}" style="color: ${C.primary};">${lead.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Empresa</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textDark}; font-size: 13px; font-weight: 500;">${lead.empresa}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Cargo</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textDark}; font-size: 13px;">${cargo}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px;">Tamaño</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textDark}; font-size: 13px;">${tamanoLabel}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textMid}; font-size: 13px; vertical-align: top;">Mensaje</td>
          <td style="padding: 10px 0; border-bottom: 1px solid ${C.border}; color: ${C.textDark}; font-size: 13px; line-height: 1.5;">${problema}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: ${C.textMid}; font-size: 13px;">Fuente</td>
          <td style="padding: 10px 0; color: ${C.textDark}; font-size: 13px;">${lead.fuente}</td>
        </tr>
      </table>
    </div>
    <div style="background: ${C.bg}; padding: 16px 28px; border-top: 1px solid ${C.border};">
      <p style="font-size: 11px; color: ${C.textMid}; margin: 0;">Enviado desde ${lead.fuente} · ${timestamp}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
