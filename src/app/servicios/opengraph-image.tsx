import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Servicios — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Servicios",
    headline: "Diagnóstico, automatización y datos para tu pyme",
    tagline: "6 servicios prácticos. Resultados medibles.",
  });
}
