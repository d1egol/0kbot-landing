import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, Workflow, Database, Zap, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Automatización de procesos para pymes en Chile",
  description:
    "Consultora de procesos en Chile. Primero ordenamos el flujo, después automatizamos lo repetitivo. Sin amplificar caos. Resultados medibles en 12 semanas.",
  keywords: [
    "automatización de procesos Chile",
    "consultora de procesos Chile",
    "mejora de procesos pymes Santiago",
    "ordenar procesos pyme Chile",
    "Lean Six Sigma pymes Chile",
    "estandarización operativa pymes",
  ],
  openGraph: {
    title: "Automatización de procesos para pymes en Chile | 0kbot",
    description:
      "Primero ordenamos el proceso, después automatizamos. 12 semanas con resultados medibles, sin amplificar caos operativo.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de procesos para pymes en Chile | 0kbot",
    description:
      "Primero ordenamos, después automatizamos. 12 semanas con resultados medibles.",
  },
  alternates: { canonical: "https://0kbot.com/automatizacion-procesos-chile" },
};

const procesos = [
  {
    icon: Workflow,
    title: "Ingreso y traspaso de datos entre sistemas",
    desc: "Eliminamos el copy-paste manual. Cuando el flujo está documentado y el dato es estándar, automatizamos para que un pedido se refleje solo en CRM, producción y contabilidad.",
    impacto: "Potencial estimado: 10–20 hrs/semana recuperadas",
  },
  {
    icon: Zap,
    title: "Comunicaciones y seguimiento",
    desc: "Respuestas estándar a consultas frecuentes, seguimiento post-reunión, alertas a clientes. El equipo interviene solo en lo no rutinario.",
    impacto: "Potencial estimado: 15–25 hrs/semana recuperadas",
  },
  {
    icon: BarChart2,
    title: "Reportes y tableros operativos",
    desc: "Informes que antes tomaban medio día se generan solos sobre datos consolidados. Útil cuando los datos ya viven en un lugar consultable.",
    impacto: "Potencial estimado: 3–6 hrs/semana recuperadas",
  },
  {
    icon: Database,
    title: "Registros y formularios centralizados",
    desc: "Información dispersa en planillas, correos y cuadernos consolidada en un lugar. Todos registran y consultan ahí. Reduce el error de 'cuál era la última versión'.",
    impacto: "Potencial estimado: 50–80% menos errores de captura",
  },
];

const industrias = [
  { name: "Distribuidoras y logística", href: "/casos" },
  { name: "Empresas de servicios técnicos", href: "/casos" },
  { name: "Clínicas y centros de salud", href: "/casos" },
  { name: "Empresas constructoras", href: "/casos" },
  { name: "Bodegas e inventario", href: "/casos" },
  { name: "Empresas de facilities", href: "/casos" },
];

const faqItems = [
  {
    q: "¿Qué procesos se pueden automatizar en una pyme?",
    a: "Cualquier proceso repetitivo y documentable: ingreso de datos, generación de reportes recurrentes, seguimiento comercial, comunicaciones estándar con clientes, coordinación interna. Si alguien hace lo mismo más de 10 veces por semana siguiendo reglas explícitas, es candidato. Si el proceso no está documentado, primero lo ordenamos.",
  },
  {
    q: "¿Cuánto cuesta la automatización de procesos en Chile?",
    a: "Depende del alcance. Trabajamos con presupuestos adaptados a cada pyme y al cierre del diagnóstico te entregamos una propuesta concreta. Lo más importante es que el ROI sea claro antes de empezar.",
  },
  {
    q: "¿Cuánto tiempo toma automatizar un proceso?",
    a: "Una automatización simple sobre un proceso ya ordenado puede estar en producción en 1–2 semanas. Proyectos más complejos con varias integraciones toman 6–10 semanas. Nuestro programa completo es de 12 semanas e incluye ordenar, automatizar y medir.",
  },
  {
    q: "¿Necesito cambiar todos mis sistemas para automatizar?",
    a: "Casi nunca. La mayoría de las automatizaciones se construyen sobre las herramientas que ya usás (Excel, WhatsApp, email, formularios). Cuando vale la pena cambiar una herramienta, lo decimos con argumentos concretos.",
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
    { "@type": "ListItem", position: 2, name: "Automatización de Procesos", item: "https://0kbot.com/automatizacion-procesos-chile" },
  ],
};

export default function AutomatizacionProcesosChilePage() {
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
            Automatización de procesos · Chile
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Automatización de procesos para pymes en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Primero ordenamos el flujo, después automatizamos lo repetitivo. Sin
            amplificar el caos. Tu equipo gana tiempo para lo que requiere criterio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
            >
              Diagnóstico gratuito <ArrowRight size={16} />
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold font-body text-sm hover:bg-white/20 transition-colors"
            >
              Ver servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* Procesos que automatizamos */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Procesos típicos que automatizamos en pymes
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              No automatizamos por automatizar. Identificamos primero dónde está el mayor
              impacto, ordenamos el proceso y construimos la solución mínima que lo
              sostiene.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-2 gap-6">
            {procesos.map((p, i) => (
              <MotionSection key={p.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-4">
                    {p.desc}
                  </p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-accent">{p.impacto}</span>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industrias */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Industrias donde conocemos los patrones
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Cada industria tiene sus procesos típicos. Conocemos los cuellos de botella
              más frecuentes y cómo abordarlos.
            </p>
          </MotionSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {industrias.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="bg-card border border-border rounded-lg px-4 py-3 text-sm font-body text-foreground hover:border-accent/40 hover:bg-accent/5 transition-colors flex items-center gap-2"
              >
                <ArrowRight size={12} className="text-accent flex-shrink-0" />
                {ind.name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all text-sm"
            >
              Ver problemas típicos por industria <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Cómo trabajamos: de cero a automatización en 12 semanas
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Nuestro proceso tiene 4 etapas, está diseñado para no interrumpir tu
              operación actual, y garantiza resultados medibles al final.
            </p>
            <Link
              href="/como-trabajamos"
              className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all"
            >
              Ver metodología completa <ArrowRight size={16} />
            </Link>
          </MotionSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Preguntas frecuentes sobre automatización de procesos
          </h2>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <MotionSection key={item.q}>
                <div className="border-b border-border pb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.a}
                  </p>
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
            ¿Qué proceso te está quitando más tiempo?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos identificamos los 3 procesos con mayor impacto en tu empresa
            y te decimos exactamente cómo automatizarlos.
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
