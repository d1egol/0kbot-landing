import type { Metadata } from "next";
import Script from "next/script";
import {
  Space_Grotesk,
  DM_Sans,
  Playfair_Display,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "0kbot — Automatización de procesos para pymes en Chile",
    template: "%s — 0kbot",
  },
  description:
    "Consultoría de procesos para pymes chilenas. Detectamos pérdidas de tiempo, estandarizamos y automatizamos tu operación. Resultados medibles en 12 semanas.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com"
  ),
  keywords: [
    "automatización de procesos",
    "mejora de procesos pymes Chile",
    "eficiencia operacional",
    "optimización de procesos en pymes",
    "consultoría de procesos",
    "transformación digital para pymes Chile",
    "consultoría procesos Chile",
    "mejora procesos pymes",
    "IA para pymes Chile",
    "digitalización pymes Santiago",
    "automatización procesos Chile",
  ],
  openGraph: {
    title: "0kbot — Automatización de procesos para pymes en Chile",
    description:
      "Detectamos dónde se va tu tiempo y tu plata, y lo arreglamos con cambios concretos. Resultados medibles en 12 semanas.",
    url: "https://0kbot.com",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0kbot — Automatización de procesos para pymes en Chile",
    description:
      "Detectamos dónde se va tu tiempo y tu plata, y lo arreglamos con cambios concretos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://0kbot.com",
  },
  authors: [{ name: "Diego López", url: "https://0kbot.com/nosotros" }],
  creator: "Diego López",
  publisher: "0kbot",
  category: "Consultoría de procesos",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://0kbot.com/#business",
      // "0kbot" usa el dígito cero (0), no la letra O — desambiguación explícita
      name: "0kbot",
      alternateName: ["cero-kbot", "0kbot consultoría", "okbot Chile"],
      legalName: "0kbot",
      description:
        "Consultoría de automatización de procesos para pymes chilenas. Detectamos pérdidas, estandarizamos y automatizamos tu operación con resultados medibles en 12 semanas.",
      url: "https://0kbot.com",
      email: "hola@0kbot.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Consultoría de procesos y automatización para pymes",
      knowsAbout: [
        "Lean Manufacturing",
        "Six Sigma",
        "Mejora de procesos",
        "Automatización de procesos",
        "Eficiencia operacional",
        "Transformación digital",
        "Inteligencia Artificial para pymes",
      ],
      sameAs: [
        "https://www.linkedin.com/in/diego-lopez-dinamarca/",
        "https://www.linkedin.com/company/0kbot",
        "https://share.google/O2Ax7yYq4m3cszu4W",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      knowsLanguage: "es-CL",
      foundingDate: "2024",
      image: "https://0kbot.com/opengraph-image",
      logo: {
        "@type": "ImageObject",
        url: "https://0kbot.com/icon.png",
        width: 1024,
        height: 1024,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.4489,
        longitude: -70.6693,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "hola@0kbot.com",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "Person",
      "@id": "https://0kbot.com/#founder",
      name: "Diego López",
      jobTitle: "Founder",
      sameAs: "https://www.linkedin.com/in/diego-lopez-dinamarca/",
      worksFor: { "@id": "https://0kbot.com/#business" },
      hasCredential: [
        "Ingeniero Civil Industrial, Universidad del Desarrollo",
        "MSc Data Science, Pontificia Universidad Católica",
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
      // Habilita el Sitelink Searchbox en resultados de Google
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://0kbot.com/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const fontVars = [
    spaceGrotesk.variable,
    dmSans.variable,
    playfairDisplay.variable,
    jetbrainsMono.variable,
  ].join(" ");

  return (
    <html lang="es-CL" className={fontVars}>
      <head>
        <Script id="gtm-head" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TKKTNXBS');
        `}</Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TKKTNXBS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
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
