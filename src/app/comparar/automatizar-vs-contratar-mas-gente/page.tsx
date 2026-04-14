import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Check, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Automatizar vs contratar más gente: qué conviene a tu pyme",
  description:
    "Análisis honesto con números: cuándo automatizar ahorra plata y cuándo sumar una persona es la mejor decisión. ROI a 24 meses comparado.",
  keywords: [
    "automatizar vs contratar",
    "ROI automatización pymes",
    "cuándo contratar vs automatizar",
    "costo automatización Chile",
    "reemplazar trabajo manual con tecnología",
    "productividad pymes Chile",
  ],
  alternates: {
    canonical: "https://0kbot.com/comparar/automatizar-vs-contratar-mas-gente",
  },
  openGraph: {
    title: "Automatizar vs contratar más gente | 0kbot",
    description:
      "Cuándo automatizar y cuándo contratar. Comparación con números y casos concretos.",
    url: "https://0kbot.com/comparar/automatizar-vs-contratar-mas-gente",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatizar vs contratar más gente | 0kbot",
    description:
      "Cuándo automatizar y cuándo contratar. Comparación con números.",
  },
};

const dimensiones = [
  {
    criterio: "Inversión inicial",
    izquierda: "100 a 400 UF una sola vez (según alcance)",
    derecha: "0 UF, pero sí costo de selección y onboarding",
  },
  {
    criterio: "Costo recurrente anual",
    izquierda: "10 a 40 UF de mantención y licencias",
    derecha: "180 a 600 UF en sueldo + leyes sociales",
  },
  {
    criterio: "Escalabilidad",
    izquierda: "Procesa 10x el volumen sin costo adicional",
    derecha: "Duplicar volumen implica contratar a otra persona",
  },
  {
    criterio: "Rotación y curva de aprendizaje",
    izquierda: "Cero. El proceso queda documentado y corriendo",
    derecha: "3 a 6 meses para que una persona nueva rinda al 100%",
  },
  {
    criterio: "Error humano",
    izquierda: "Casi nulo en tareas repetitivas y de reglas claras",
    derecha: "Inevitable: cansancio, distracción, interpretación",
  },
  {
    criterio: "Tareas que implican juicio o empatía",
    izquierda: "Limitado. IA ayuda pero no reemplaza criterio humano",
    derecha: "Una persona lo hace naturalmente",
  },
  {
    criterio: "Tiempo hasta ver resultados",
    izquierda: "4 a 8 semanas según complejidad",
    derecha: "3 a 6 meses considerando búsqueda y ramp-up",
  },
  {
    criterio: "ROI a 24 meses (caso típico)",
    izquierda: "Recupera inversión entre mes 4 y mes 10",
    derecha: "No hay retorno directo: es costo estructural",
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
      name: "Automatizar vs contratar más gente",
      item: "https://0kbot.com/comparar/automatizar-vs-contratar-mas-gente",
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
            Automatizar vs contratar más gente
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Cuando el equipo no da abasto, hay dos caminos: sumar una persona o
            automatizar parte del trabajo. Ninguno gana siempre.
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
                  Automatizar
                </div>
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider border-t md:border-t-0 md:border-l border-white/20">
                  Contratar
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
                Cuándo conviene automatizar
              </h2>
              <ul className="space-y-3">
                {[
                  "La tarea es repetitiva y sigue reglas claras.",
                  "El volumen ya justifica la inversión (más de 5-10 horas/semana).",
                  "Los errores manuales te están costando plata o clientes.",
                  "El crecimiento futuro haría imposible escalar solo contratando.",
                  "Los datos ya existen en planillas o sistemas que se pueden conectar.",
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
                Cuándo conviene contratar
              </h2>
              <ul className="space-y-3">
                {[
                  "La tarea requiere criterio, negociación o empatía.",
                  "Cada caso es distinto y no se puede estandarizar en reglas.",
                  "El proceso todavía no está claro ni documentado.",
                  "Necesitas presencia física (bodega, terreno, atención directa).",
                  "El volumen es bajo y la inversión en software no se paga.",
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
                La pregunta correcta no es &ldquo;automatizar o contratar&rdquo;,
                es &ldquo;qué parte del trabajo automatizar, y qué parte dejar a
                la persona&rdquo;. En la mayoría de las pymes que vemos, un 30 a
                50% del tiempo del equipo se va en tareas que son puro copiar,
                pegar, revisar y avisar. Esa parte se automatiza.
              </p>
              <p>
                Lo que queda (atender al cliente complicado, negociar con el
                proveedor, decidir qué se produce la próxima semana) se hace
                mejor con personas. Y cuando liberas al equipo de lo repetitivo,
                muchas veces ya no necesitas contratar.
              </p>
              <p>
                Si tu dolor es que &ldquo;falta gente&rdquo;, vale la pena
                revisar antes en qué se va el tiempo del equipo actual. A veces
                el problema no es el número de personas, es qué están haciendo.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Contratar o automatizar? Veámoslo con tus números.
          </h2>
          <p className="text-white/75 font-body mb-8">
            En el diagnóstico estimamos cuánto tiempo podrías liberar antes de
            sumar una persona nueva.
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
