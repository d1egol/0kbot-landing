import { Resend } from "resend";
import type { LeadInput, DiagnosticoInput } from "@/lib/validations";

// Lazy init — no instanciar en el módulo para evitar error en build de Vercel
function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}
const FROM = () => process.env.RESEND_FROM_EMAIL ?? "hola@0kbot.com";
const NOTIFICATION_TO = () => process.env.NOTIFICATION_EMAIL ?? "hola@0kbot.com";

const TIMELINE_LABELS: Record<string, string> = {
  "Lo antes posible — tengo un problema urgente": "🔴 Urgente",
  "En los próximos 3 meses": "🟡 3 meses",
  "En el segundo semestre": "🟢 Segundo semestre",
  "Estoy explorando opciones": "⚪ Explorando",
};

const TAMANO_LABELS: Record<string, string> = {
  "<20": "Menos de 20 personas",
  "20-50": "20 a 50 personas",
  "50-100": "50 a 100 personas",
  "100-200": "100 a 200 personas",
  ">200": "Más de 200 personas",
};

export async function sendConfirmationEmail(lead: LeadInput): Promise<void> {
  await getResend().emails.send({
    from: `0kbot <${FROM()}>`,
    to: lead.email,
    subject: "Tu diagnóstico está agendado — 0kbot",
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: system-ui, -apple-system, sans-serif; background: #F7F5F0; margin: 0; padding: 40px 20px;">
  <div style="max-width: 520px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid #E5E2DB;">
    <div style="background: #1B5FA6; padding: 32px; text-align: center;">
      <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin: 0;">0kbot</h1>
    </div>
    <div style="padding: 32px;">
      <p style="color: #1A1A1A; font-size: 16px; margin: 0 0 16px;">Hola ${lead.nombre},</p>
      <p style="color: #4A4A4A; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
        Recibimos tu solicitud. Te contactamos en <strong>menos de 24 horas</strong> para coordinar el diagnóstico gratuito.
      </p>
      <div style="background: #F7F5F0; border-radius: 6px; padding: 20px; margin: 24px 0; border-left: 4px solid #D4A853;">
        <p style="color: #1A1A1A; font-size: 13px; font-weight: 600; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Lo que pasa ahora</p>
        <p style="color: #4A4A4A; font-size: 14px; line-height: 1.8; margin: 0;">
          → Revisamos la información de ${lead.empresa}<br>
          → Te llamamos o escribimos para confirmar horario<br>
          → En 30 minutos identificamos dónde están tus pérdidas
        </p>
      </div>
      <p style="color: #4A4A4A; font-size: 14px; line-height: 1.6; margin: 0 0 8px;">
        Cualquier consulta: <a href="mailto:hola@0kbot.com" style="color: #1B5FA6;">hola@0kbot.com</a>
      </p>
    </div>
    <div style="border-top: 1px solid #E5E2DB; padding: 20px 32px; text-align: center;">
      <p style="color: #4A4A4A; font-size: 12px; margin: 0;">Diego · 0kbot · Santiago, Chile</p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  });
}

export async function sendDiagnosticoConfirmationEmail(
  d: DiagnosticoInput
): Promise<void> {
  await getResend().emails.send({
    from: `0kbot <${FROM()}>`,
    to: d.email,
    subject: "Recibimos tu diagnóstico — 0kbot",
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: system-ui, -apple-system, sans-serif; background: #F7F5F0; margin: 0; padding: 40px 20px;">
  <div style="max-width: 520px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; overflow: hidden; border: 1px solid #E5E2DB;">
    <div style="background: #1B5FA6; padding: 32px; text-align: center;">
      <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin: 0;">0kbot</h1>
    </div>
    <div style="padding: 32px;">
      <p style="color: #1A1A1A; font-size: 16px; margin: 0 0 16px;">Hola ${d.nombre.split(" ")[0]},</p>
      <p style="color: #4A4A4A; font-size: 15px; line-height: 1.6; margin: 0 0 20px;">
        Recibimos tus respuestas. Te contactamos en <strong>menos de 24 horas</strong> para coordinar la llamada de diagnóstico (30 min, sin costo).
      </p>
      <div style="background: #F7F5F0; border-radius: 6px; padding: 20px; margin: 24px 0; border-left: 4px solid #D4A853;">
        <p style="color: #1A1A1A; font-size: 13px; font-weight: 600; margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.05em;">Resumen de tu diagnóstico</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 6px 0; color: #4A4A4A; font-size: 13px; width: 40%; vertical-align: top;">Empresa</td>
            <td style="padding: 6px 0; color: #1A1A1A; font-size: 13px; font-weight: 500;">${d.empresa || "(no especificada)"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #4A4A4A; font-size: 13px; vertical-align: top;">Industria</td>
            <td style="padding: 6px 0; color: #1A1A1A; font-size: 13px; font-weight: 500;">${d.industria}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #4A4A4A; font-size: 13px; vertical-align: top;">Problema principal</td>
            <td style="padding: 6px 0; color: #1A1A1A; font-size: 13px; font-weight: 500;">${d.dolor}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #4A4A4A; font-size: 13px; vertical-align: top;">Cuándo empezar</td>
            <td style="padding: 6px 0; color: #1A1A1A; font-size: 13px; font-weight: 500;">${d.timeline}</td>
          </tr>
        </table>
      </div>
      <p style="color: #4A4A4A; font-size: 14px; line-height: 1.6; margin: 0 0 8px;">
        Cualquier consulta: <a href="mailto:hola@0kbot.com" style="color: #1B5FA6;">hola@0kbot.com</a>
      </p>
    </div>
    <div style="border-top: 1px solid #E5E2DB; padding: 20px 32px; text-align: center;">
      <p style="color: #4A4A4A; font-size: 12px; margin: 0;">Diego · 0kbot · Santiago, Chile</p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  });
}

export async function sendDiagnosticoNotificationEmail(
  d: DiagnosticoInput
): Promise<void> {
  const timelineLabel = TIMELINE_LABELS[d.timeline] ?? d.timeline;
  const tamanoLabel = TAMANO_LABELS[d.tamano] ?? d.tamano;
  const intentadoText = d.intentadoAntes
    ? `Sí${d.intentadoDetalle ? ` — ${d.intentadoDetalle}` : ""}`
    : "No";

  await getResend().emails.send({
    from: `0kbot Leads <${FROM()}>`,
    to: NOTIFICATION_TO(),
    subject: `[Diagnóstico] ${d.nombre} · ${timelineLabel}`,
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="font-family: system-ui, sans-serif; background: #F7F5F0; margin: 0; padding: 40px 20px;">
  <div style="max-width: 520px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; border: 1px solid #E5E2DB; overflow: hidden;">
    <div style="background: #1B5FA6; padding: 20px 28px;">
      <p style="color: #D4A853; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Nuevo diagnóstico · ${timelineLabel}</p>
      <h1 style="color: #FFFFFF; font-size: 20px; font-weight: 700; margin: 0;">${d.nombre}</h1>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px; width: 35%;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; font-size: 13px; font-weight: 500;">
            <a href="mailto:${d.email}" style="color: #1B5FA6;">${d.email}</a>
          </td>
        </tr>
        ${d.telefono ? `
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Teléfono</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; font-weight: 500;">${d.telefono}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Empresa</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; font-weight: 500;">${d.empresa || "(no especificada)"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Tamaño</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px;">${tamanoLabel}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Industria</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px;">${d.industria}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px; vertical-align: top;">Problema</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; line-height: 1.5;">${d.dolor}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px; vertical-align: top;">¿Intentó antes?</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; line-height: 1.5;">${intentadoText}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #4A4A4A; font-size: 13px;">Timeline</td>
          <td style="padding: 10px 0; color: #1A1A1A; font-size: 13px; font-weight: 600;">${timelineLabel}</td>
        </tr>
      </table>
    </div>
    <div style="background: #F7F5F0; padding: 16px 28px; border-top: 1px solid #E5E2DB;">
      <p style="font-size: 11px; color: #4A4A4A; margin: 0;">Diagnóstico wizard · ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  });
}

export async function sendNotificationEmail(lead: LeadInput): Promise<void> {
  const tamanoLabel = TAMANO_LABELS[lead.tamano_empresa] ?? lead.tamano_empresa;
  const problema = lead.problema?.trim() || "(no especificado)";
  const cargo = lead.cargo?.trim() || "(no especificado)";

  await getResend().emails.send({
    from: `0kbot Leads <${FROM()}>`,
    to: NOTIFICATION_TO(),
    subject: `Nuevo lead: ${lead.nombre} de ${lead.empresa}`,
    html: `
<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"></head>
<body style="font-family: system-ui, sans-serif; background: #F7F5F0; margin: 0; padding: 40px 20px;">
  <div style="max-width: 520px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; border: 1px solid #E5E2DB; overflow: hidden;">
    <div style="background: #1B5FA6; padding: 20px 28px;">
      <p style="color: #D4A853; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px;">Nuevo lead — landing_diagnostico</p>
      <h1 style="color: #FFFFFF; font-size: 20px; font-weight: 700; margin: 0;">${lead.nombre}</h1>
    </div>
    <div style="padding: 28px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px; width: 35%;">Email</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; font-weight: 500;">
            <a href="mailto:${lead.email}" style="color: #1B5FA6;">${lead.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Empresa</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; font-weight: 500;">${lead.empresa}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Cargo</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px;">${cargo}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px;">Tamaño</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px;">${tamanoLabel}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #4A4A4A; font-size: 13px; vertical-align: top;">Mensaje</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #E5E2DB; color: #1A1A1A; font-size: 13px; line-height: 1.5;">${problema}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #4A4A4A; font-size: 13px;">Fuente</td>
          <td style="padding: 10px 0; color: #1A1A1A; font-size: 13px;">${lead.fuente}</td>
        </tr>
      </table>
    </div>
    <div style="background: #F7F5F0; padding: 16px 28px; border-top: 1px solid #E5E2DB;">
      <p style="font-size: 11px; color: #4A4A4A; margin: 0;">Enviado desde landing_diagnostico · ${new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" })}</p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  });
}
