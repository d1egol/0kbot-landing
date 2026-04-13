import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Recursos y guías gratuitas — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Recursos",
    headline: "Guías prácticas para dueños de pymes chilenas",
    tagline: "Sin costo",
  });
}
