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
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://0kbot.com/#business",
      name: "0kbot",
      description:
        "Consultora de mejora de procesos para pymes chilenas. Metodología Lean, implementación práctica, resultados medibles en 12 semanas.",
      url: "https://0kbot.com",
      email: "contacto@0kbot.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      areaServed: {
        "@type": "Country",
        name: "Chile",
      },
      serviceType: "Consultoría de mejora de procesos",
      knowsAbout: [
        "Lean Manufacturing",
        "Six Sigma",
        "Mejora de procesos",
        "Automatización de procesos",
        "Eficiencia operacional",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://0kbot.com/#founder",
      name: "Diego",
      jobTitle: "Founder",
      worksFor: { "@id": "https://0kbot.com/#business" },
      hasCredential: [
        "Ingeniero Civil Industrial PUC",
        "MSc Data Science",
        "Lean Six Sigma Green Belt",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://0kbot.com/#website",
      url: "https://0kbot.com",
      name: "0kbot",
      publisher: { "@id": "https://0kbot.com/#business" },
      inLanguage: "es-CL",
    },
  ],
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>

      {META_PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

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
