import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { Search, ListChecks, Wrench, TrendingUp, ArrowRight } from "lucide-react";

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Cómo mejoramos los procesos de tu pyme en 12 semanas",
  description:
    "Metodología práctica en 4 etapas para ordenar, estandarizar y automatizar la operación de pymes chilenas.",
  totalTime: "P12W",
  image: "https://0kbot.com/opengraph-image",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Diagnóstico operacional",
      text: "Levantamos procesos, identificamos dónde se pierde tiempo, dónde falta información y qué duele más.",
      url: "https://0kbot.com/como-trabajamos#diagnostico",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Priorización de mejoras",
      text: "Definimos qué atacar primero según el impacto que genera y la facilidad de implementación.",
      url: "https://0kbot.com/como-trabajamos#priorizacion",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Implementación práctica",
      text: "Configuramos herramientas, flujos y automatizaciones. Capacitamos al equipo y acompañamos la adopción.",
      url: "https://0kbot.com/como-trabajamos#implementacion",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Medición y seguimiento",
      text: "Verificamos que los cambios generen los resultados esperados. Ajustamos lo que haga falta.",
      url: "https://0kbot.com/como-trabajamos#medicion",
    },
  ],
  alternates: { canonical: "https://0kbot.com/como-trabajamos" },
};

export const metadata: Metadata = {
  title: "Metodología de mejora de procesos en 12 semanas para pymes",
  description:
    "Metodología práctica en 4 etapas para ordenar, estandarizar y automatizar la operación de pymes en Chile: diagnóstico, priorización, implementación y medición. Resultados medibles en 12 semanas.",
  keywords: [
    "metodología mejora procesos pymes Chile",
    "consultoría procesos pymes 12 semanas",
    "Lean mejora continua Chile",
    "implementación automatización procesos",
    "diagnóstico operacional pymes",
  ],
};

const pasos = [
  {
    number: "01",
    semanas: "Semanas 1–2",
    icon: Search,
    id: "diagnostico",
    title: "Diagnóstico",
    desc: "Conversamos contigo y tu equipo para entender cómo funciona tu operación hoy. Levantamos procesos, identificamos dónde se pierde tiempo, dónde falta información y qué duele más.",
    detail:
      "El diagnóstico es la base de todo. Sin entender bien el problema, cualquier solución es un parche. Por eso nos tomamos el tiempo de conocer tu realidad antes de proponer cualquier cambio.",
  },
  {
    number: "02",
    semanas: "Semanas 3–4",
    icon: ListChecks,
    id: "priorizacion",
    title: "Priorización de mejoras",
    desc: "No todo se puede resolver al mismo tiempo. Definimos juntos qué atacar primero según el impacto que genera y la facilidad de implementación.",
    detail:
      "Evitamos proyectos enormes que se estancan. Preferimos empezar por cambios que se noten rápido y que den confianza para seguir avanzando.",
  },
  {
    number: "03",
    semanas: "Semanas 5–10",
    icon: Wrench,
    id: "implementacion",
    title: "Implementación práctica",
    desc: "Configuramos herramientas, flujos y automatizaciones que funcionan desde el primer día. Capacitamos a tu equipo y acompañamos la adopción.",
    detail:
      "No dejamos un documento de 50 páginas. Dejamos procesos funcionando, herramientas configuradas y un equipo que sabe usarlas.",
  },
  {
    number: "04",
    semanas: "Semanas 11–12",
    icon: TrendingUp,
    id: "medicion",
    title: "Medición y seguimiento",
    desc: "Verificamos que los cambios generen los resultados esperados. Ajustamos lo que haga falta. Mismo indicador, mismo período — la diferencia es tu ROI.",
    detail:
      "Si no se ve resultado medible, no cobramos el último tramo. La mejora es continua, y seguimos acompañando para asegurar que todo funcione.",
  },
];

export default function ComoTrabajamosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Método
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Un proceso claro, concreto y orientado a resultados
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            12 semanas. Sin interrumpir tu operación. Con resultados medibles al
            final.
          </p>
        </div>
      </section>

      {/* Pasos */}
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-20">
          {pasos.map((paso) => (
            <div key={paso.number} id={paso.id}>
            <MotionSection>
              <div className="flex items-start gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <span
                    className="text-5xl md:text-7xl font-heading font-bold"
                    style={{ color: "#1B5FA6", opacity: 0.2 }}
                  >
                    {paso.number}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <paso.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-mono text-accent font-medium">
                      {paso.semanas}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                    {paso.title}
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed mb-4">
                    {paso.desc}
                  </p>
                  <p
                    className="text-sm text-muted-foreground/80 font-body leading-relaxed border-l-2 pl-4"
                    style={{ borderLeftColor: "#1B5FA6" }}
                  >
                    {paso.detail}
                  </p>
                </div>
              </div>
            </MotionSection>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres saber cómo aplicaría esto a tu pyme?
          </h2>
          <p className="text-white/75 font-body mb-8">
            El primer paso es una conversación para entender tu situación.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Solicitar diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
