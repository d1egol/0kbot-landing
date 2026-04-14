import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Check, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "0kbot vs consultoras tradicionales: cuál conviene a tu pyme",
  description:
    "Comparación honesta: 12 semanas ejecutando vs 6-12 meses de diagnóstico. Cuándo conviene 0kbot y cuándo una consultora tradicional es mejor opción.",
  keywords: [
    "0kbot vs consultora tradicional",
    "consultora procesos pymes Chile",
    "consultora Lean Chile",
    "alternativa a McKinsey pyme",
    "consultora implementación vs estrategia",
    "consultora boutique procesos Chile",
  ],
  alternates: {
    canonical: "https://0kbot.com/comparar/0kbot-vs-consultoras-tradicionales",
  },
  openGraph: {
    title: "0kbot vs consultoras tradicionales | 0kbot",
    description:
      "12 semanas ejecutando vs 6-12 meses de PowerPoint. Cuándo conviene cada opción.",
    url: "https://0kbot.com/comparar/0kbot-vs-consultoras-tradicionales",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "0kbot vs consultoras tradicionales | 0kbot",
    description:
      "12 semanas ejecutando vs 6-12 meses de PowerPoint. Comparación honesta.",
  },
};

const dimensiones = [
  {
    criterio: "Plazo del proyecto",
    izquierda: "12 semanas, con entregables cada 2-3 semanas",
    derecha: "6 a 12 meses, entregables al final de cada fase",
  },
  {
    criterio: "Precio referencial",
    izquierda: "Desde 180 UF por proyecto completo",
    derecha: "Desde 1.500 UF, muchas veces sobre 5.000 UF",
  },
  {
    criterio: "Foco principal",
    izquierda: "Procesos operativos y ejecución en planta",
    derecha: "Estrategia corporativa, transformación amplia",
  },
  {
    criterio: "Entregable",
    izquierda: "Procesos implementados, automatizaciones corriendo y equipo capacitado",
    derecha: "Informe ejecutivo, roadmap y recomendaciones",
  },
  {
    criterio: "Equipo que trabaja contigo",
    izquierda: "El mismo consultor de principio a fin",
    derecha: "Senior en reuniones, analistas junior en el día a día",
  },
  {
    criterio: "Riesgo para la pyme",
    izquierda: "Bajo: sin cobro si no hay ROI medible al cierre",
    derecha: "Alto: se paga igual aunque las recomendaciones no se implementen",
  },
  {
    criterio: "Flexibilidad de alcance",
    izquierda: "Ajuste semanal según lo que funciona",
    derecha: "Alcance cerrado en propuesta, cambios cuestan aparte",
  },
  {
    criterio: "Mejor para empresas de",
    izquierda: "10 a 200 personas, con operaciones desordenadas",
    derecha: "500+ personas, con decisiones estratégicas complejas",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Comparar", item: "https://0kbot.com/comparar" },
    {
      "@type": "ListItem",
      position: 3,
      name: "0kbot vs consultoras tradicionales",
      item: "https://0kbot.com/comparar/0kbot-vs-consultoras-tradicionales",
    },
  ],
};

export default function Page() {
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
            Comparar
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            0kbot vs consultoras tradicionales
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Dos enfoques distintos para resolver problemas operativos en una
            empresa. Te mostramos cuándo conviene cada uno, sin marketing.
          </p>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <div className="bg-card border border-[#E5E2DB] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-primary text-white">
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider">
                  Criterio
                </div>
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider border-t md:border-t-0 md:border-l border-white/20">
                  0kbot
                </div>
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider border-t md:border-t-0 md:border-l border-white/20">
                  Consultora tradicional
                </div>
              </div>
              {dimensiones.map((d, i) => (
                <div
                  key={d.criterio}
                  className={`grid grid-cols-1 md:grid-cols-3 ${
                    i % 2 === 0 ? "bg-[#F7F5F0]" : "bg-white"
                  }`}
                >
                  <div className="p-5 font-heading font-semibold text-sm text-[#1A1A1A] border-b md:border-b-0 md:border-r border-[#E5E2DB]">
                    {d.criterio}
                  </div>
                  <div className="p-5 text-sm text-[#1A1A1A] font-body leading-relaxed border-b md:border-b-0 md:border-r border-[#E5E2DB]">
                    {d.izquierda}
                  </div>
                  <div className="p-5 text-sm text-[#666] font-body leading-relaxed">
                    {d.derecha}
                  </div>
                </div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Cuándo elegir cada uno */}
      <section className="section-padding bg-[#F7F5F0]">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionSection>
            <div className="bg-white border border-[#E5E2DB] rounded-xl p-6 h-full">
              <h2 className="font-heading font-bold text-xl text-[#1A1A1A] mb-4">
                Cuándo elegir 0kbot
              </h2>
              <ul className="space-y-3">
                {[
                  "Tu empresa tiene entre 10 y 200 personas.",
                  "Necesitas ordenar procesos operativos concretos: despacho, producción, postventa, cobranza.",
                  "El presupuesto está acotado y buscas ROI medible en meses, no en años.",
                  "Quieres que alguien ejecute, no solo recomiende.",
                  "Valoras trabajar con una persona senior de principio a fin.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#1A1A1A] font-body">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>

          <MotionSection delay={0.07}>
            <div className="bg-white border border-[#E5E2DB] rounded-xl p-6 h-full">
              <h2 className="font-heading font-bold text-xl text-[#1A1A1A] mb-4">
                Cuándo elegir una consultora tradicional
              </h2>
              <ul className="space-y-3">
                {[
                  "Tienes más de 500 personas y múltiples unidades de negocio.",
                  "Necesitas una estrategia corporativa o una reestructuración completa.",
                  "Evalúas fusiones, adquisiciones o entrada a nuevos mercados.",
                  "Requieres un informe con respaldo de marca para presentar al directorio o a inversionistas.",
                  "Tu equipo interno va a implementar y solo necesitas el plan.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#1A1A1A] font-body">
                    <X className="w-4 h-4 text-[#666] mt-0.5 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Recomendación */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-5">
              Nuestra recomendación
            </h2>
            <div className="space-y-4 text-[#1A1A1A] font-body leading-relaxed">
              <p>
                Las consultoras tradicionales son buenas en lo suyo: estrategia
                de alto nivel para empresas grandes con presupuestos que lo
                justifican. No son malas, simplemente están diseñadas para otro
                tipo de cliente.
              </p>
              <p>
                Si eres una pyme entre 10 y 200 personas con problemas
                operativos concretos, pagar 3.000 UF por un informe estratégico
                rara vez es el mejor uso de tu plata. Te conviene alguien que
                entre, mapee lo que está roto y lo arregle en 12 semanas.
              </p>
              <p>
                Ese es el caso donde encajamos. Si tu problema es estratégico
                (no operativo), te lo decimos y te derivamos a quien
                corresponda. No tomamos proyectos donde no somos la mejor opción.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres saber si somos la opción correcta para ti?
          </h2>
          <p className="text-white/75 font-body mb-8">
            En 30 minutos revisamos tu caso. Si no somos el mejor fit, te lo
            decimos.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
