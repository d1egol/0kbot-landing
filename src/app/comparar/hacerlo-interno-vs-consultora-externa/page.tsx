import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Check, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hacerlo interno vs consultora externa: qué conviene a tu pyme",
  description:
    "Costo oportunidad, velocidad, objetividad y sostenibilidad comparados. Cuándo tu equipo puede hacerlo solo y cuándo traer ayuda afuera.",
  keywords: [
    "hacerlo interno vs consultora",
    "consultora externa pymes Chile",
    "mejora continua equipo interno",
    "costo oportunidad proyecto interno",
    "velocidad consultoría vs interno",
    "mejora de procesos con equipo propio",
  ],
  alternates: {
    canonical: "https://0kbot.com/comparar/hacerlo-interno-vs-consultora-externa",
  },
  openGraph: {
    title: "Hacerlo interno vs consultora externa | 0kbot",
    description:
      "Cuándo hacerlo con tu equipo y cuándo conviene traer una consultora externa.",
    url: "https://0kbot.com/comparar/hacerlo-interno-vs-consultora-externa",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hacerlo interno vs consultora externa | 0kbot",
    description:
      "Cuándo conviene el equipo interno y cuándo traer consultora externa.",
  },
};

const dimensiones = [
  {
    criterio: "Costo directo",
    izquierda: "Sueldos existentes, pero 20-40% del tiempo del equipo",
    derecha: "120 a 400 UF por proyecto cerrado, sin sorpresas",
  },
  {
    criterio: "Costo oportunidad",
    izquierda: "Alto: el equipo deja de hacer su trabajo habitual",
    derecha: "Bajo: el equipo mantiene el foco en el día a día",
  },
  {
    criterio: "Velocidad",
    izquierda: "6 a 12 meses entre planificar y ejecutar",
    derecha: "12 semanas con metodología probada",
  },
  {
    criterio: "Objetividad",
    izquierda: "Baja: el equipo tiene sesgos y relaciones internas",
    derecha: "Alta: mirada externa sin política de pasillo",
  },
  {
    criterio: "Conocimiento del negocio",
    izquierda: "Profundo desde el primer día",
    derecha: "Se levanta en las primeras 2-3 semanas",
  },
  {
    criterio: "Metodología",
    izquierda: "La que cada persona conozca, a veces improvisada",
    derecha: "Marco probado: Lean, diagramas, indicadores",
  },
  {
    criterio: "Sostenibilidad",
    izquierda: "Depende de quién lideró. Si se va, se pierde",
    derecha: "Alta si se documenta y capacita al equipo durante el proyecto",
  },
  {
    criterio: "Mejor para",
    izquierda: "Mejoras pequeñas y continuas en procesos ya estables",
    derecha: "Cambios profundos que requieren rediseño",
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
      name: "Hacerlo interno vs consultora externa",
      item: "https://0kbot.com/comparar/hacerlo-interno-vs-consultora-externa",
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

      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Comparar
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Hacerlo interno vs consultora externa
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            &ldquo;Esto lo podemos hacer nosotros&rdquo; es una frase honesta y
            muchas veces verdadera. Otras veces cuesta más de lo que parece.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <div className="bg-card border border-[#E5E2DB] rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-primary text-white">
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider">
                  Criterio
                </div>
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider border-t md:border-t-0 md:border-l border-white/20">
                  Equipo interno
                </div>
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider border-t md:border-t-0 md:border-l border-white/20">
                  Consultora externa
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

      <section className="section-padding bg-[#F7F5F0]">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          <MotionSection>
            <div className="bg-white border border-[#E5E2DB] rounded-xl p-6 h-full">
              <h2 className="font-heading font-bold text-xl text-[#1A1A1A] mb-4">
                Cuándo hacerlo interno
              </h2>
              <ul className="space-y-3">
                {[
                  "Tienes una persona con experiencia en mejora de procesos disponible.",
                  "El alcance es acotado: un proceso o un equipo.",
                  "No hay urgencia. Puedes tomarte 6-12 meses sin costo de oportunidad alto.",
                  "El cambio requiere conocimiento muy específico del negocio o rubro.",
                  "Ya tienes cultura de documentación y mejora continua.",
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
                Cuándo traer consultora externa
              </h2>
              <ul className="space-y-3">
                {[
                  "El equipo ya intentó ordenar la operación y quedó a medias.",
                  "Necesitas resultados en meses, no en años.",
                  "Hay conflictos internos que requieren mirada neutral.",
                  "Nadie dentro tiene experiencia en Lean o diagnóstico de procesos.",
                  "El costo oportunidad de sacar al equipo del día a día es demasiado alto.",
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

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-5">
              Nuestra recomendación
            </h2>
            <div className="space-y-4 text-[#1A1A1A] font-body leading-relaxed">
              <p>
                Si dentro del equipo hay alguien con experiencia en procesos y
                tiempo real para dedicar, hacerlo interno es una opción válida
                y más barata en plata directa. El problema es que en la mayoría
                de las pymes ese &ldquo;tiempo real&rdquo; no existe: la gente
                ya está ocupada operando.
              </p>
              <p>
                Cuando el proyecto se hace a pulso, en ratos libres, termina
                estirándose 8 o 10 meses, pierde impulso y queda a medias. Esos
                meses de operación sub-óptima tienen un costo que rara vez se
                contabiliza.
              </p>
              <p>
                Nuestra forma de trabajar busca lo mejor de ambos mundos:
                traemos metodología y velocidad desde afuera, pero dejamos todo
                documentado y capacitamos al equipo en el camino. Después de las
                12 semanas, tu gente puede mantener y mejorar lo construido sin
                depender de nosotros.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Lo haces interno o lo externalizas? Veámoslo.
          </h2>
          <p className="text-white/75 font-body mb-8">
            Te ayudamos a evaluar el costo oportunidad real de cada opción en tu
            caso.
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
