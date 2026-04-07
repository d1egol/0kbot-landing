import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "IA para Pymes en Chile — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "IA para Pymes",
    headline: "IA que funciona en pymes chilenas — sin hype",
    badge: "Guía 2026",
    tagline: "Con casos reales",
  });
}
