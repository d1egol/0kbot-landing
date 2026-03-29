import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cómo trabajamos — 0kbot";
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
            fontWeight: "700",
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
            fontWeight: "600",
            color: "#06B6D4",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          Metodología
        </div>

        <div
          style={{
            fontSize: "52px",
            fontWeight: "700",
            color: "#1A1A1A",
            lineHeight: 1.15,
            maxWidth: "820px",
            marginBottom: "28px",
          }}
        >
          12 semanas de diagnóstico a resultados
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
          }}
        >
          {[
            { num: "01", label: "Diagnóstico" },
            { num: "02", label: "Priorización" },
            { num: "03", label: "Implementación" },
            { num: "04", label: "Medición" },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#1B5FA6",
                  fontFamily: "monospace",
                }}
              >
                {step.num}
              </span>
              <span style={{ fontSize: "16px", color: "#4A4A4A" }}>{step.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
