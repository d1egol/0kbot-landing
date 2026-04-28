import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";
import { escenarios } from "@/lib/casos";

export const metadata: Metadata = {
  title: "Problemas operativos típicos en pymes chilenas | 0kbot",
  description:
    "Situaciones operativas recurrentes en pymes chilenas y cómo las abordamos: distribuidoras, servicios técnicos, clínicas, constructoras, bodegas y más. Enfoque con metodología Lean.",
  keywords: [
    "automatización procesos pymes Chile",
    "problemas operativos pymes Chile",
    "automatización distribuidora Chile",
    "mejora procesos clínica Chile",
    "automatización constructora Chile",
    "optimización inventario pymes",
  ],
  alternates: { canonical: "https://0kbot.com/casos" },
  openGraph: {
    title: "Problemas operativos típicos en pymes chilenas | 0kbot",
    description:
      "Situaciones operativas recurrentes en pymes chilenas y cómo las abordamos con metodología Lean.",
    url: "https://0kbot.com/casos",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Problemas operativos típicos en pymes chilenas | 0kbot",
    description:
      "Situaciones operativas recurrentes en pymes chilenas y cómo las abordamos con metodología Lean.",
  },
};


const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Casos", item: "https://0kbot.com/casos" },
  ],
};

export default function CasosPage() {
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
            Escenarios y soluciones
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Los mismos problemas aparecen una y otra vez.
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Distribuidoras, constructoras, clínicas, empresas de servicios: los dolores operativos son más comunes de lo que parece. Así es como los abordamos.
          </p>
        </div>
      </section>

      {/* Escenarios */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-12">
            {escenarios.map((e, i) => (
              <MotionSection key={e.industria} delay={i * 0.04}>
                <div className="bg-card border border-muted rounded-xl overflow-hidden shadow-card">
                  <div className="bg-primary px-6 py-4 flex items-center justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-primary-foreground text-lg">
                        {e.industria}
                      </h2>
                      <p className="text-primary-foreground/60 text-sm">{e.tamano}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-red-500/80 mb-2">
                          El problema
                        </h3>
                        <p className="text-sm text-foreground font-body leading-relaxed">
                          {e.problema}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Raíz del problema
                        </h3>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed italic">
                          {e.raizDelProblema}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                          Nuestro enfoque
                        </h3>
                        <ul className="space-y-2">
                          {e.enfoque.map((a) => (
                            <li key={a} className="flex items-start gap-3 text-sm text-foreground font-body">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: "#1B5FA6" }}
                              />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Impacto esperado (referencia de industria)
                        </h3>
                        <p className="text-sm text-foreground font-body leading-relaxed">
                          {e.impactoEsperado}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="px-6 md:px-8 pb-5 border-t border-border pt-4 flex justify-end">
                    <Link
                      href={`/casos/${e.slug}`}
                      className="text-sm text-primary font-medium font-body hover:underline inline-flex items-center gap-1.5"
                    >
                      Ver enfoque completo →
                    </Link>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Reconoces alguno de estos problemas?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Agendemos 30 minutos para revisar tu operación. Sin compromiso.
          </p>
          <OpenModalButton location="casos_page" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#1A1A1A] rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>
        </div>
      </section>
    </>
  );
}
