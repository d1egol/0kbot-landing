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

// Analytics event names
export const ANALYTICS_EVENTS = {
  CTA_CLICK: "cta_click",
  GENERATE_LEAD: "generate_lead",
  DIAGNOSTICO_COMPLETED: "diagnostico_completed",
} as const;
