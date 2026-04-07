import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Transformación digital para pymes — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Transformación digital",
    headline: "Transformación digital real para pymes chilenas",
    badge: "Método 12 semanas",
    tagline: "Resultados medibles",
  });
}
