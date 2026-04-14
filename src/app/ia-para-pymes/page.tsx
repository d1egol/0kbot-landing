import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, XCircle, Zap, BarChart3, MessageSquare, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "IA para Pymes en Chile: Guía Completa 2026",
  description:
    "Cómo implementar inteligencia artificial en tu pyme en Chile. Herramientas que funcionan, casos reales, costos y por dónde empezar sin desperdiciar presupuesto.",
  keywords: [
    "IA para pymes Chile",
    "inteligencia artificial empresas chilenas",
    "implementar IA pyme Chile",
    "herramientas IA Chile 2026",
    "automatización inteligente pymes",
    "transformación digital pymes Chile IA",
  ],
  openGraph: {
    title: "IA para Pymes en Chile: Guía Completa 2026 | 0kbot",
    description:
      "Herramientas de IA que realmente funcionan para pymes chilenas. Sin hype, con casos reales y un método de 12 semanas.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Pymes en Chile: Guía Completa 2026 | 0kbot",
    description:
      "Herramientas de IA que realmente funcionan para pymes chilenas. Sin hype, con casos reales.",
  },
  alternates: { canonical: "https://0kbot.com/ia-para-pymes" },
};

const loQueFunciona = [
  {
    icon: MessageSquare,
    title: "Automatización de comunicaciones",
    desc: "Chatbots de WhatsApp, respuestas automáticas a consultas frecuentes, seguimiento post-venta. El mayor ROI para pymes porque libera horas del equipo cada semana.",
  },
  {
    icon: FileText,
    title: "Generación de documentos y reportes",
    desc: "Cotizaciones automáticas, resúmenes de reuniones, reportes semanales de ventas. Lo que tomaba horas ahora toma segundos.",
  },
  {
    icon: BarChart3,
    title: "Análisis de datos operativos",
    desc: "Predicción de demanda, identificación de clientes en riesgo, análisis de rentabilidad por producto. La IA encuentra en minutos lo que un humano tardaría días.",
  },
  {
    icon: Zap,
    title: "Automatización de procesos repetitivos",
    desc: "Ingreso de datos entre sistemas, generación de facturas, coordinación de agenda. Si alguien hace lo mismo más de 10 veces por semana, la IA puede hacerlo.",
  },
];

const loQueNoFunciona = [
  "IA sin datos limpios y organizados — primero hay que ordenar el proceso",
  "Automatizar procesos caóticos — la IA amplifica el caos",
  "Proyectos 'todo en uno' (CRM + IA + analytics al mismo tiempo)",
  "Implementaciones sin buy-in del equipo",
];

const faqItems = [
  {
    q: "¿Necesito ser técnico para implementar IA en mi pyme?",
    a: "No. Las herramientas de IA actuales están diseñadas para usuarios sin conocimientos técnicos. Lo que sí necesitas es entender bien tus procesos para saber qué automatizar.",
  },
  {
    q: "¿Cuánto cuesta implementar IA en una pyme chilena?",
    a: "Depende del alcance. Muchas herramientas de IA tienen planes desde $20-50 USD mensuales. Lo importante es elegir las que resuelven el problema específico, no las más sofisticadas.",
  },
  {
    q: "¿Por dónde empiezo a implementar IA en mi empresa?",
    a: "Empieza por el proceso que más duele: el que causa más fricción, el que hace que tu equipo llegue estresado los lunes. Automatiza ese primero, mide el resultado, y usa ese aprendizaje para el siguiente.",
  },
  {
    q: "¿La IA va a reemplazar a mi equipo?",
    a: "No. La IA libera a tu equipo de tareas repetitivas para que puedan hacer el trabajo que realmente importa: resolver problemas complejos, construir relaciones con clientes, crear.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados con IA?",
    a: "Depende del proyecto. La automatización de WhatsApp puede mostrar resultados en la primera semana. Un proyecto de analytics puede tomar 4-6 semanas en producir insights útiles.",
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
    { "@type": "ListItem", position: 2, name: "IA para Pymes", item: "https://0kbot.com/ia-para-pymes" },
  ],
};

export default function IaParaPymesPage() {
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
            IA para Pymes · Chile 2026
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            IA para Pymes en Chile: Qué Funciona en 2026
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Sin hype. Sin promesas vacías. Solo lo que realmente sirve para una pyme
            chilena con recursos limitados y operación real.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
            >
              Diagnóstico gratuito <ArrowRight size={16} />
            </Link>
            <Link
              href="/blog/ia-para-pymes-chile"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg font-semibold font-body text-sm hover:bg-white/20 transition-colors"
            >
              Leer guía completa →
            </Link>
          </div>
        </div>
      </section>

      {/* Lo que funciona */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Qué puede hacer la IA por tu pyme hoy
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Estas son las 4 aplicaciones de IA con mejor retorno para pymes chilenas,
              basadas en proyectos reales.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-2 gap-6">
            {loQueFunciona.map((item, i) => (
              <MotionSection key={item.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que NO funciona */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Lo que NO funciona (y te ahorras tiempo)
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Evitar estos errores vale tanto como saber qué implementar.
            </p>
          </MotionSection>
          <div className="space-y-4">
            {loQueNoFunciona.map((item) => (
              <MotionSection key={item}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <XCircle className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-body">{item}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Método 12 semanas */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo implementamos IA con clientes: el método de 12 semanas
            </h2>
            <p className="text-muted-foreground font-body mb-6 leading-relaxed">
              No llegamos con una solución predeterminada. Primero entendemos tu
              operación, identificamos el proceso con mayor impacto, y recién ahí
              decidimos si la IA es la respuesta — o si hay algo más simple que resuelve
              el problema.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "01", title: "Diagnóstico (semanas 1–2)", desc: "Levantamos procesos, identificamos dónde la IA genera más valor real." },
                { num: "02", title: "Priorización (semanas 3–4)", desc: "Elegimos el proyecto de mayor impacto y menor riesgo para empezar." },
                { num: "03", title: "Implementación (semanas 5–10)", desc: "Configuramos herramientas, integramos sistemas, capacitamos al equipo." },
                { num: "04", title: "Medición (semanas 11–12)", desc: "Verificamos resultados. Si no hay ROI medible, no cobramos el último tramo." },
              ].map((step) => (
                <div key={step.num} className="flex gap-4 items-start">
                  <span className="text-2xl font-heading font-bold text-primary/20 flex-shrink-0 w-8">
                    {step.num}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground font-body">{step.title}</p>
                    <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/como-trabajamos"
              className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all"
            >
              Ver metodología completa <ArrowRight size={16} />
            </Link>
          </MotionSection>
        </div>
      </section>

      {/* Artículos relacionados */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">
            Artículos sobre IA para pymes
          </h2>
          <div className="space-y-3">
            {[
              { href: "/blog/ia-para-pymes-chile", label: "IA para Pymes en 2026: Lo que necesitas saber antes de empezar" },
              { href: "/blog/ia-para-pymes-lo-que-realmente-sirve", label: "IA para pymes: lo que realmente sirve (sin el hype)" },
              { href: "/blog/herramientas-ia-chile", label: "Las mejores herramientas de IA para empresas en Chile" },
              { href: "/blog/3-herramientas-gratuitas-pyme", label: "3 herramientas gratuitas para empezar con IA hoy" },
            ].map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-body"
              >
                <ArrowRight size={14} className="flex-shrink-0" />
                {post.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Preguntas frecuentes sobre IA para pymes
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
            ¿Listo para implementar IA en tu pyme?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            El primer paso es entender cuál es el proceso con mayor impacto.
            Nuestro diagnóstico gratuito lo identifica en 30 minutos.
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
