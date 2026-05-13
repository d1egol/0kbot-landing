/**
 * Shared constants for lead sources, estado values, analytics events, and URLs.
 * All magic strings in API routes, components, and validations import from here.
 */

// Lead source identifiers — used as `fuente` in the leads table
export const LEAD_SOURCES = {
  LANDING_HERO: "landing_hero",
  CTA_CALENDLY: "cta_calendly",
  DIAGNOSTICO_WIZARD: "diagnostico_wizard",
  ONBOARDING_FORM: "onboarding_form",
  CONTACTO_PAGE: "contacto_page",
} as const;

export type LeadSource = (typeof LEAD_SOURCES)[keyof typeof LEAD_SOURCES];

// Lead estado values — used as `estado` in the leads table
export const LEAD_ESTADOS = {
  NUEVO: "nuevo",
  CONTACTADO: "contactado",
  CALIFICADO: "calificado",
  DESCARTADO: "descartado",
} as const;

export type LeadEstado = (typeof LEAD_ESTADOS)[keyof typeof LEAD_ESTADOS];

// Calendly booking URL — single source of truth
export const CALENDLY_URL =
  "https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot";

// Contact email — single source of truth
export const CONTACT_EMAIL = "hola@0kbot.com";

// Subdominio vertical seguridad — single source of truth
export const SEGURIDAD_URL = "https://seguridad.0kbot.com";

// Industrias que el DiagnosticoWizard considera "reguladas" — disparan
// derivación a la vertical seguridad post-completion.
export const REGULATED_SECTORS: ReadonlyArray<string> = [
  "Servicios financieros / Fintech",
  "Energía / Utilities",
  "Telecomunicaciones",
  "Infraestructura digital",
  "Salud y clínicas",
  "Transporte y logística crítica",
] as const;

// Analytics event names
export const ANALYTICS_EVENTS = {
  CTA_CLICK: "cta_click",
  GENERATE_LEAD: "generate_lead",
  DIAGNOSTICO_COMPLETED: "diagnostico_completed",
  DIAGNOSTICO_STEP: "diagnostico_step",
  CENTINELA_CTA_CLICK: "centinela_cta_click",
  CROSS_DOMAIN_REFERRAL: "cross_domain_referral",
  REGULATED_SECTOR_DETECTED: "regulated_sector_detected",
} as const;

// Mapea rangos del onboarding (granulares) al enum canónico tamano_empresa
// usado por Supabase y el resto del sistema.
export const ONBOARDING_TAMANO_MAP: Record<string, string> = {
  "1-5": "<20",
  "6-20": "<20",
  "21-50": "20-50",
  "51-100": "50-100",
  "100+": ">200",
} as const;
