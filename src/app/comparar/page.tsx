import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Comparaciones honestas para decidir | 0kbot",
  description:
    "Compara 0kbot contra alternativas reales: consultoras tradicionales, contratar personal, ERP o hacerlo interno. Sin marketing, con criterios concretos.",
  keywords: [
    "comparar consultora procesos Chile",
    "0kbot vs consultora tradicional",
    "automatizar vs contratar",
    "ERP vs mejora de procesos",
    "consultora externa vs equipo interno",
    "alternativas mejora de procesos pymes",
  ],
  alternates: { canonical: "https://0kbot.com/comparar" },
  openGraph: {
    title: "Comparaciones honestas para decidir | 0kbot",
    description:
      "0kbot comparado contra consultoras tradicionales, contratar personal, ERP y hacerlo interno. Criterios concretos, sin hype.",
    url: "https://0kbot.com/comparar",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparaciones honestas para decidir | 0kbot",
    description:
      "0kbot comparado contra consultoras tradicionales, contratar personal, ERP y hacerlo interno.",
  },
};

const comparaciones = [
  {
    slug: "0kbot-vs-consultoras-tradicionales",
    titulo: "0kbot vs consultoras tradicionales",
    resumen:
      "Ejecución en 12 semanas y cambios implementados frente a proyectos de 6-12 meses con entregables en PowerPoint.",
  },
  {
    slug: "automatizar-vs-contratar-mas-gente",
    titulo: "Automatizar vs contratar más gente",
    resumen:
      "Cuándo conviene invertir en automatización y cuándo sumar una persona es la decisión correcta.",
  },
  {
    slug: "software-erp-vs-mejora-de-procesos",
    titulo: "Software ERP vs mejora de procesos",
    resumen:
      "Primero ordenas el proceso, después eliges el software. Cuándo un ERP es prematuro para tu pyme.",
  },
  {
    slug: "hacerlo-interno-vs-consultora-externa",
    titulo: "Hacerlo interno vs consultora externa",
    resumen:
      "Costo oportunidad del equipo, velocidad y objetividad. Cuándo hacerlo tú y cuándo traer ayuda afuera.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Comparar", item: "https://0kbot.com/comparar" },
  ],
};

export default function CompararPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Comparar alternativas
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Comparaciones honestas para decidir
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Comparamos 0kbot contra las alternativas reales que evalúa una pyme.
            Incluye los casos en que otra opción es mejor que la nuestra.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparaciones.map((c, i) => (
            <MotionSection key={c.slug} delay={i * 0.07}>
              <Link
                href={`/comparar/${c.slug}`}
                className="group block bg-card border border-[#E5E2DB] rounded-xl p-6 hover:border-primary/40 transition-colors h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-lg text-[#1A1A1A] mb-2">
                      {c.titulo}
                    </h2>
                    <p className="text-sm text-[#666] font-body leading-relaxed">
                      {c.resumen}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary group-hover:text-primary/80 transition-colors font-body">
                      Ver comparación <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Aún no sabes cuál es tu mejor opción?
          </h2>
          <p className="text-white/75 font-body mb-8">
            En 30 minutos revisamos tu caso y te decimos honestamente si somos
            la opción correcta.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
