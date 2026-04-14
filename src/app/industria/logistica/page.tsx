import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Route,
  MapPin,
  FileSignature,
  PackageX,
  Coins,
  Gauge,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría de procesos para logística en Chile — 0kbot",
  description:
    "Rutas, track & trace, POD digital y liquidación a proveedores para pymes logísticas en Chile. Visibilidad operacional con método Lean de 12 semanas.",
  keywords: [
    "consultoría logística Chile",
    "automatización last mile pyme",
    "track and trace pyme Chile",
    "POD digital pyme Chile",
    "ruteo pyme distribuidora",
    "liquidación proveedores logística",
    "pymes logísticas Chile",
  ],
  alternates: { canonical: "https://0kbot.com/industria/logistica" },
  openGraph: {
    title: "Consultoría de procesos para logística en Chile | 0kbot",
    description:
      "Rutas, track & trace, POD digital y liquidación bajo control para pymes logísticas chilenas.",
    url: "https://0kbot.com/industria/logistica",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de procesos para logística en Chile | 0kbot",
    description:
      "Rutas, track & trace, POD digital y liquidación. Método Lean de 12 semanas.",
  },
};

const dolores = [
  {
    icon: Route,
    title: "Rutas armadas en planilla",
    desc: "Cada mañana alguien acomoda rutas en Excel a pulso. Cambios de última hora implican rehacer todo y pedirle al conductor que se las arregle.",
  },
  {
    icon: MapPin,
    title: "Track & trace manual",
    desc: "El cliente llama a preguntar dónde va su pedido y el operador tiene que llamar al conductor. Horas perdidas en estados de entregas.",
  },
  {
    icon: Coins,
    title: "Liquidación a proveedores lenta",
    desc: "Transportistas subcontratados o conductores esperan semanas por su pago porque los respaldos están desparramados en correos y WhatsApp.",
  },
  {
    icon: PackageX,
    title: "Daños y faltantes sin registro",
    desc: "Cuando el cliente reclama un daño, nadie tiene foto ni respaldo. Se termina reponiendo de bolsillo o discutiendo con el proveedor.",
  },
  {
    icon: FileSignature,
    title: "POD en papel",
    desc: "Guías firmadas en papel que llegan días después, con letra ilegible, mojadas o perdidas. Facturación y cobranza trabadas.",
  },
  {
    icon: Gauge,
    title: "KPIs operacionales a ojo",
    desc: "Cumplimiento, tiempo en ruta, devoluciones, productividad por conductor: todo a estimación. No se puede mejorar lo que no se mide.",
  },
];

const herramientas = [
  { name: "Routific / Circuit", desc: "Optimización de rutas para flotas pyme, integrable por API o CSV." },
  { name: "Airtable", desc: "Base de datos de envíos, estados, POD digital y evidencia fotográfica." },
  { name: "n8n", desc: "Notificaciones automáticas al cliente: salió en ruta, entregado, incidencia." },
  { name: "WhatsApp Business API", desc: "Canal de comunicación con clientes y conductores, estructurado." },
  { name: "Looker Studio", desc: "Tablero de KPIs: cumplimiento, tiempo en ruta, incidencias por causa." },
];

const ejemplos = [
  {
    title: "Distribuidora de 30 personas",
    desc: "En un proyecto típico, el operador armaba rutas a mano de 6 a 8 am y el cliente llamaba por estado de entrega todo el día. Conectamos ruteador, POD digital por app y notificaciones automáticas. Pasamos de responder llamadas a responder excepciones.",
  },
  {
    title: "Last-mile pyme",
    desc: "Subcontrataban conductores y la liquidación semanal tomaba 2 días. Estructuramos registro de viajes, evidencia fotográfica y cálculo automático de liquidación por conductor con descuentos por incidencia.",
  },
  {
    title: "Operador logístico mediano",
    desc: "Múltiples clientes corporativos con SLAs distintos. Centralizamos órdenes, dejamos portal simple de consulta para clientes y tablero de cumplimiento por cuenta con alertas de SLA en riesgo.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Industria", item: "https://0kbot.com/industria" },
    { "@type": "ListItem", position: 3, name: "Logística", item: "https://0kbot.com/industria/logistica" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de procesos para logística en Chile",
  serviceType: "Consultoría de procesos y automatización",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Pymes de logística y distribución en Chile",
  },
  description:
    "Rutas optimizadas, track & trace, POD digital y liquidación a proveedores para pymes logísticas chilenas. Método Lean de 12 semanas.",
};

export default function LogisticaPage() {
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
            Industria · Logística
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Consultoría de procesos para pymes logísticas en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Distribuidoras, last-mile y operadores logísticos pyme. Rutas, track & trace,
            POD digital y liquidación a proveedores bajo control en 12 semanas.
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
              Dolores típicos de la logística pyme
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              En logística pyme chilena, el problema suele ser visibilidad: nadie sabe
              con certeza dónde está cada carga ni por qué algunas rutas sangran plata.
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
              Cómo trabajamos en logística
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Acompañamos un turno completo de salida y llegada de ruta. Ahí se ven los
              dolores reales. Recién ahí diseñamos. Método Lean, cuatro fases, 12 semanas.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Diagnóstico (semanas 1–2)", desc: "Acompañamos ruta, mapeamos flujo de pedido, despacho, entrega y liquidación. Medimos tiempos reales." },
                { num: "02", title: "Priorización (semanas 3–4)", desc: "Elegimos palanca: suele ser POD digital + track & trace, o liquidación a proveedores." },
                { num: "03", title: "Implementación (semanas 5–10)", desc: "Configuramos ruteador, app de conductor, notificaciones automáticas y tablero operacional." },
                { num: "04", title: "Medición (semanas 11–12)", desc: "Medimos cumplimiento, ciclo de cobro e incidencias. Sin ROI medible, no cobramos el último tramo." },
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
              Ejemplos de proyectos en logística
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
              Para pymes logísticas no hace falta un TMS corporativo. Con el stack
              correcto se cubre 80% del dolor.
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
              Si ya tienes TMS o WMS, nos integramos a él. No cambiamos lo que funciona.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tu operación depende de la memoria del despachador?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos de diagnóstico identificamos dónde se está fugando plata en
            ruta y cómo ordenarlo en 12 semanas.
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
