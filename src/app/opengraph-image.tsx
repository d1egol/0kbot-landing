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
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(27,95,166,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(27,95,166,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Blue accent left bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "#1B5FA6",
          }}
        />

        {/* LEFT COLUMN — content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 56px 72px 72px",
            position: "relative",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#1B5FA6",
              letterSpacing: "-0.5px",
              marginBottom: "28px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "#1B5FA6",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "16px",
                fontWeight: "800",
              }}
            >
              0k
            </div>
            0kbot
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: "52px",
              fontWeight: "700",
              color: "#1A1A1A",
              lineHeight: 1.1,
              maxWidth: "520px",
              marginBottom: "20px",
            }}
          >
            Mejora de procesos para pymes en Chile.
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "22px",
              color: "#1B5FA6",
              fontWeight: "600",
              marginBottom: "32px",
            }}
          >
            No vendemos IA. Vendemos lunes tranquilos.
          </div>

          {/* CTA pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                background: "#1B5FA6",
                color: "#F7F5F0",
                fontSize: "16px",
                fontWeight: "600",
                padding: "12px 24px",
                borderRadius: "6px",
              }}
            >
              Diagnóstico gratuito · 30 min
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#888",
              }}
            >
              0kbot.com
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — visual metrics card */}
        <div
          style={{
            width: "360px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 48px 48px 0",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              border: "1px solid #E5E2DB",
              padding: "28px",
              width: "100%",
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                paddingBottom: "16px",
                borderBottom: "1px solid #F0EDE8",
              }}
            >
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#1A1A1A", fontFamily: "sans-serif" }}>
                Diagnóstico típico
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "600",
                  color: "#059669",
                  background: "#ECFDF5",
                  border: "1px solid #A7F3D0",
                  padding: "3px 10px",
                  borderRadius: "20px",
                  fontFamily: "sans-serif",
                }}
              >
                12 semanas
              </span>
            </div>

            {/* Metric rows */}
            {[
              { label: "Coordinación de pedidos", before: "12 h/sem", after: "2 h/sem", pct: 83 },
              { label: "Visitas fallidas", before: "33%", after: "12%", pct: 64 },
              { label: "Reporte gerencial", before: "4 hrs", after: "Auto", pct: 100 },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  background: "#F7F5F0",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  marginBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: "600", color: "#1A1A1A", fontFamily: "sans-serif" }}>
                    {row.label}
                  </span>
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <span style={{ fontSize: "11px", color: "#999", textDecoration: "line-through", fontFamily: "sans-serif" }}>
                      {row.before}
                    </span>
                    <span style={{ fontSize: "11px", fontWeight: "700", color: "#059669", fontFamily: "sans-serif" }}>
                      {row.after}
                    </span>
                  </div>
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    height: "4px",
                    background: "#E5E2DB",
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: `${100 - row.pct}%`,
                      height: "100%",
                      background: "linear-gradient(to right, #EF4444, #10B981)",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </div>
            ))}

            {/* Footer total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "12px",
                borderTop: "1px solid #F0EDE8",
              }}
            >
              <span style={{ fontSize: "11px", color: "#999", fontFamily: "sans-serif" }}>Ahorro estimado</span>
              <span style={{ fontSize: "18px", fontWeight: "700", color: "#059669", fontFamily: "sans-serif" }}>
                ~14 hrs/sem
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
