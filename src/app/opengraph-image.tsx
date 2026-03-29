import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "0kbot — Mejora de procesos para pymes chilenas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        }}
      >
        {/* Acento azul izquierda */}
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

        {/* Logo */}
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1B5FA6",
            letterSpacing: "-0.5px",
            marginBottom: "32px",
          }}
        >
          0kbot
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: "700",
            color: "#1A1A1A",
            lineHeight: 1.15,
            maxWidth: "800px",
            marginBottom: "28px",
          }}
        >
          Mejora de procesos para pymes chilenas
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "24px",
            color: "#4A4A4A",
            maxWidth: "700px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          En 2 semanas te decimos exactamente dónde se va tu plata y tu tiempo.
          En 12 semanas lo arreglamos.
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "#1B5FA6",
              color: "#F7F5F0",
              fontSize: "18px",
              fontWeight: "600",
              padding: "12px 28px",
              borderRadius: "6px",
            }}
          >
            Diagnóstico gratuito · 30 min
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#1B5FA6",
              fontWeight: "600",
            }}
          >
            0kbot.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
