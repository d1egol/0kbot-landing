"use client";

import { useEffect } from "react";

// global-error.tsx replaces the root layout entirely when triggered.
// Cannot use Tailwind classes or custom fonts here — they require the layout.
// Inline styles are intentional.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Global error]", error);
  }, [error]);

  return (
    <html lang="es-CL">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          background: "#F7F5F0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "2rem",
          margin: 0,
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "#1A1A1A",
          }}
        >
          Error crítico
        </h1>
        <p
          style={{
            color: "#666",
            maxWidth: 400,
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
          Ocurrió un error grave en la aplicación. Por favor recarga la página.
        </p>
        <button
          onClick={reset}
          style={{
            padding: "0.75rem 1.5rem",
            background: "#1B5FA6",
            color: "#fff",
            border: "none",
            borderRadius: "0.75rem",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
        >
          Recargar
        </button>
      </body>
    </html>
  );
}
