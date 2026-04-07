import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Automatización de procesos en Chile — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Automatización de procesos",
    headline: "Automatiza lo que hoy te consume horas cada semana",
    badge: "Chile 2026",
    tagline: "Pymes 10–200 personas",
  });
}
