import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import {
  ShoppingBag,
  Factory,
  Briefcase,
  Stethoscope,
  Truck,
  ArrowRight,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría de procesos por industria — 0kbot",
  description:
    "Mejora de procesos y automatización para pymes chilenas por sector: retail, manufactura, servicios profesionales, salud y logística. Metodología de 12 semanas.",
  keywords: [
    "consultoría procesos por industria Chile",
    "automatización pymes Chile",
    "mejora procesos retail Chile",
    "automatización manufactura pyme",
    "procesos servicios profesionales Chile",
    "operación pymes salud Chile",
    "logística pymes Chile",
  ],
  alternates: { canonical: "https://0kbot.com/industria" },
  openGraph: {
    title: "Consultoría de procesos por industria | 0kbot",
    description:
      "Mismo método Lean de 12 semanas, adaptado a los dolores y herramientas de cada sector.",
    url: "https://0kbot.com/industria",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de procesos por industria | 0kbot",
    description:
      "Retail, manufactura, servicios profesionales, salud y logística. Método Lean de 12 semanas.",
  },
};

const industrias = [
  {
    slug: "retail",
    icon: ShoppingBag,
    title: "Retail y comercio",
    desc: "Inventario, múltiples canales y reposición manual. Sincronizamos Bsale, Shopify, Mercado Libre y WhatsApp.",
  },
  {
    slug: "manufactura",
    icon: Factory,
    title: "Manufactura y producción",
    desc: "Órdenes de trabajo en papel, trazabilidad de lote y mermas. Llevamos planta a tableros con datos reales.",
  },
  {
    slug: "servicios-profesionales",
    icon: Briefcase,
    title: "Servicios profesionales",
    desc: "Time tracking, facturación por proyecto y pipeline comercial. Menos planillas, más visibilidad.",
  },
  {
    slug: "salud",
    icon: Stethoscope,
    title: "Salud (operación)",
    desc: "Agendas, recordatorios y registros administrativos. Foco en operación, no en software clínico regulado.",
  },
  {
    slug: "logistica",
    icon: Truck,
    title: "Logística y distribución",
    desc: "Rutas, track & trace, POD digital y liquidaciones. Visibilidad operacional para el día a día.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Industria", item: "https://0kbot.com/industria" },
  ],
};

export default function IndustriaHubPage() {
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
            Industria
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Consultoría de procesos por industria
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Misma metodología Lean de 12 semanas. Adaptada a los dolores, herramientas
            y jerga de tu sector.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-5">
          <MotionSection>
            <p className="text-muted-foreground font-body leading-relaxed">
              Trabajamos con pymes chilenas de 10 a 200 personas. El método es el mismo
              en todos los casos: cuatro fases, doce semanas, resultados medibles. Lo que
              cambia es el punto de partida. No es lo mismo ordenar una planta de alimentos
              con órdenes de trabajo en papel que un estudio de arquitectura que pierde
              horas sin facturar.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Por eso agrupamos el trabajo por industria. En cada página encontrarás los
              dolores que vemos repetirse en ese sector, las herramientas que mejor
              funcionan para una pyme chilena y ejemplos hipotéticos del tipo de proyecto
              que abordamos. Si tu rubro no está listado, conversemos igual: el método
              viaja bien entre sectores operativos.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* Grid de industrias */}
      <section className="section-padding surface-warm">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10">
              Industrias en las que trabajamos
            </h2>
          </MotionSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrias.map((ind, i) => (
              <MotionSection key={ind.slug} delay={i * 0.06}>
                <Link
                  href={`/industria/${ind.slug}`}
                  className="block bg-card border border-border rounded-xl p-6 h-full hover:border-primary/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <ind.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium font-body">
                    Ver industria <ArrowRight size={14} />
                  </span>
                </Link>
              </MotionSection>
            ))}

            <MotionSection delay={industrias.length * 0.06}>
              <Link
                href="/contacto"
                className="block bg-card border border-dashed border-border rounded-xl p-6 h-full hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">
                  ¿Otra industria? Conversemos
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  Si tu rubro no está en la lista pero tienes una operación desordenada,
                  probablemente podemos ayudarte. El método se adapta.
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium font-body">
                  Agendar conversación <ArrowRight size={14} />
                </span>
              </Link>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres ver cómo aplicaría a tu operación?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos de diagnóstico identificamos el proceso con mayor impacto y
            proponemos por dónde empezar.
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
