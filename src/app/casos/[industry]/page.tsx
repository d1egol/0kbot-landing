import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";
import { escenarios, getEscenarioBySlug } from "@/lib/casos";
import { ArrowRight, ChevronRight } from "lucide-react";

interface PageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return escenarios.map((e) => ({ industry: e.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params;
  const escenario = getEscenarioBySlug(industry);
  if (!escenario) return { title: "Caso no encontrado" };

  return {
    title: escenario.metaTitle,
    description: escenario.metaDescription,
    keywords: escenario.keywords,
    openGraph: {
      title: escenario.metaTitle,
      description: escenario.metaDescription,
      type: "website",
    },
  };
}

export default async function CasoIndustriaPage({ params }: PageProps) {
  const { industry } = await params;
  const escenario = getEscenarioBySlug(industry);
  if (!escenario) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://0kbot.com";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Casos", item: `${baseUrl}/casos` },
      { "@type": "ListItem", position: 3, name: escenario.industria, item: `${baseUrl}/casos/${industry}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Cuánto tarda mejorar los procesos en una ${escenario.industria.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestro programa completo dura 12 semanas e incluye diagnóstico, priorización, implementación y medición. Las primeras mejoras visibles suelen aparecer en las semanas 3–4.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tienen que interrumpir la operación para implementar estos cambios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Las implementaciones se diseñan para convivir con la operación en curso. No hay paradas de producción ni interrupciones al servicio.",
        },
      },
    ],
  };

  return (
    <>
      {[breadcrumbJsonLd, faqJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/50 mb-6">
            <Link href="/" className="hover:text-primary-foreground transition-colors">Inicio</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/casos" className="hover:text-primary-foreground transition-colors">Casos</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary-foreground/80">{escenario.industria}</span>
          </nav>
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Caso de industria
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            {escenario.industria}
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Empresa tipo: {escenario.tamano}
          </p>
        </div>
      </section>

      {/* Aviso honestidad */}
      <section className="bg-amber-50 border-b border-amber-100 py-4">
        <div className="container-wide">
          <p className="text-sm text-amber-800 font-body text-center">
            <strong>Nota:</strong> Este es un escenario basado en problemas comunes de la industria. Las métricas provienen de estudios del sector. Estamos documentando nuestros primeros proyectos.
          </p>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="space-y-10">

            <MotionSection>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-red-500/80 mb-2">
                  El problema
                </h2>
                <p className="text-foreground font-body leading-relaxed">
                  {escenario.problema}
                </p>
              </div>
            </MotionSection>

            <MotionSection delay={0.1}>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Raíz del problema
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed italic">
                  {escenario.raizDelProblema}
                </p>
              </div>
            </MotionSection>

            <MotionSection delay={0.15}>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                  Nuestro enfoque
                </h2>
                <ul className="space-y-3">
                  {escenario.enfoque.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-foreground font-body">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: "#1B5FA6" }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </MotionSection>

            <MotionSection delay={0.2}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Impacto esperado (referencia de industria)
                </h2>
                <p className="text-foreground font-body leading-relaxed">
                  {escenario.impactoEsperado}
                </p>
              </div>
            </MotionSection>

          </div>
        </div>
      </section>

      {/* Links relacionados */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">Recursos relacionados</h2>
          <div className="space-y-3">
            {escenario.blogRelacionado && (
              <Link
                href={escenario.blogRelacionado.href}
                className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-body"
              >
                <ArrowRight size={14} className="flex-shrink-0" />
                {escenario.blogRelacionado.label}
              </Link>
            )}
            <Link
              href="/como-trabajamos"
              className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-body"
            >
              <ArrowRight size={14} className="flex-shrink-0" />
              Ver nuestra metodología de 12 semanas
            </Link>
            <Link
              href="/servicios"
              className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-body"
            >
              <ArrowRight size={14} className="flex-shrink-0" />
              Ver todos los servicios
            </Link>
            <Link
              href="/casos"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:gap-3 transition-all font-body"
            >
              <ArrowRight size={14} className="flex-shrink-0" />
              Ver todos los casos por industria
            </Link>
          </div>
        </div>
      </section>

      {/* Otros casos */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Otros casos de industria
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {escenarios
              .filter((e) => e.slug !== industry)
              .map((e) => (
                <Link
                  key={e.slug}
                  href={`/casos/${e.slug}`}
                  className="bg-card border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground hover:border-accent/40 hover:bg-accent/5 transition-colors"
                >
                  {e.industria}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tu empresa tiene este problema?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Agendemos 30 minutos para revisar tu operación. Sin compromiso.
          </p>
          <OpenModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#1A1A1A] rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>
        </div>
      </section>
    </>
  );
}
