import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casos de éxito — 0kbot";
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
            color: "#1B5FA6",
            textTransform: "uppercase",
            letterSpacing: "2px",
            marginBottom: "16px",
          }}
        >
          Casos de éxito
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
          Resultados reales en pymes chilenas
        </div>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginBottom: "20px",
          }}
        >
          {[
            { metric: "-88%", label: "errores de despacho" },
            { metric: "+26%", label: "capacidad sin contratar" },
            { metric: "-70%", label: "inasistencias clínica" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "36px", fontWeight: "700", color: "#1B5FA6" }}>
                {item.metric}
              </span>
              <span style={{ fontSize: "16px", color: "#4A4A4A" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
