import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Transformación Digital para Pymes en Chile",
  description:
    "Consultoría de transformación digital para pymes chilenas. Digitalizamos tu operación paso a paso, sin interrumpir el negocio ni gastar en tecnología innecesaria. Resultados en 12 semanas.",
  keywords: [
    "transformación digital pymes Chile",
    "digitalización pymes Santiago",
    "consultora transformación digital Chile",
    "digitalizar empresa pyme Chile",
    "transformación digital empresas medianas Chile",
    "cómo digitalizar mi empresa Chile",
  ],
  openGraph: {
    title: "Transformación Digital para Pymes en Chile | 0kbot",
    description:
      "Digitalizamos la operación de pymes chilenas paso a paso, sin interrumpir el negocio. 12 semanas, resultados medibles.",
    type: "website",
  },
};

const etapas = [
  {
    num: "01",
    title: "Diagnóstico digital",
    desc: "Entendemos cómo opera tu empresa hoy: qué herramientas usas, dónde hay papel y Excel, qué procesos son manuales y cuáles tienen potencial de digitalización.",
  },
  {
    num: "02",
    title: "Hoja de ruta priorizada",
    desc: "No digitalizamos todo al mismo tiempo. Priorizamos según impacto en el negocio y facilidad de adopción del equipo.",
  },
  {
    num: "03",
    title: "Implementación gradual",
    desc: "Configuramos herramientas, digitalizamos formularios, integramos sistemas y capacitamos al equipo en cada etapa.",
  },
  {
    num: "04",
    title: "Medición de resultados",
    desc: "Medimos el impacto: tiempo ahorrado, errores reducidos, procesos más rápidos. La digitalización tiene que generar retorno.",
  },
];

const mitos = [
  "La transformación digital requiere un gran presupuesto",
  "Hay que cambiar todos los sistemas de una vez",
  "Solo las empresas grandes pueden digitalizarse",
  "La tecnología reemplaza al equipo humano",
];

const realidades = [
  "Muchas digitalizaciones se hacen con herramientas que ya existen o son muy económicas",
  "El mejor enfoque es gradual: una herramienta a la vez, comenzando donde más duele",
  "Las pymes son las que más se benefician porque tienen menos inercia organizacional",
  "La digitalización libera al equipo de tareas repetitivas para hacer trabajo de mayor valor",
];

const faqItems = [
  {
    q: "¿Qué significa exactamente 'transformación digital' para una pyme?",
    a: "Para una pyme chilena, transformación digital significa reemplazar procesos manuales y en papel por procesos digitales, integrar las herramientas que ya usan para que funcionen juntas, y usar datos para tomar mejores decisiones. No requiere tecnología sofisticada.",
  },
  {
    q: "¿Por dónde empieza la transformación digital de una pyme?",
    a: "Por el proceso que más duele. No por el más complejo ni el más visible, sino el que genera más fricción en el día a día. Una vez que ese proceso funciona bien digitalmente, el equipo confía y la adopción de lo siguiente es más fácil.",
  },
  {
    q: "¿Cuánto tiempo toma digitalizar una pyme?",
    a: "Depende del alcance. Un proceso específico puede digitalizarse en 2–4 semanas. Una transformación más amplia de la operación toma 3–6 meses. Nuestro programa de 12 semanas aborda los procesos de mayor impacto.",
  },
  {
    q: "¿Mi equipo va a adoptar las nuevas herramientas?",
    a: "Sí, si la implementación se hace bien. La clave es involucrar al equipo desde el diseño, no imponerles herramientas. Y empezar con herramientas simples que resuelven un problema real que ellos ya tienen.",
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
    { "@type": "ListItem", position: 2, name: "Transformación Digital Pymes", item: "https://0kbot.com/transformacion-digital-pymes" },
  ],
};

export default function TransformacionDigitalPymesPage() {
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
            Transformación Digital · Pymes Chile
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Transformación Digital para Pymes en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Sin grandes inversiones, sin cambiar todo de golpe. Digitalizamos tu operación
            paso a paso, con resultados visibles desde las primeras semanas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
            >
              Diagnóstico gratuito <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Etapas del proceso */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo llevamos la transformación digital de tu pyme
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Un proceso estructurado, gradual y sin interrumpir tu operación actual.
            </p>
          </MotionSection>
          <div className="space-y-10">
            {etapas.map((e) => (
              <MotionSection key={e.num}>
                <div className="flex gap-6 items-start">
                  <span className="text-5xl font-heading font-bold flex-shrink-0" style={{ color: "#1B5FA6", opacity: 0.2 }}>
                    {e.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{e.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/como-trabajamos" className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all">
              Ver metodología detallada <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mitos vs Realidades */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
              Mitos y realidades de la transformación digital en pymes
            </h2>
          </MotionSection>
          <div className="space-y-4">
            {mitos.map((mito, i) => (
              <MotionSection key={mito} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-start gap-3 mb-2">
                    <AlertCircle className="w-4 h-4 text-destructive/60 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground font-body line-through">{mito}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-body font-medium">{realidades[i]}</p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Preguntas frecuentes sobre transformación digital
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
            ¿Listo para digitalizar tu operación?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            El primer diagnóstico es gratuito. En 30 minutos te mostramos
            cuál es el proceso con mayor potencial de digitalización en tu empresa.
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
