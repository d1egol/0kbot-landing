import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

// DM Sans → usamos Geist (variable font similar) como local para el build.
// Playfair Display y JetBrains Mono se cargan vía Google Fonts en runtime.
const dmSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-dm-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "0kbot — Mejora de procesos para pymes chilenas",
  description:
    "Consultora de mejora de procesos para empresas con 10 a 200 personas. Metodología Lean, implementación práctica, resultados medibles en 12 semanas.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com"
  ),
  keywords: [
    "consultoría procesos Chile",
    "mejora procesos pymes",
    "automatización procesos",
    "Lean Six Sigma Chile",
    "eficiencia operacional",
    "optimización empresas medianas",
  ],
  openGraph: {
    title: "0kbot — Mejora de procesos para pymes chilenas",
    description:
      "En 2 semanas te decimos exactamente dónde se va tu plata y tu tiempo. En 12 semanas lo arreglamos y medimos la diferencia.",
    url: "https://0kbot.com",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0kbot — Mejora de procesos para pymes chilenas",
    description:
      "En 2 semanas te decimos exactamente dónde se va tu plata y tu tiempo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts — carga en runtime (no bloquea el build) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        {children}
      </body>

      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
