import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { CALENDLY_URL } from "@/lib/constants";
import {
  ClipboardList,
  Boxes,
  TrendingDown,
  CalendarClock,
  Wrench as WrenchIcon,
  GaugeCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría de procesos para manufactura en Chile — 0kbot",
  description:
    "Mejora de procesos para pymes manufactureras en Chile: órdenes de trabajo digitales, trazabilidad de lote, KPIs de planta. Método Lean de 12 semanas.",
  keywords: [
    "consultoría manufactura Chile",
    "automatización planta pyme Chile",
    "trazabilidad lote manufactura",
    "OT digital pyme Chile",
    "KPIs planta producción Chile",
    "mejora procesos manufactura",
    "lean pyme manufactura Chile",
  ],
  alternates: { canonical: "https://0kbot.com/industria/manufactura" },
  openGraph: {
    title: "Consultoría de procesos para manufactura en Chile | 0kbot",
    description:
      "OT digitales, trazabilidad de lote y KPIs de planta para pymes manufactureras chilenas.",
    url: "https://0kbot.com/industria/manufactura",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de procesos para manufactura en Chile | 0kbot",
    description:
      "OT digitales, trazabilidad y KPIs de planta. Método Lean de 12 semanas.",
  },
};

const dolores = [
  {
    icon: ClipboardList,
    title: "Órdenes de trabajo en papel",
    desc: "OT que se pierden, se mojan o terminan el día en un cajón. Nadie sabe qué se hizo realmente hasta el cierre de mes.",
  },
  {
    icon: Boxes,
    title: "Trazabilidad de lote inexistente",
    desc: "Cuando un cliente reclama o hay que retirar un lote, se pasa el día entero revisando planillas y pegando pantallazos de WhatsApp.",
  },
  {
    icon: TrendingDown,
    title: "Mermas de insumos sin medir",
    desc: "Las pérdidas de materia prima aparecen al final, cuando la utilidad ya está comprometida. No hay forma de atacar lo que no se mide.",
  },
  {
    icon: CalendarClock,
    title: "Planificación reactiva",
    desc: "La planificación semanal se vuelve a hacer todos los lunes en Excel. Cambios de última hora del comercial descuadran la planta entera.",
  },
  {
    icon: WrenchIcon,
    title: "Mantenimiento correctivo crónico",
    desc: "Se reacciona cuando la máquina se detiene. No hay historial de pautas ni alertas preventivas, así que la parada siempre llega en mal momento.",
  },
  {
    icon: GaugeCircle,
    title: "KPIs que no existen o llegan tarde",
    desc: "OEE, eficiencia, rechazos: todo se estima a ojo. El dueño revisa el mes cuando ya no se puede corregir.",
  },
];

const herramientas = [
  { name: "Airtable / NocoDB", desc: "Base de datos simple para OT, lotes y fichas de producto." },
  { name: "Google Sheets", desc: "Indicadores de planta con fórmulas y lookup, antes de escalar a BI." },
  { name: "n8n", desc: "Alertas automáticas por WhatsApp y correo: quiebres, desvíos y mantenimientos." },
  { name: "Looker Studio", desc: "Tablero de planta: producción, mermas, rechazos, disponibilidad." },
  { name: "Formularios + código QR", desc: "Captura en piso de planta sin depender del operador experto." },
];

const ejemplos = [
  {
    title: "Planta de alimentos, 40 personas",
    desc: "En un proyecto típico, las OT eran papel firmado y la trazabilidad tardaba días. Digitalizamos la OT con formulario QR por línea, dejamos trazabilidad por lote en base de datos y un tablero diario de kilos producidos, mermas y rendimientos.",
  },
  {
    title: "Metalmecánica de 25 personas",
    desc: "Planificación en planilla que se rehacía todos los lunes. Estandarizamos la captura de horas por OT, enganchamos la carga de trabajo real con el comercial y dejamos una vista de capacidad disponible a 2 semanas.",
  },
  {
    title: "Imprenta pyme con varias líneas",
    desc: "Tiempos de setup subestimados, clientes con plazos justos. Medimos tiempos reales por tipo de trabajo, ajustamos estándares y dejamos alertas automáticas cuando una OT se atrasa más de un 15%.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Industria", item: "https://0kbot.com/industria" },
    { "@type": "ListItem", position: 3, name: "Manufactura", item: "https://0kbot.com/industria/manufactura" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de procesos para manufactura en Chile",
  serviceType: "Consultoría de procesos y automatización",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Pymes manufactureras en Chile",
  },
  description:
    "Órdenes de trabajo digitales, trazabilidad de lote y KPIs de planta para pymes manufactureras chilenas. Método Lean de 12 semanas.",
};

export default function ManufacturaPage() {
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
            Industria · Manufactura
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Consultoría de procesos para manufactura pyme en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Sacamos la operación del papel. Órdenes de trabajo digitales, trazabilidad
            de lote y KPIs de planta en 12 semanas, con metodología Lean aplicada a
            pymes chilenas.
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
              Dolores típicos de la manufactura pyme
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Estos son los seis cuellos de botella que vemos en plantas de 10 a 200
              personas en Chile.
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
              Cómo trabajamos en manufactura
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Bajamos a piso de planta. Miramos la OT, el turno, el cambio de lote, el
              cierre. Recién ahí diseñamos. El método es siempre Lean, en cuatro fases,
              a lo largo de 12 semanas.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Diagnóstico (semanas 1–2)", desc: "Caminamos la planta, entrevistamos supervisores y mapeamos flujos reales. Identificamos el proceso crítico." },
                { num: "02", title: "Priorización (semanas 3–4)", desc: "Elegimos la palanca de mayor impacto: normalmente OT digital, trazabilidad o control de mermas." },
                { num: "03", title: "Implementación (semanas 5–10)", desc: "Diseñamos el proceso objetivo, digitalizamos registros en planta y conectamos con el tablero de KPIs." },
                { num: "04", title: "Medición (semanas 11–12)", desc: "Validamos datos, comparamos contra el punto de partida y dejamos al equipo operando solo. Sin ROI medible, no cobramos el último tramo." },
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
              Ejemplos de proyectos en manufactura
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              0kbot está en fase de lanzamiento, por lo que estos son escenarios
              hipotéticos basados en dolores que hemos visto, no testimonios con nombres
              reales.
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Herramientas frecuentes
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              En manufactura pyme casi nunca se necesita un MES completo. Estas son las
              herramientas que dan mejor relación costo/beneficio para partir.
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
              Si ya tienes ERP (SAP B1, Defontana, Softland, etc.), trabajamos sobre él.
              No reemplazamos sistemas que funcionan.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tu planta funciona, pero a punta de esfuerzo?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos de diagnóstico identificamos dónde se está dejando la plata y
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
