import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { Workflow, Database, Zap, BarChart2, Users, Settings, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios de automatización y mejora de procesos para pymes Chile",
  description:
    "Diagnóstico, estandarización, automatización, tableros de datos y gestión comercial para pymes en Chile. Consultoría de procesos con resultados medibles en 12 semanas.",
  keywords: [
    "servicios mejora de procesos Chile",
    "consultoría automatización pymes Chile",
    "diagnóstico procesos operativos Chile",
    "estandarización procesos pyme",
    "automatización pymes Chile",
    "tableros indicadores pyme",
    "transformación digital pymes Chile",
  ],
  alternates: { canonical: "https://0kbot.com/servicios" },
};

const servicios = [
  {
    icon: Workflow,
    title: "Diagnóstico y orden de procesos",
    desc: "Levantamos cómo opera tu negocio hoy: flujos, responsables, puntos de quiebre y tiempos muertos. Luego proponemos un mapa claro de cómo deberían funcionar las cosas, con prioridades y acciones concretas.",
    beneficios: [
      "Mapeo de procesos actuales",
      "Identificación de cuellos de botella",
      "Propuesta de mejoras priorizadas",
      "Definición de roles y responsabilidades",
    ],
  },
  {
    icon: Database,
    title: "Estandarización de información y registros",
    desc: "Definimos qué información importa, cómo se debe registrar y dónde debe vivir. Terminamos con la dispersión de datos en planillas, correos y WhatsApp.",
    beneficios: [
      "Formularios de captura estandarizados",
      "Estructura de datos clara",
      "Un solo lugar para la información clave",
      "Menos errores de registro",
    ],
  },
  {
    icon: Zap,
    title: "Automatización de tareas y reportes",
    desc: "Lo que se puede automatizar, lo automatizamos: notificaciones, asignaciones, actualizaciones de estado, cálculos e informes periódicos.",
    beneficios: [
      "Notificaciones automáticas",
      "Flujos de aprobación",
      "Reportes que se generan solos",
      "Menos tareas manuales repetitivas",
    ],
  },
  {
    icon: BarChart2,
    title: "Tableros y visibilidad de datos",
    desc: "Creamos dashboards con los indicadores que importan para tu negocio. Información actualizada, visual y accesible para tomar decisiones.",
    beneficios: [
      "Indicadores clave de gestión (KPIs)",
      "Vistas por área o responsable",
      "Datos en tiempo real",
      "Visualización clara y accionable",
    ],
  },
  {
    icon: Users,
    title: "Apoyo a gestión comercial y seguimiento",
    desc: "Organizamos el seguimiento de clientes, oportunidades y pipeline de ventas. Que ningún contacto se pierda por falta de registro.",
    beneficios: [
      "Pipeline de ventas organizado",
      "Seguimiento de oportunidades",
      "Historial de interacciones",
      "Alertas de seguimiento pendiente",
    ],
  },
  {
    icon: Settings,
    title: "Implementación práctica para pymes",
    desc: "No hacemos proyectos de meses. Configuramos herramientas, capacitamos equipos y dejamos todo funcionando de manera práctica y sostenible.",
    beneficios: [
      "Configuración de herramientas",
      "Capacitación del equipo",
      "Documentación simple",
      "Soporte post-implementación",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de mejora de procesos — 0kbot",
  itemListElement: servicios.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.title,
      description: s.desc,
      provider: {
        "@type": "Organization",
        name: "0kbot",
        url: "https://0kbot.com",
      },
      areaServed: "Chile",
      serviceType: "Consultoría de procesos",
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Servicios", item: "https://0kbot.com/servicios" },
  ],
};

export default function ServiciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Servicios
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Soluciones concretas para ordenar y digitalizar tu operación
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Cada servicio está diseñado para resolver problemas reales de la
            pyme, con foco en resultados prácticos y sostenibles.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-background">
        <div className="container-wide space-y-16">
          {servicios.map((s, i) => (
            <MotionSection key={s.title} delay={0}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    Qué incluye
                  </h3>
                  <ul className="space-y-3">
                    {s.beneficios.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-sm text-foreground font-body"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#1B5FA6" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Un diagnóstico inicial nos permite entender tu situación y
            proponerte un plan claro.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Solicitar diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
