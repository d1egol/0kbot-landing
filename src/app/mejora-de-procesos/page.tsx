import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, TrendingUp, Clock, Users, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Mejora de Procesos para Pymes en Chile | Consultoría",
  description:
    "Consultoría de mejora de procesos para pymes chilenas. Identificamos ineficiencias, estandarizamos flujos y eliminamos desperdicio operacional. Metodología Lean, resultados en 12 semanas.",
  keywords: [
    "mejora de procesos pymes Chile",
    "consultoría procesos Chile",
    "mejora continua empresas Chile",
    "optimización operacional pymes",
    "consultor procesos Santiago",
    "Lean Six Sigma Chile pymes",
    "mejora procesos operativos empresa",
  ],
  openGraph: {
    title: "Mejora de Procesos para Pymes en Chile | 0kbot",
    description:
      "Identificamos ineficiencias y mejoramos los procesos operativos de pymes chilenas. Lean, práctico, 12 semanas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejora de Procesos con Lean Six Sigma para Pymes | 0kbot",
    description:
      "Identificamos ineficiencias y mejoramos procesos operativos de pymes chilenas. Lean, práctico, 12 semanas.",
  },
  alternates: { canonical: "https://0kbot.com/mejora-de-procesos" },
};

const beneficios = [
  {
    icon: Clock,
    title: "Menos tiempo perdido",
    desc: "Eliminamos tareas duplicadas, aprobaciones innecesarias y esperas que no agregan valor. Tu equipo hace más en menos tiempo.",
  },
  {
    icon: TrendingUp,
    title: "Menos errores",
    desc: "Los procesos estandarizados reducen la variabilidad. Menos retrabajos, menos reclamos, menos costo oculto.",
  },
  {
    icon: Users,
    title: "Menos dependencia de personas clave",
    desc: "Cuando los procesos están documentados, la operación no depende de que 'el que sabe' esté disponible.",
  },
  {
    icon: BarChart3,
    title: "Más visibilidad",
    desc: "Con procesos ordenados, puedes medir. Con datos, puedes decidir. Con decisiones informadas, puedes crecer.",
  },
];

const metodologia = [
  {
    title: "Levantamiento de procesos",
    desc: "Mapeamos cómo funcionan hoy las cosas realmente (no cómo deberían funcionar según el manual).",
  },
  {
    title: "Identificación de desperdicios",
    desc: "Usando metodología Lean, identificamos los 7 tipos de desperdicio operacional: sobreproducción, esperas, movimiento innecesario, defectos, procesamiento excesivo, inventario y transporte.",
  },
  {
    title: "Diseño del proceso mejorado",
    desc: "Rediseñamos el flujo eliminando pasos que no agregan valor, definiendo roles claros y estándares de trabajo.",
  },
  {
    title: "Implementación y capacitación",
    desc: "Implementamos los cambios con el equipo, no para el equipo. La adopción es clave.",
  },
  {
    title: "Medición de resultados",
    desc: "Definimos indicadores antes de empezar y los medimos al final. Si no hay mejora medible, no hay pago.",
  },
];

const faqItems = [
  {
    q: "¿Qué es la mejora de procesos y para qué sirve en una pyme?",
    a: "La mejora de procesos consiste en analizar cómo funciona la operación de una empresa, identificar ineficiencias (trabajo duplicado, esperas, errores recurrentes), y rediseñar los flujos para que funcionen mejor. En una pyme, el impacto es rápido porque los procesos suelen estar menos estandarizados y hay más margen de mejora.",
  },
  {
    q: "¿Qué metodología usan para mejorar procesos?",
    a: "Usamos principalmente Lean Manufacturing adaptado a servicios y pymes, y elementos de Six Sigma para análisis de calidad cuando el proyecto lo requiere. Diego López, el fundador, es Lean Six Sigma Green Belt con 8+ años de experiencia en operaciones reales.",
  },
  {
    q: "¿Cuánto tiempo toma ver resultados de la mejora de procesos?",
    a: "Muchas mejoras muestran impacto en las primeras 2–4 semanas. El programa completo es de 12 semanas e incluye implementación, capacitación y medición de resultados.",
  },
  {
    q: "¿Tienen que venir a mi empresa o trabajan de forma remota?",
    a: "Trabajamos en la modalidad que tenga más sentido para tu empresa. Muchos proyectos se pueden hacer 100% remoto. Para levantamientos complejos de procesos de terreno, hacemos visitas presenciales.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Mejora de Procesos", item: "https://0kbot.com/mejora-de-procesos" },
  ],
};

export default function MejoraDeProcesosPage() {
  return (
    <>
      {[faqJsonLd, breadcrumbJsonLd].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Mejora de Procesos · Chile
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Mejora de Procesos para Pymes en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Identificamos dónde se pierde tiempo y dinero en tu operación, y lo resolvemos
            con metodología Lean probada. Sin teoría. Con resultados medibles en 12 semanas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
            >
              Diagnóstico gratuito <ArrowRight size={16} />
            </Link>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold font-body text-sm hover:bg-white/20 transition-colors"
            >
              Conocer al equipo →
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
              Por qué la mejora de procesos transforma una pyme
            </h2>
          </MotionSection>
          <div className="grid md:grid-cols-2 gap-6">
            {beneficios.map((b, i) => (
              <MotionSection key={b.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <b.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{b.desc}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Nuestra metodología de mejora de procesos
            </h2>
          </MotionSection>
          <div className="space-y-6">
            {metodologia.map((m, i) => (
              <MotionSection key={m.title} delay={i * 0.06}>
                <div className="flex gap-4">
                  <span className="text-2xl font-heading font-bold flex-shrink-0 w-6 text-primary/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/como-trabajamos" className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all">
              Ver proceso detallado en 12 semanas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Preguntas frecuentes sobre mejora de procesos
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <MotionSection key={item.q}>
                <div className="border-b border-border pb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.a}</p>
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
            ¿Qué proceso quieres mejorar primero?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            Conversamos 30 minutos, te mostramos dónde están las mayores oportunidades
            de mejora en tu empresa, sin costo.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
