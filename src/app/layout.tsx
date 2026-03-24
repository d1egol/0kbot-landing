import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "0kbot — Automatización e IA para empresas chilenas",
  description:
    "Consultora de inteligencia artificial y automatización de procesos para empresas medianas en Chile. Diagnóstico + implementación a medida.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com"
  ),
  openGraph: {
    title: "0kbot — Automatización e IA para empresas chilenas",
    description:
      "Consultora de inteligencia artificial y automatización de procesos para empresas medianas en Chile.",
    url: "https://0kbot.com",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
