/**
 * Tokens compartidos para los 6 email templates de 0kbot.
 * Single source of truth para colores, labels reutilizables y helpers.
 */

// Brand color tokens — reusados por los 6 templates
export const EMAIL_COLORS = {
  primary: "#1B5FA6",
  accent: "#D4AF37",
  bg: "#F7F5F0",
  surface: "#FFFFFF",
  border: "#E5E2DB",
  textDark: "#1A1A1A",
  textMid: "#4A4A4A",
} as const;

export const TAMANO_LABELS: Record<string, string> = {
  "<20": "Menos de 20 personas",
  "20-50": "20 a 50 personas",
  "50-100": "50 a 100 personas",
  "100-200": "100 a 200 personas",
  ">200": "Más de 200 personas",
};

export const TIMELINE_LABELS: Record<string, string> = {
  "Lo antes posible — tengo un problema urgente": "🔴 Urgente",
  "En los próximos 3 meses": "🟡 3 meses",
  "En el segundo semestre": "🟢 Segundo semestre",
  "Estoy explorando opciones": "⚪ Explorando",
};

export function formatSantiagoTimestamp(): string {
  return new Date().toLocaleString("es-CL", { timeZone: "America/Santiago" });
}
