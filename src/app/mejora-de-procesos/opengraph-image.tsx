import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Mejora de procesos para pymes — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Mejora de procesos",
    headline: "Ordena tu operación y recupera horas cada semana",
    badge: "Lean · 12 semanas",
    tagline: "Sin frenar la operación",
  });
}
