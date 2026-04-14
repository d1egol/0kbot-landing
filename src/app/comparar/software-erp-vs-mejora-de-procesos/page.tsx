import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Check, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Software ERP vs mejora de procesos: por dónde partir",
  description:
    "Instalar un ERP sin ordenar procesos es caro y frustra. Explicamos cuándo un ERP tiene sentido y cuándo conviene primero ordenar la operación.",
  keywords: [
    "ERP vs procesos pymes",
    "implementar ERP Chile pyme",
    "cuándo implementar ERP",
    "mejora de procesos antes de ERP",
    "fracaso ERP pymes",
    "ERP vs consultoría de procesos",
  ],
  alternates: {
    canonical: "https://0kbot.com/comparar/software-erp-vs-mejora-de-procesos",
  },
  openGraph: {
    title: "Software ERP vs mejora de procesos | 0kbot",
    description:
      "Cuándo conviene un ERP y cuándo es mejor ordenar procesos primero.",
    url: "https://0kbot.com/comparar/software-erp-vs-mejora-de-procesos",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software ERP vs mejora de procesos | 0kbot",
    description: "Cuándo ERP y cuándo ordenar procesos primero.",
  },
};

const dimensiones = [
  {
    criterio: "Qué resuelve",
    izquierda: "Registro y control centralizado una vez que el proceso ya existe",
    derecha: "Define cómo debe funcionar la operación antes de elegir herramienta",
  },
  {
    criterio: "Requisito previo",
    izquierda: "Procesos estandarizados y documentados",
    derecha: "Solo voluntad de ordenar",
  },
  {
    criterio: "Inversión típica en pymes",
    izquierda: "300 a 3.000 UF en implementación + 2-15 UF/mes por usuario",
    derecha: "120 a 400 UF por proyecto de 12 semanas",
  },
  {
    criterio: "Tiempo hasta ver valor",
    izquierda: "6 a 18 meses si se hace bien",
    derecha: "4 a 12 semanas con resultados parciales desde la semana 3",
  },
  {
    criterio: "Tasa de adopción",
    izquierda: "Baja si el equipo no entiende el proceso debajo",
    derecha: "Alta: el equipo ayuda a diseñar su forma de trabajar",
  },
  {
    criterio: "Riesgo principal",
    izquierda: "Automatizar el caos: queda el mismo desorden, pero más caro",
    derecha: "Bajo. El peor caso es quedarte con un proceso claro sin software",
  },
  {
    criterio: "Mejor momento",
    izquierda: "Empresa sobre 50 personas con procesos ya estables",
    derecha: "Empresa entre 10 y 50 personas con operación desordenada",
  },
  {
    criterio: "Compatibilidad",
    izquierda: "Se complementan: primero procesos, después ERP si hace falta",
    derecha: "Es el paso lógico previo a cualquier software grande",
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
      name: "Software ERP vs mejora de procesos",
      item: "https://0kbot.com/comparar/software-erp-vs-mejora-de-procesos",
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
            Software ERP vs mejora de procesos
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            No son alternativas, son dos pasos distintos. El problema es que
            muchas pymes los hacen en el orden equivocado.
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
                  Software ERP
                </div>
                <div className="p-5 font-heading font-semibold text-sm uppercase tracking-wider border-t md:border-t-0 md:border-l border-white/20">
                  Mejora de procesos
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
                Cuándo un ERP tiene sentido
              </h2>
              <ul className="space-y-3">
                {[
                  "Ya tienes más de 50 personas y procesos estables.",
                  "El equipo usa al menos 3 sistemas que no se hablan entre sí.",
                  "Necesitas trazabilidad contable, tributaria o de inventario seria.",
                  "Tienes presupuesto para implementación y para mantenerlo vivo.",
                  "Hay alguien dedicado a liderar la adopción internamente.",
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
                Cuándo mejorar procesos primero
              </h2>
              <ul className="space-y-3">
                {[
                  "Eres una pyme entre 10 y 50 personas.",
                  "Cada persona hace el mismo trabajo de forma distinta.",
                  "La información vive en planillas, WhatsApp y cabezas.",
                  "Probaste un software antes y el equipo no lo usó.",
                  "No quieres gastar 1.000 UF para automatizar el desorden actual.",
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
                El error más caro que vemos es instalar un ERP antes de tener
                procesos claros. La implementación se vuelve interminable, el
                equipo se resiste y terminas con un sistema de 800 UF al mes que
                nadie usa bien. Después la culpa se la llevan el software o el
                consultor, cuando en realidad el problema venía de antes.
              </p>
              <p>
                La secuencia correcta es simple: primero definir cómo debería
                funcionar cada proceso crítico, estandarizar los registros y
                automatizar lo repetitivo con herramientas simples. Después de
                eso, si el tamaño de la operación lo justifica, recién ahí un
                ERP agrega valor real.
              </p>
              <p>
                Para muchas pymes de menos de 50 personas, después de ordenar
                procesos el ERP queda innecesario por varios años. Tres o cuatro
                herramientas bien conectadas resuelven el 90% del problema a
                menos del 20% del costo.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Estás pensando en un ERP? Veamos si es el momento.
          </h2>
          <p className="text-white/75 font-body mb-8">
            Te decimos honestamente si conviene partir con procesos o si ya estás
            listo para software grande.
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
