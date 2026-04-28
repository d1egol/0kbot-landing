import { z } from "zod";
import { LEAD_SOURCES, LEAD_ESTADOS } from "@/lib/constants";

// Normalizadores reutilizables
const normalizedEmail = z
  .string()
  .trim()
  .toLowerCase()
  .email("Ingresa un email válido");

const trimmedString = (max: number, msg?: string) =>
  z.string().trim().max(max, msg);

// Consentimiento explícito Ley 21.719 (Protección de Datos Personales, Chile).
// Debe ser `true` literal — no acepta default ni omitido.
const consentLiteral = z.literal(true, {
  errorMap: () => ({
    message: "Debes aceptar la política de privacidad para continuar",
  }),
});

export const leadSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  email: normalizedEmail,

  empresa: trimmedString(
    200,
    "El nombre de la empresa no puede superar los 200 caracteres"
  ).optional(),

  cargo: trimmedString(100, "El cargo no puede superar los 100 caracteres").optional(),

  tamano_empresa: z
    .enum(["<20", "20-50", "50-100", "100-200", ">200"] as const)
    .optional()
    .default("<20"),

  problema: trimmedString(
    2000,
    "El mensaje no puede superar los 2000 caracteres"
  ).optional(),

  fuente: z.string().default(LEAD_SOURCES.LANDING_HERO),

  estado: z
    .enum(["nuevo", "contactado", "calificado", "descartado"] as const)
    .default(LEAD_ESTADOS.NUEVO),

  consent: consentLiteral,
});

export type LeadInput = z.infer<typeof leadSchema>;

export const diagnosticoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100),
  email: normalizedEmail,
  telefono: trimmedString(50).optional(),
  empresa: trimmedString(200).optional(),
  tamano: z.enum(["<20", "20-50", "50-100", "100-200", ">200"] as const),
  industria: z.string().trim().min(1).max(200),
  dolor: z.string().trim().min(1).max(1000),
  intentadoAntes: z.boolean().default(false),
  intentadoDetalle: trimmedString(2000).optional(),
  timeline: z.string().trim().min(1).max(200),
  consent: consentLiteral,
});

export type DiagnosticoInput = z.infer<typeof diagnosticoSchema>;

export const onboardingSchema = z.object({
  nombre: z.string().trim().min(2).max(100),
  email: normalizedEmail,
  empresa: z.string().trim().min(2).max(200),
  telefono: trimmedString(50).optional(),
  rubro: z.enum([
    "Retail / Comercio",
    "Servicios profesionales",
    "Construcción / Inmobiliaria",
    "Logística / Transporte",
    "Manufactura",
    "Otro",
  ] as const),
  tamano: z.enum(["1-5", "6-20", "21-50", "51-100", "100+"] as const),
  proceso_principal: z.string().trim().min(10).max(1000),
  intentado_antes: z.enum([
    "Nada todavía",
    "Excel / hojas de cálculo",
    "Software específico",
    "Contratamos más personas",
    "Otra cosa",
  ] as const),
  resultado_ideal: z.string().trim().min(10).max(1000),
  plazo: z.enum(["1-3 meses", "3-6 meses", "Más de 6 meses"] as const),
  presupuesto: z.enum([
    "Menos de $500.000 CLP",
    "$500.000 – $1.500.000 CLP",
    "$1.500.000 – $3.000.000 CLP",
    "Abierto / a definir",
  ] as const),
  consent: consentLiteral,
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
