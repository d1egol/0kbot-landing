import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const runtime = "edge";
export const alt = "Nosotros — 0kbot";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgImage({
    eyebrow: "Nosotros",
    headline: "Hemos estado del otro lado",
    tagline: "Ing. Civil Industrial UDD · MSc Data Science PUC",
  });
}
