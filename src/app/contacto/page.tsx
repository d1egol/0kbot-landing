import type { Metadata } from "next";
import { Suspense } from "react";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Agendar diagnóstico gratuito de procesos",
  description:
    "Agenda una llamada de 30 minutos sin compromiso. Te mostramos dónde pierde tiempo y dinero tu empresa con números reales. Consultora de procesos para pymes en Chile.",
  keywords: [
    "diagnóstico procesos pymes Chile",
    "agendar consultoría procesos",
    "diagnóstico gratuito automatización",
    "consultoría gratis pymes Chile",
  ],
  alternates: { canonical: "https://0kbot.com/contacto" },
  openGraph: {
    title: "Agendar Diagnóstico Gratuito de Procesos | 0kbot",
    description:
      "Agenda una llamada de 30 minutos sin compromiso. Te mostramos dónde pierde tiempo y dinero tu empresa.",
    url: "https://0kbot.com/contacto",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendar Diagnóstico Gratuito de Procesos | 0kbot",
    description:
      "30 minutos sin compromiso. Te mostramos dónde pierde tiempo y dinero tu empresa con números reales.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Contacto", item: "https://0kbot.com/contacto" },
  ],
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — 0kbot",
  description: "Agenda tu diagnóstico gratuito de procesos con 0kbot.",
  url: "https://0kbot.com/contacto",
  mainEntity: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hola@0kbot.com",
    availableLanguage: "Spanish",
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Suspense>
        <ContactoClient />
      </Suspense>
    </>
  );
}
