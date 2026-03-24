import { z } from "zod";

/**
 * Schema de validación para el formulario de contacto / captura de leads.
 * Usado tanto en el cliente (validación en tiempo real) como en el servidor (API route).
 */
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

  empleados: z
    .enum(["50-100", "100-200", "200+"], {
      message: "Selecciona un rango válido de empleados",
    })
    .optional(),

  mensaje: z
    .string()
    .max(2000, "El mensaje no puede superar los 2000 caracteres")
    .optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
