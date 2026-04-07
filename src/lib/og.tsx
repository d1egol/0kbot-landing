import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgVariant = {
  eyebrow: string;
  headline: string;
  badge?: string;
  tagline?: string;
};

/**
 * Helper compartido para generar OG images con el look & feel 0kbot.
 * Reemplaza duplicar 100+ líneas de JSX en cada `opengraph-image.tsx`.
 */
export function renderOgImage({ eyebrow, headline, badge, tagline }: OgVariant) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F5F0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "8px",
            background: "#1B5FA6",
          }}
        />

        <div
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#1B5FA6",
            letterSpacing: "-0.5px",
            marginBottom: "28px",
          }}
        >
          0kbot
        </div>

        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#1B5FA6",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          {eyebrow}
        </div>

        <div
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.15,
            maxWidth: "960px",
            marginBottom: "28px",
          }}
        >
          {headline}
        </div>

        {(badge || tagline) && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {badge && (
              <div
                style={{
                  background: "#1B5FA6",
                  color: "#F7F5F0",
                  fontSize: "18px",
                  fontWeight: 600,
                  padding: "12px 28px",
                  borderRadius: "6px",
                }}
              >
                {badge}
              </div>
            )}
            {tagline && (
              <div
                style={{
                  fontSize: "18px",
                  color: "#1B5FA6",
                  fontWeight: 600,
                }}
              >
                {tagline}
              </div>
            )}
          </div>
        )}
      </div>
    ),
    OG_SIZE
  );
}
