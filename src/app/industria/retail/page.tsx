import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Package,
  ShoppingCart,
  RefreshCw,
  AlertTriangle,
  Calculator,
  Store,
  ArrowRight,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría de procesos para retail en Chile — 0kbot",
  description:
    "Ordenamos inventario, múltiples canales y reposición para pymes de retail en Chile. Integramos Bsale, Shopify y Mercado Libre en un método Lean de 12 semanas.",
  keywords: [
    "consultoría retail Chile",
    "automatización retail pyme Chile",
    "integración Bsale Shopify",
    "control inventario retail Chile",
    "omnicanalidad pyme Chile",
    "mejora procesos retail",
    "pymes retail Chile",
  ],
  alternates: { canonical: "https://0kbot.com/industria/retail" },
  openGraph: {
    title: "Consultoría de procesos para retail en Chile | 0kbot",
    description:
      "Inventario, múltiples canales y reposición bajo control para pymes de retail en Chile.",
    url: "https://0kbot.com/industria/retail",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de procesos para retail en Chile | 0kbot",
    description:
      "Inventario, canales y reposición bajo control. Bsale, Shopify, Mercado Libre. 12 semanas.",
  },
};

const dolores = [
  {
    icon: Package,
    title: "Inventario descontrolado",
    desc: "Stock real distinto al del sistema, quiebres sorpresa en la tienda y compras duplicadas por no saber lo que hay en bodega.",
  },
  {
    icon: ShoppingCart,
    title: "Canales sin sincronía",
    desc: "Tienda física, Shopify y Mercado Libre con stock distinto. Se vende lo que ya no hay o se deja de vender lo que sobra.",
  },
  {
    icon: RefreshCw,
    title: "Reposición manual",
    desc: "Decisiones de compra con feeling, sin data de rotación. Se infla el capital de trabajo en productos lentos y se quiebra en los que venden.",
  },
  {
    icon: AlertTriangle,
    title: "Merma sin registro",
    desc: "Productos que se pierden, se rompen o se vencen sin quedar registrados. Al cierre de mes aparece un hueco que nadie sabe explicar.",
  },
  {
    icon: Calculator,
    title: "Caja cuadrada vs sistema",
    desc: "El cierre diario de caja no calza con lo que dice el sistema. Se pierden horas semanales buscando diferencias de miles de pesos.",
  },
  {
    icon: Store,
    title: "Varias tiendas, poca visibilidad",
    desc: "No hay una vista única de cómo están vendiendo las tiendas hoy. Reportes llegan tarde y siempre en planilla distinta.",
  },
];

const herramientas = [
  { name: "Bsale", desc: "Punto de venta, boleta electrónica y control de inventario base." },
  { name: "Shopify", desc: "Tienda online sincronizada con el stock de sala y bodega." },
  { name: "Mercado Libre", desc: "Publicaciones conectadas al mismo inventario, sin sobreventa." },
  { name: "WhatsApp Business", desc: "Pedidos, post-venta y catálogo con respuestas automáticas." },
  { name: "Looker Studio", desc: "Tablero único de ventas por tienda, canal y categoría." },
];

const ejemplos = [
  {
    title: "Retail de 3 tiendas + e-commerce",
    desc: "En un proyecto típico, la dueña pasaba los domingos consolidando ventas en planilla. Integramos Bsale con Shopify, dejamos stock único por SKU y dashboard diario de ventas. Resultado esperado: cierre automático y visibilidad por tienda sin trabajo manual.",
  },
  {
    title: "Retail mayorista con vendedores en terreno",
    desc: "Pedidos en WhatsApp que se perdían o se ingresaban dos veces. Formulario estructurado, notas de pedido generadas desde un solo flujo y alertas automáticas al equipo de bodega.",
  },
  {
    title: "Multi-marca con varios proveedores",
    desc: "30 proveedores, 2.000 SKU, márgenes distintos por línea. Estructuramos la data maestra, conectamos reposición con rotación y dejamos un tablero de rentabilidad por marca.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Industria", item: "https://0kbot.com/industria" },
    { "@type": "ListItem", position: 3, name: "Retail", item: "https://0kbot.com/industria/retail" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de procesos para retail en Chile",
  serviceType: "Consultoría de procesos y automatización",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Pymes de retail en Chile",
  },
  description:
    "Mejora de procesos y automatización para pymes chilenas de retail: inventario, omnicanalidad y reposición con método Lean de 12 semanas.",
};

export default function RetailPage() {
  return (
    <>
      {[breadcrumbJsonLd, serviceJsonLd].map((schema, i) => (
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
            Industria · Retail
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Consultoría de procesos para retail en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Inventario bajo control, canales sincronizados y reposición que deja de ser
            un acto de fe. Método Lean de 12 semanas aplicado a pymes de retail chilenas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
            >
              Diagnóstico gratuito <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Dolores */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dolores típicos del retail pyme
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Estos son los seis problemas que vemos una y otra vez en retail chileno
              de 10 a 200 personas.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dolores.map((d, i) => (
              <MotionSection key={d.title} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <d.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {d.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo trabajamos en retail
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              No llegamos con una plantilla. Primero observamos tu operación real —
              turno en tienda, cierre de caja, reposición — y recién ahí armamos el plan.
              El método siempre tiene cuatro fases en 12 semanas.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Diagnóstico (semanas 1–2)", desc: "Mapeamos flujos de venta, inventario y reposición. Identificamos el mayor derrame de plata y horas." },
                { num: "02", title: "Priorización (semanas 3–4)", desc: "Elegimos el proceso con mayor retorno: suele ser sincronía entre canales o control de merma." },
                { num: "03", title: "Implementación (semanas 5–10)", desc: "Integramos Bsale con el e-commerce, estructuramos SKU maestros y armamos el tablero de ventas." },
                { num: "04", title: "Medición (semanas 11–12)", desc: "Verificamos impacto en quiebres, diferencias de caja y horas de trabajo manual. Si no hay ROI medible, no cobramos el último tramo." },
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
          </MotionSection>
        </div>
      </section>

      {/* Ejemplos */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ejemplos de proyectos en retail
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              0kbot está en fase de lanzamiento, por lo que estos son escenarios
              hipotéticos basados en dolores que hemos visto en retail chileno, no
              testimonios con nombres reales.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-3 gap-6">
            {ejemplos.map((e, i) => (
              <MotionSection key={e.title} delay={i * 0.08}>
                <div className="bg-muted rounded-xl p-6 h-full">
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {e.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-accent" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Herramientas frecuentes
              </h2>
            </div>
            <p className="text-muted-foreground font-body mb-8">
              No son las únicas, pero son las que mejor funcionan para pymes de retail en
              Chile. Elegimos según tu operación real, no al revés.
            </p>
            <div className="space-y-4">
              {herramientas.map((h) => (
                <div
                  key={h.name}
                  className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 bg-card border border-border rounded-lg p-5"
                >
                  <span className="font-heading font-bold text-foreground md:w-48 flex-shrink-0">
                    {h.name}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">{h.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-body mt-6">
              Si ya usas un ERP más robusto, trabajamos sobre lo que tienes. No forzamos
              cambios de software cuando no los necesitas.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tu retail se mueve más rápido que tus sistemas?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos de diagnóstico identificamos el proceso con mayor impacto y
            cómo abordarlo en 12 semanas.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
