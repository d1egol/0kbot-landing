import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Digitalizar tu pyme en Chile sin transformación de slogan",
  description:
    "Consultora de procesos para pymes chilenas. Digitalizamos tu operación paso a paso, ordenando primero los procesos y agregando tecnología cuando aporta. 12 semanas, resultados medibles.",
  keywords: [
    "transformación digital pymes Chile",
    "digitalización pymes Santiago",
    "consultora procesos Chile",
    "ordenar operación pyme Chile",
    "mejora de procesos pymes",
    "cómo digitalizar mi empresa Chile",
  ],
  openGraph: {
    title: "Digitalizar tu pyme en Chile sin transformación de slogan | 0kbot",
    description:
      "Ordenamos primero los procesos, después digitalizamos. Sin grandes inversiones, sin cambiar todo de golpe. 12 semanas con resultados medibles.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalizar tu pyme en Chile sin transformación de slogan | 0kbot",
    description:
      "Ordenamos primero los procesos, después digitalizamos. 12 semanas con resultados medibles.",
  },
  alternates: { canonical: "https://0kbot.com/transformacion-digital-pymes" },
};

const etapas = [
  {
    num: "01",
    title: "Diagnóstico operacional",
    desc: "Entendemos cómo opera tu empresa hoy: qué herramientas usas, dónde hay papel y planillas dispersas, qué procesos viven en la memoria de una persona y cuáles se pueden documentar y digitalizar primero.",
  },
  {
    num: "02",
    title: "Hoja de ruta priorizada",
    desc: "No digitalizamos todo al mismo tiempo. Ordenamos los procesos por impacto en el negocio y por facilidad de adopción. Lo que duele más y se puede tocar primero, va primero.",
  },
  {
    num: "03",
    title: "Estandarización y digitalización gradual",
    desc: "Documentamos el proceso, lo dejamos repetible sin tecnología nueva, y recién ahí lo digitalizamos. Configuramos las herramientas, integramos sistemas y capacitamos al equipo en cada etapa.",
  },
  {
    num: "04",
    title: "Medición de resultados",
    desc: "Medimos contra el KPI definido al inicio: tiempo ahorrado, errores reducidos, decisiones más rápidas. La digitalización tiene que generar retorno o no se sostiene.",
  },
];

const mitos = [
  "La transformación digital requiere una gran inversión inicial",
  "Hay que cambiar todos los sistemas de una vez",
  "Solo las empresas grandes pueden digitalizarse",
  "La tecnología reemplaza al equipo humano",
];

const realidades = [
  "La mayoría de las digitalizaciones se hacen con herramientas que ya existen o son muy económicas — el costo real está en ordenar el proceso primero",
  "El mejor enfoque es gradual: un proceso a la vez, comenzando donde más duele",
  "Las pymes son las que más se benefician porque tienen menos inercia organizacional para cambiar",
  "La digitalización libera al equipo de tareas repetitivas para hacer trabajo que requiere criterio",
];

const faqItems = [
  {
    q: "¿Qué significa exactamente 'digitalizar tu pyme'?",
    a: "Para una pyme chilena significa reemplazar procesos manuales y en papel por procesos digitales documentados, integrar las herramientas que ya usás para que funcionen juntas, y usar datos confiables para tomar mejores decisiones. No requiere tecnología sofisticada. Requiere ordenar primero el proceso.",
  },
  {
    q: "¿Por dónde empieza la digitalización de una pyme?",
    a: "Por el proceso que más duele. No por el más complejo ni el más visible, sino el que genera más fricción en el día a día. Una vez que ese proceso funciona bien — primero ordenado, después digitalizado — el equipo confía y la adopción de lo siguiente es más fácil.",
  },
  {
    q: "¿Cuánto tiempo toma digitalizar una pyme?",
    a: "Depende del alcance. Un proceso específico puede ordenarse y digitalizarse en 4–6 semanas. Una transformación más amplia de la operación toma 3–6 meses. Nuestro programa de 12 semanas aborda los procesos de mayor impacto y deja al menos uno medido y estable al cierre.",
  },
  {
    q: "¿Mi equipo va a adoptar las nuevas herramientas?",
    a: "Sí, si la implementación se hace bien. La clave es involucrar al equipo desde el diseño del proceso, no imponerles herramientas. Y empezar por ordenar lo que ya hacen — la herramienta nueva llega después, cuando todos saben qué problema resuelve.",
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
    { "@type": "ListItem", position: 2, name: "Digitalización para Pymes", item: "https://0kbot.com/transformacion-digital-pymes" },
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
            Digitalización · Pymes Chile
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Digitalizar tu pyme sin transformación digital de slogan
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Sin grandes inversiones, sin cambiar todo de golpe. Primero ordenamos el
            proceso; después lo digitalizamos. Resultados visibles desde las primeras
            semanas.
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
              Cómo llevamos la digitalización de tu pyme
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Un proceso estructurado, gradual y sin interrumpir tu operación actual.
              Ordenamos antes de digitalizar.
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
              Mitos y realidades de la digitalización en pymes
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
            Preguntas frecuentes sobre digitalización de pymes
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
            ¿Listo para ordenar tu operación?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            El primer diagnóstico es gratuito. En 60 minutos te mostramos
            cuál es el proceso con mayor potencial de mejora en tu empresa y
            cómo lo abordaríamos.
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
