import { z } from "zod";
import { LEAD_SOURCES, LEAD_ESTADOS } from "@/lib/constants";

export const leadSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  email: z.string().email("Ingresa un email válido"),

  empresa: z
    .string()
    .max(200, "El nombre de la empresa no puede superar los 200 caracteres")
    .optional(),

  cargo: z
    .string()
    .max(100, "El cargo no puede superar los 100 caracteres")
    .optional(),

  tamano_empresa: z
    .enum(["<20", "20-50", "50-100", "100-200", ">200"] as const)
    .optional()
    .default("<20"),

  problema: z
    .string()
    .max(2000, "El mensaje no puede superar los 2000 caracteres")
    .optional(),

  fuente: z.string().default(LEAD_SOURCES.LANDING_HERO),

  estado: z
    .enum(["nuevo", "contactado", "calificado", "descartado"] as const)
    .default(LEAD_ESTADOS.NUEVO),
});

export type LeadInput = z.infer<typeof leadSchema>;

export const diagnosticoSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100),
  email: z.string().email("Ingresa un email válido"),
  telefono: z.string().max(50).optional(),
  empresa: z.string().max(200).optional(),
  tamano: z.enum(["<20", "20-50", "50-100", "100-200", ">200"] as const),
  industria: z.string().min(1).max(200),
  dolor: z.string().min(1).max(1000),
  intentadoAntes: z.boolean(),
  intentadoDetalle: z.string().max(2000).optional(),
  timeline: z.string().min(1).max(200),
});

export type DiagnosticoInput = z.infer<typeof diagnosticoSchema>;

export const onboardingSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email("Ingresa un email válido"),
  empresa: z.string().min(2).max(200),
  telefono: z.string().max(50).optional(),
  rubro: z.enum([
    "Retail / Comercio",
    "Servicios profesionales",
    "Construcción / Inmobiliaria",
    "Logística / Transporte",
    "Manufactura",
    "Otro",
  ] as const),
  tamano: z.enum(["1-5", "6-20", "21-50", "51-100", "100+"] as const),
  proceso_principal: z.string().min(10).max(1000),
  intentado_antes: z.enum([
    "Nada todavía",
    "Excel / hojas de cálculo",
    "Software específico",
    "Contratamos más personas",
    "Otra cosa",
  ] as const),
  resultado_ideal: z.string().min(10).max(1000),
  plazo: z.enum(["1-3 meses", "3-6 meses", "Más de 6 meses"] as const),
  presupuesto: z.enum([
    "Menos de $500.000 CLP",
    "$500.000 – $1.500.000 CLP",
    "$1.500.000 – $3.000.000 CLP",
    "Abierto / a definir",
  ] as const),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
