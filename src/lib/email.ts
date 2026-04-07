import { Resend } from "resend";
import type { LeadInput, DiagnosticoInput, OnboardingInput } from "@/lib/validations";
import { leadConfirmationHtml } from "@/lib/email-templates/lead-confirmation";
import { leadNotificationHtml } from "@/lib/email-templates/lead-notification";
import { diagnosticoConfirmationHtml } from "@/lib/email-templates/diagnostico-confirmation";
import { diagnosticoNotificationHtml } from "@/lib/email-templates/diagnostico-notification";
import { onboardingConfirmationHtml } from "@/lib/email-templates/onboarding-confirmation";
import { onboardingNotificationHtml } from "@/lib/email-templates/onboarding-notification";

// Lazy init con guard — evita crash si RESEND_API_KEY no está definido
// (e.g. preview builds, primera sesión sin .env.local). Loguea y retorna null.
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[email] RESEND_API_KEY no está definido — email omitido");
    return null;
  }
  return new Resend(key);
}
const FROM = () => process.env.RESEND_FROM_EMAIL ?? "hola@0kbot.com";
const NOTIFICATION_TO = () => process.env.NOTIFICATION_EMAIL ?? "hola@0kbot.com";

export async function sendConfirmationEmail(lead: LeadInput): Promise<void> {
  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: `0kbot <${FROM()}>`,
    to: lead.email,
    subject: "Tu diagnóstico está agendado — 0kbot",
    html: leadConfirmationHtml(lead),
  });
}

export async function sendNotificationEmail(lead: LeadInput): Promise<void> {
  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: `0kbot Leads <${FROM()}>`,
    to: NOTIFICATION_TO(),
    subject: `Nuevo lead: ${lead.nombre} de ${lead.empresa}`,
    html: leadNotificationHtml(lead),
  });
}

export async function sendDiagnosticoConfirmationEmail(
  d: DiagnosticoInput
): Promise<void> {
  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: `0kbot <${FROM()}>`,
    to: d.email,
    subject: "Recibimos tu diagnóstico — 0kbot",
    html: diagnosticoConfirmationHtml(d),
  });
}

export async function sendDiagnosticoNotificationEmail(
  d: DiagnosticoInput
): Promise<void> {
  const resend = getResend();
  if (!resend) return;
  const timelineLabel =
    {
      "Lo antes posible — tengo un problema urgente": "🔴 Urgente",
      "En los próximos 3 meses": "🟡 3 meses",
      "En el segundo semestre": "🟢 Segundo semestre",
      "Estoy explorando opciones": "⚪ Explorando",
    }[d.timeline] ?? d.timeline;

  await resend.emails.send({
    from: `0kbot Leads <${FROM()}>`,
    to: NOTIFICATION_TO(),
    subject: `[Diagnóstico] ${d.nombre} · ${timelineLabel}`,
    html: diagnosticoNotificationHtml(d),
  });
}

export async function sendOnboardingConfirmationEmail(
  d: OnboardingInput
): Promise<void> {
  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: `0kbot <${FROM()}>`,
    to: d.email,
    subject: "Todo listo para nuestra reunión — 0kbot",
    html: onboardingConfirmationHtml(d),
  });
}

export async function sendOnboardingNotificationEmail(
  d: OnboardingInput
): Promise<void> {
  const resend = getResend();
  if (!resend) return;
  await resend.emails.send({
    from: `0kbot Leads <${FROM()}>`,
    to: NOTIFICATION_TO(),
    subject: `[Onboarding] ${d.nombre} · ${d.empresa} · ${d.rubro}`,
    html: onboardingNotificationHtml(d),
  });
}
