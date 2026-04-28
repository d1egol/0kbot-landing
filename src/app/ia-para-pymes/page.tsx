import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, XCircle, Workflow, FileText, BarChart3, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "IA para Pymes en Chile: cuándo aporta y cuándo es gasto",
  description:
    "La IA es una herramienta del método, no el método. Te explicamos cuándo automatizar con IA aporta a una pyme chilena, cuándo no, y por qué primero ordenamos el proceso.",
  keywords: [
    "IA para pymes Chile",
    "automatización procesos pymes Chile",
    "consultora procesos Chile",
    "mejora de procesos pymes",
    "Lean Six Sigma Chile",
    "diagnóstico operacional pyme",
  ],
  openGraph: {
    title: "IA para Pymes en Chile: cuándo aporta y cuándo es gasto | 0kbot",
    description:
      "Primero ordenamos el proceso, después automatizamos. La IA es herramienta, no oferta. Método de 12 semanas con resultados medibles.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Pymes en Chile: cuándo aporta y cuándo es gasto | 0kbot",
    description:
      "Primero ordenamos el proceso, después automatizamos. La IA es herramienta, no oferta.",
  },
  alternates: { canonical: "https://0kbot.com/ia-para-pymes" },
};

const cuandoAporta = [
  {
    icon: Workflow,
    title: "Comunicaciones repetitivas con flujo claro",
    desc: "Cuando el proceso de atención ya está documentado (qué se responde, cuándo, con qué dato), la IA puede ejecutar las respuestas estándar y dejar al equipo solo lo no rutinario. Si el proceso no existe, la IA solo automatiza el caos.",
  },
  {
    icon: FileText,
    title: "Generación de documentos sobre datos limpios",
    desc: "Cotizaciones, resúmenes, reportes recurrentes. Funciona si los datos viven en un lugar consultable. Si están en 8 planillas distintas, primero hay que consolidarlas — eso es proceso, no IA.",
  },
  {
    icon: BarChart3,
    title: "Análisis sobre series históricas confiables",
    desc: "Predicción de demanda, segmentación de clientes, detección de anomalías. Requiere al menos 6 meses de datos estructurados. Sin esa base, cualquier modelo es ruido.",
  },
  {
    icon: Zap,
    title: "Tareas estandarizadas de alto volumen",
    desc: "Si una persona hace lo mismo más de 10 veces por semana siguiendo reglas explícitas, es candidato a automatización. La IA acá entra como herramienta, no como protagonista.",
  },
];

const cuandoNoAporta = [
  "IA sobre datos sucios — primero hay que ordenar y normalizar",
  "Automatizar procesos caóticos — la IA amplifica el caos",
  "Proyectos 'todo en uno' (CRM + IA + analytics simultáneo) sin alcance acotado",
  "Implementaciones sin definir antes el KPI que se va a mover",
  "Comprar plataforma costosa sin tener claro qué proceso resuelve",
];

const faqItems = [
  {
    q: "¿Vale la pena que mi pyme implemente IA hoy?",
    a: "Depende. Si tu operación todavía tiene procesos no documentados, datos en planillas dispersas o cuellos de botella humanos sin mapear, lo primero no es IA — es ordenar. Una vez que el proceso es estable y repetible, ahí la IA acelera lo que ya funciona.",
  },
  {
    q: "¿Por dónde empieza una pyme con automatización?",
    a: "Por el proceso que más duele: el que causa más fricción y el que tu equipo tiene mapeado mentalmente, aunque no esté documentado. Empezar ahí da resultados visibles en semanas y construye confianza para el siguiente paso.",
  },
  {
    q: "¿Necesito cambiar de software para automatizar procesos?",
    a: "Casi nunca. La mayoría de las automatizaciones se construyen sobre las herramientas que ya usas (Excel, WhatsApp, email, formularios). Cuando vale la pena cambiar una herramienta, lo decimos con argumentos concretos.",
  },
  {
    q: "¿La automatización con IA va a reemplazar a mi equipo?",
    a: "No. La automatización libera al equipo de tareas repetitivas para que dediquen tiempo a lo que requiere criterio: relación con clientes, decisiones bajo incertidumbre, mejora del propio proceso.",
  },
  {
    q: "¿En cuánto tiempo se ven resultados?",
    a: "Una automatización simple de comunicaciones puede mostrar resultados en la primera o segunda semana. Un proyecto de analítica sobre datos históricos toma 4–6 semanas en producir insights útiles. Nuestro programa completo de 12 semanas garantiza al menos un proceso medido y estabilizado al cierre.",
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
            IA en pymes · Chile 2026
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            IA en pymes: cuándo aporta, cuándo es gasto
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            La IA es una herramienta del método, no el método. Primero ordenamos el
            proceso; la automatización con IA viene después, si el problema lo amerita.
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

      {/* Cuándo aporta */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cuándo la IA genuinamente aporta
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Cuatro escenarios típicos donde, sobre un proceso ya ordenado, la IA acelera
              lo que el equipo ya hace bien. Si el proceso no existe, primero lo armamos.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-2 gap-6">
            {cuandoAporta.map((item, i) => (
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

      {/* Cuándo NO */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cuándo no automatizar (todavía)
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Identificar estos cinco patrones te ahorra meses de implementación que no va
              a sostener resultado.
            </p>
          </MotionSection>
          <div className="space-y-4">
            {cuandoNoAporta.map((item) => (
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
              Cómo trabajamos: el proceso primero, la IA después
            </h2>
            <p className="text-muted-foreground font-body mb-6 leading-relaxed">
              No llegamos con una solución predeterminada. Primero entendemos tu operación,
              identificamos el proceso con mayor impacto, y recién ahí decidimos si la
              automatización con IA es la respuesta — o si hay algo más simple que resuelve
              el problema sin tecnología nueva.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "01", title: "Detectar (semanas 1–2)", desc: "Levantamos procesos y datos. Identificamos el cuello de botella con mayor costo y menor riesgo de intervenir." },
                { num: "02", title: "Ordenar (semanas 3–4)", desc: "Documentamos, estandarizamos y dejamos el proceso repetible sin tecnología nueva. Si esto no se sostiene, la automatización tampoco." },
                { num: "03", title: "Automatizar (semanas 5–10)", desc: "Sobre el proceso estable, integramos herramientas y, cuando aporta, sumamos IA para tareas repetitivas de alto volumen." },
                { num: "04", title: "Medir (semanas 11–12)", desc: "Verificamos resultados contra el KPI definido al inicio. Si no hay ROI medible, no cobramos el último tramo." },
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
            Artículos relacionados
          </h2>
          <div className="space-y-3">
            {[
              { href: "/blog/ia-para-pymes-chile", label: "IA para pymes en 2026: lo que necesitas saber antes de empezar" },
              { href: "/blog/ia-para-pymes-lo-que-realmente-sirve", label: "IA en pymes: lo que realmente sirve (sin el hype)" },
              { href: "/blog/herramientas-ia-chile", label: "Herramientas para ordenar y automatizar procesos en Chile" },
              { href: "/blog/3-herramientas-gratuitas-pyme", label: "3 herramientas gratuitas para empezar a ordenar tu operación" },
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
            Preguntas frecuentes sobre IA en pymes
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
            ¿Listo para identificar dónde la automatización aporta de verdad?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            El primer paso es entender cuál es el proceso con mayor impacto y si está
            listo para automatizar. Nuestro diagnóstico gratuito lo identifica en
            60 minutos.
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
