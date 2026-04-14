import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { CALENDLY_URL } from "@/lib/constants";
import {
  CalendarDays,
  FileText,
  BellRing,
  Receipt,
  Activity,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Consultoría de procesos para salud (operación) en Chile — 0kbot",
  description:
    "Ordenamos agendas, recordatorios, registros administrativos y facturación a isapres para centros de salud pyme en Chile. Foco en operación, no en software clínico.",
  keywords: [
    "consultoría centros salud Chile",
    "automatización clínica dental Chile",
    "recordatorios WhatsApp pacientes",
    "agenda médica pyme Chile",
    "facturación isapres pyme",
    "operación centro kinesiológico",
    "procesos salud pyme Chile",
  ],
  alternates: { canonical: "https://0kbot.com/industria/salud" },
  openGraph: {
    title: "Consultoría de procesos para salud (operación) en Chile | 0kbot",
    description:
      "Agendas, recordatorios y facturación bajo control para centros de salud pyme en Chile.",
    url: "https://0kbot.com/industria/salud",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría de procesos para salud (operación) en Chile | 0kbot",
    description:
      "Agendas, recordatorios y facturación bajo control. Foco en operación, no en HIS clínico.",
  },
};

const dolores = [
  {
    icon: CalendarDays,
    title: "Agendas desincronizadas",
    desc: "Box, sistema online y secretaria con versiones distintas de la agenda. Pacientes que llegan a una hora que no existe.",
  },
  {
    icon: FileText,
    title: "Registros administrativos en papel",
    desc: "Consentimientos, fichas de admisión y datos de contacto se capturan en papel y se digitan después — o nunca.",
  },
  {
    icon: BellRing,
    title: "Recordatorios manuales",
    desc: "Alguien envía WhatsApps uno por uno el día anterior. Cuando no alcanza, caen los no-shows y se pierde el box.",
  },
  {
    icon: Receipt,
    title: "Facturación a isapres lenta",
    desc: "Bonos pendientes, rechazos que se pierden, cobros que se hacen con semanas de atraso. El flujo de caja sufre.",
  },
  {
    icon: Activity,
    title: "KPIs operacionales inexistentes",
    desc: "Tasa de ocupación de box, no-show, ticket promedio, recurrencia de paciente. Todo a ojo, cuando la data ya existe.",
  },
  {
    icon: ShieldAlert,
    title: "Data de pacientes dispersa",
    desc: "Datos en el sistema de agenda, en planillas, en correos y en el PC de la recepción. Riesgo operacional y de servicio.",
  },
];

const herramientas = [
  { name: "Reservo / agenda médica", desc: "Sistema de agenda y reserva online que uses hoy; nos integramos a él." },
  { name: "Airtable", desc: "Registro administrativo de pacientes, convenios, bonos y seguimiento." },
  { name: "n8n", desc: "Recordatorios automáticos por WhatsApp, confirmaciones y reagendamientos." },
  { name: "Bsale", desc: "Boleta/factura electrónica y cierre diario conciliable con los bonos cobrados." },
  { name: "Looker Studio", desc: "Tablero operacional: ocupación, no-show, ingresos por convenio." },
];

const ejemplos = [
  {
    title: "Clínica dental pyme, 10 personas",
    desc: "En un proyecto típico, la recepción perdía más de 2 horas diarias enviando recordatorios. Estructuramos datos de paciente en Airtable, dejamos recordatorios automáticos por WhatsApp a 48h y 24h, y un tablero de ocupación de box por especialista.",
  },
  {
    title: "Centro kinesiológico",
    desc: "Alta tasa de no-show y bonos no cobrados. Conectamos la agenda con recordatorios automáticos, dejamos cola de bonos pendientes con alertas y proceso mensual estándar de cierre de convenios.",
  },
  {
    title: "Laboratorio dermatológico pyme",
    desc: "Resultados entregados por correo a mano. Digitalizamos flujo de toma de muestra, entrega al paciente y registro de cobro por convenio. Cierre mensual con isapres pasó de semanas a días.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Industria", item: "https://0kbot.com/industria" },
    { "@type": "ListItem", position: 3, name: "Salud", item: "https://0kbot.com/industria/salud" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Consultoría de procesos para centros de salud en Chile",
  serviceType: "Consultoría de procesos y automatización",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: { "@type": "Country", name: "Chile" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Centros de salud pyme en Chile",
  },
  description:
    "Ordenamos agenda, recordatorios, registros administrativos y facturación a isapres para centros de salud pyme en Chile. Foco en operación, no en software clínico regulado.",
};

export default function SaludPage() {
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
            Industria · Salud (operación)
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Mejora de procesos para centros de salud pyme en Chile
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Agendas, recordatorios, registros y facturación a isapres bajo control. Foco
            en operación de clínicas, centros y laboratorios pyme — no en software
            clínico regulado.
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

      {/* Aviso alcance */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <div className="bg-muted border border-border rounded-xl p-6">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                <span className="font-semibold text-foreground">Alcance honesto:</span>{" "}
                trabajamos en la operación administrativa y comercial del centro de
                salud — agenda, recordatorios, registro de pacientes, cobros, KPIs. No
                reemplazamos ni tocamos software clínico regulado (HIS, ficha clínica
                electrónica o sistemas con regulación sanitaria). Nos integramos a lo
                que uses hoy.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Dolores */}
      <section className="section-padding surface-warm">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Dolores típicos en salud pyme
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Lo que vemos en centros de 10 a 100 personas en Chile: el box funciona,
              pero la operación alrededor del box sangra horas.
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
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo trabajamos en centros de salud
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Observamos primero al equipo de recepción y administración. Sin eso,
              cualquier cambio es teoría. El método Lean se mantiene: cuatro fases,
              12 semanas.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", title: "Diagnóstico (semanas 1–2)", desc: "Mapeamos flujo de paciente, agenda, cobros y reportes. Identificamos la mayor fuga de tiempo y plata." },
                { num: "02", title: "Priorización (semanas 3–4)", desc: "Elegimos palanca inicial: recordatorios automáticos, registro estructurado o cobros a convenios." },
                { num: "03", title: "Implementación (semanas 5–10)", desc: "Configuramos integraciones con la agenda, flujos de WhatsApp y tablero de ocupación." },
                { num: "04", title: "Medición (semanas 11–12)", desc: "Medimos no-show, ocupación de box y ciclo de cobro. Sin ROI medible, no cobramos el último tramo." },
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
      <section className="section-padding surface-warm">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ejemplos de proyectos en salud
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
                <div className="bg-card border border-border rounded-xl p-6 h-full">
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
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Herramientas frecuentes
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Herramientas livianas que complementan tu sistema de agenda actual, sin
              tocar lo clínico regulado.
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
            ¿La recepción apaga incendios todo el día?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos de diagnóstico identificamos las 2 o 3 tareas que consumen más
            horas de tu equipo y cómo abordarlas.
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
