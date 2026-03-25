import { z } from "zod";

export const leadSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  email: z.string().email("Ingresa un email válido"),

  empresa: z
    .string()
    .min(2, "El nombre de la empresa debe tener al menos 2 caracteres")
    .max(200, "El nombre de la empresa no puede superar los 200 caracteres"),

  cargo: z
    .string()
    .max(100, "El cargo no puede superar los 100 caracteres")
    .optional(),

  tamano_empresa: z.enum(["<20", "20-50", "50-100", "100-200", ">200"] as const, {
    message: "Selecciona el tamaño de tu empresa",
  }),

  problema: z
    .string()
    .max(2000, "El mensaje no puede superar los 2000 caracteres")
    .optional(),

  fuente: z.literal("landing_diagnostico").default("landing_diagnostico"),

  estado: z
    .enum(["nuevo", "contactado", "calificado", "descartado"] as const)
    .default("nuevo"),
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
  tamano: z.enum(["<20", "20-50", "50-100", "100-200", ">200"] as const, {
    message: "Selecciona el tamaño de tu empresa",
  }),
  industria: z.string().min(1).max(200),
  dolor: z.string().min(1).max(1000),
  intentadoAntes: z.boolean(),
  intentadoDetalle: z.string().max(2000).optional(),
  timeline: z.string().min(1).max(200),
});

export type DiagnosticoInput = z.infer<typeof diagnosticoSchema>;
