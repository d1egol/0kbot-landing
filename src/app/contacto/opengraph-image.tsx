import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Contacto — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Contacto",
    headline: "Conversemos sobre tu operación",
    badge: "Diagnóstico gratuito · 30 min",
    tagline: "Sin compromiso",
  });
}
