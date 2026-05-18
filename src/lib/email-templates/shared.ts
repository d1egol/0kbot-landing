/**
 * Tokens compartidos para los 6 email templates de 0kbot.
 * Single source of truth para colores, labels reutilizables y helpers.
 */

// Brand color tokens — reusados por los 6 templates
export const EMAIL_COLORS = {
  primary: "#1B5FA6",
  accent: "#1E40AF",
  bg: "#F7F5F0",
  surface: "#FFFFFF",
  border: "#E5E2DB",
  textDark: "#1A1A1A",
  textMid: "#4A4A4A",
} as const;

// Re-export desde constants.ts — single source of truth.
// Mantiene compatibilidad para los templates que ya hacían `import { TAMANO_LABELS } from "./shared"`.
export { TAMANO_LABELS } from "@/lib/constants";

export const TIMELINE_LABELS: Record<string, string> = {
  "Lo antes posible — tengo un problema urgente": "🔴 Urgente",
  "En los próximos 3 meses": "🟡 3 meses",
  "En el segundo semestre": "🟢 Segundo semestre",
  "Estoy explorando opciones": "⚪ Explorando",
};

export function formatSantiagoTimestamp(): string {
  return new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });
}
