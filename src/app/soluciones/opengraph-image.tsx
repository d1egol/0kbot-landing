import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Soluciones por desafío operativo — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Soluciones",
    headline: "¿Cuál es el problema que frena tu operación?",
    tagline: "Soluciones concretas para cada desafío operativo",
  });
}
