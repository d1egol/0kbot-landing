import { Resend } from "resend";
import type { LeadInput, DiagnosticoInput, OnboardingInput } from "@/lib/validations";
import { leadConfirmationHtml } from "@/lib/email-templates/lead-confirmation";
import { leadNotificationHtml } from "@/lib/email-templates/lead-notification";
import { diagnosticoConfirmationHtml } from "@/lib/email-templates/diagnostico-confirmation";
import { diagnosticoNotificationHtml } from "@/lib/email-templates/diagnostico-notification";
import { onboardingConfirmationHtml } from "@/lib/email-templates/onboarding-confirmation";
import { onboardingNotificationHtml } from "@/lib/email-templates/onboarding-notification";

class ResendNotConfiguredError extends Error {
  constructor() {
    super("RESEND_API_KEY no está definido — email omitido");
    this.name = "ResendNotConfiguredError";
  }
}

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new ResendNotConfiguredError();
  return new Resend(key);
}

const FROM = () => process.env.RESEND_FROM_EMAIL ?? "hola@0kbot.com";
const NOTIFICATION_TO = () => process.env.NOTIFICATION_EMAIL ?? "hola@0kbot.com";

const DIAGNOSTICO_TIMELINE_LABELS: Record<string, string> = {
  "Lo antes posible — tengo un problema urgente": "🔴 Urgente",
  "En los próximos 3 meses": "🟡 3 meses",
  "En el segundo semestre": "🟢 Segundo semestre",
  "Estoy explorando opciones": "⚪ Explorando",
};

export type EmailFlow = "lead" | "diagnostico" | "onboarding";
export type EmailKind = "confirmation" | "notification";

type FlowPayload = {
  lead: LeadInput;
  diagnostico: DiagnosticoInput;
  onboarding: OnboardingInput;
};

type Variant<F extends EmailFlow> = {
  fromLabel: string;
  to: (p: FlowPayload[F]) => string;
  subject: (p: FlowPayload[F]) => string;
  html: (p: FlowPayload[F]) => string;
};

type VariantMap = {
  [F in EmailFlow]: Record<EmailKind, Variant<F>>;
};

const VARIANTS: VariantMap = {
  lead: {
    confirmation: {
      fromLabel: "0kbot",
      to: (l) => l.email,
      subject: () => "Tu diagnóstico está agendado — 0kbot",
      html: (l) => leadConfirmationHtml(l),
    },
    notification: {
      fromLabel: "0kbot Leads",
      to: () => NOTIFICATION_TO(),
      subject: (l) => `Nuevo lead: ${l.nombre} de ${l.empresa}`,
      html: (l) => leadNotificationHtml(l),
    },
  },
  diagnostico: {
    confirmation: {
      fromLabel: "0kbot",
      to: (d) => d.email,
      subject: () => "Recibimos tu diagnóstico — 0kbot",
      html: (d) => diagnosticoConfirmationHtml(d),
    },
    notification: {
      fromLabel: "0kbot Leads",
      to: () => NOTIFICATION_TO(),
      subject: (d) => {
        const label = DIAGNOSTICO_TIMELINE_LABELS[d.timeline] ?? d.timeline;
        return `[Diagnóstico] ${d.nombre} · ${label}`;
      },
      html: (d) => diagnosticoNotificationHtml(d),
    },
  },
  onboarding: {
    confirmation: {
      fromLabel: "0kbot",
      to: (d) => d.email,
      subject: () => "Todo listo para nuestra reunión — 0kbot",
      html: (d) => onboardingConfirmationHtml(d),
    },
    notification: {
      fromLabel: "0kbot Leads",
      to: () => NOTIFICATION_TO(),
      subject: (d) => `[Onboarding] ${d.nombre} · ${d.empresa} · ${d.rubro}`,
      html: (d) => onboardingNotificationHtml(d),
    },
  },
};

export async function sendTransactionalEmail<F extends EmailFlow>(
  flow: F,
  kind: EmailKind,
  payload: FlowPayload[F]
): Promise<void> {
  const variant = VARIANTS[flow][kind] as Variant<F>;
  const resend = getResend();
  await resend.emails.send({
    from: `${variant.fromLabel} <${FROM()}>`,
    to: variant.to(payload),
    subject: variant.subject(payload),
    html: variant.html(payload),
  });
}
