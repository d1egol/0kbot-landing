import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { CALENDLY_URL } from "@/lib/constants";
import {
  Clock,
  FileSpreadsheet,
  Users,
  FileText,
  Target,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría de procesos para servicios profesionales en Chile — 0kbot",
  description:
    "Time tracking, facturación por proyecto y pipeline comercial para pymes de servicios profesionales en Chile. Método Lean de 12 semanas, menos planillas.",
  keywords: [
    "consultoría servicios profesionales Chile",
    "time tracking pyme Chile",
    "facturación por proyecto pyme",
    "pipeline comercial pyme Chile",
    "automatización estudios y consultoras",
    "gestión proyectos servicios Chile",
    "operación agencia marketing Chile",
  ],
  alternates: {
    canonical: "https://0kbot.com/industria/servicios-profesionales",
  },
  openGraph: {
    title: "Consultoría de procesos para servicios profesionales en Chile | 0kbot",
    description:
      "Time tracking, facturación y pipeline bajo control para estudios, consultoras y agencias chilenas.",
    url: "https://0kbot.com/industria/servicios-profesionales",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de procesos para servicios profesionales en Chile | 0kbot",
    description:
      "Time tracking, facturación por proyecto y pipeline comercial. Método Lean de 12 semanas.",
  },
};

const dolores = [
  {
    icon: Clock,
    title: "Time tracking inexistente",
    desc: "Nadie registra bien las horas. Se factura por memoria, se subestiman proyectos y la rentabilidad real por cliente es un misterio.",
  },
  {
    icon: FileSpreadsheet,
    title: "Facturación manual por proyecto",
    desc: "A fin de mes alguien arma las facturas en planilla, revisa correos, calcula avance y cruza con gastos. Se pierden horas cada ciclo.",
  },
  {
    icon: Users,
    title: "Pipeline comercial en la cabeza del socio",
    desc: "Las oportunidades están repartidas entre correo, WhatsApp y post-it. Si el socio se enferma, nadie sabe qué venía siguiendo.",
  },
  {
    icon: FileText,
    title: "Propuestas desde cero cada vez",
    desc: "Cada propuesta se arma copiando de otra. No hay componentes reutilizables, no hay historial de lo que ya se cotizó a un cliente.",
  },
  {
    icon: Target,
    title: "Rentabilidad por proyecto desconocida",
    desc: "Sabes que el proyecto terminó bien, pero no sabes si ganaste o perdiste. La siguiente cotización vuelve a ser a ojo.",
  },
  {
    icon: BookOpen,
    title: "Conocimiento que se va con la persona",
    desc: "Cada proyecto deja aprendizajes que quedan en la cabeza de quien lo lideró. No hay plantillas, no hay checklists, no hay biblioteca.",
  },
];

const herramientas = [
  { name: "Toggl / Harvest", desc: "Time tracking liviano, asociado a proyecto y cliente, fácil para el equipo." },
  { name: "Airtable", desc: "Base de datos de proyectos, entregables, tarifas y estados de avance." },
  { name: "Notion", desc: "Wiki interna: plantillas de propuestas, procesos, checklists por tipo de servicio." },
  { name: "Google Workspace", desc: "Drive estructurado por cliente, docs colaborativos y formularios de brief." },
  { name: "Looker Studio", desc: "Dashboard de horas facturables, margen por proyecto y utilización por persona." },
];

const ejemplos = [
  {
    title: "Estudio de arquitectura",
    desc: "En un proyecto típico, el socio perdía horas cada semana armando estados de pago. Implementamos time tracking por etapa de proyecto, plantillas de propuestas y un dashboard que muestra avance físico vs financiero.",
  },
  {
    title: "Consultora contable",
    desc: "Tenían 80 clientes recurrentes con servicios mixtos. Estructuramos un catálogo de servicios con tarifas estándar, flujo de onboarding de cliente y seguimiento mensual automatizado con alertas de tareas pendientes.",
  },
  {
    title: "Agencia de marketing digital",
    desc: "Pipeline comercial en la cabeza de los socios, forecasts inexistentes. Armamos un CRM simple en Airtable, vistas por etapa de venta y reporte semanal automatizado de pipeline y horas utilizadas.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Industria", item: "https://0kbot.com/industria" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Servicios profesionales",
      item: "https://0kbot.com/industria/servicios-profesionales",
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de procesos para servicios profesionales en Chile",
  serviceType: "Consultoría de procesos y automatización",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Pymes de servicios profesionales en Chile",
  },
  description:
    "Time tracking, facturación por proyecto, pipeline comercial y rentabilidad por cliente para estudios, consultoras y agencias chilenas. Método Lean de 12 semanas.",
};

export default function ServiciosProfesionalesPage() {
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
            Industria · Servicios profesionales
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Consultoría de procesos para servicios profesionales en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Estudios, consultoras y agencias chilenas que viven de horas facturables. Time
            tracking, facturación por proyecto y pipeline comercial bajo control, en 12
            semanas.
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
              Dolores típicos de servicios profesionales
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              En pymes chilenas de servicios, el problema casi nunca es el talento — es
              la operación alrededor del talento.
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
              Cómo trabajamos en servicios profesionales
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Antes de tocar herramientas, entendemos cómo se vende, cómo se entrega y
              cómo se cobra. El método Lean se mantiene: cuatro fases en 12 semanas.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Diagnóstico (semanas 1–2)", desc: "Mapeamos ciclo comercial, operación de proyecto y cierre. Entrevistamos a socios y equipo." },
                { num: "02", title: "Priorización (semanas 3–4)", desc: "Elegimos palanca de mayor impacto: suele ser time tracking + facturación o estructura de pipeline." },
                { num: "03", title: "Implementación (semanas 5–10)", desc: "Configuramos herramientas, migramos data activa, armamos plantillas y capacitamos equipo." },
                { num: "04", title: "Medición (semanas 11–12)", desc: "Medimos horas recuperadas, margen por proyecto y predictibilidad de pipeline. Sin ROI medible, no cobramos el último tramo." },
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
              Ejemplos de proyectos en servicios profesionales
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
              Stacks livianos, adoptables por equipos pequeños, sin licencias corporativas
              caras. Elegimos según cómo trabaja hoy tu equipo.
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
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Vendes horas y no sabes cuánto ganas por proyecto?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos de diagnóstico identificamos qué ordenar primero para que la
            operación deje de depender de los socios.
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
