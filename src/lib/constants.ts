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

// Enum canónico de tamaño de empresa — el valor que se persiste en Supabase
// (columna tamano_empresa) y se valida en el leadSchema/diagnosticoSchema.
// Mantener en sincronía con el enum de validations.ts.
export const TAMANO_VALUES = ["<20", "20-50", "50-100", "100-200", ">200"] as const;
export type TamanoValue = (typeof TAMANO_VALUES)[number];

// Opciones presentables (value + label en español). Single source of truth
// para ContactModal, DiagnosticoWizard y email templates (TAMANO_LABELS).
export const TAMANO_OPTIONS: ReadonlyArray<{ value: TamanoValue; label: string }> = [
  { value: "<20", label: "Menos de 20 personas" },
  { value: "20-50", label: "20 a 50 personas" },
  { value: "50-100", label: "50 a 100 personas" },
  { value: "100-200", label: "100 a 200 personas" },
  { value: ">200", label: "Más de 200 personas" },
] as const;

// Lookup helper para emails (compatibilidad con el shape Record<string,string>
// que ya consumían los templates).
export const TAMANO_LABELS: Record<string, string> = Object.fromEntries(
  TAMANO_OPTIONS.map((o) => [o.value, o.label])
);

// Catálogo canónico de slugs de servicios. Los hrefs de ServiciosSection
// (?servicio=<slug>) pasan por aquí para validarse antes de pre-poblar el
// wizard — un slug desconocido se ignora (no se hidrata el wizard con basura).
export const SERVICIO_SLUGS: Record<string, string> = {
  "radiografia-operacional": "Radiografía Operacional",
  "primer-paso-digital": "Primer Paso Digital",
  "sop-express": "SOP Express",
  "diagnostico-costos": "Diagnóstico de Costos Ocultos",
  "plan-accion-priorizado": "Plan de Acción Priorizado",
};

// Mapea rangos del onboarding (granulares) al enum canónico tamano_empresa
// usado por Supabase y el resto del sistema.
export const ONBOARDING_TAMANO_MAP: Record<string, string> = {
  "1-5": "<20",
  "6-20": "<20",
  "21-50": "20-50",
  "51-100": "50-100",
  "100+": ">200",
} as const;
