import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Airtable para pymes en Chile — implementación con 0kbot",
  description:
    "Implementamos Airtable en pymes chilenas: pipelines comerciales, inventario simple y gestión de proyectos. Base de datos que tu equipo operativo sí usa.",
  keywords: [
    "Airtable Chile",
    "Airtable pymes",
    "CRM Airtable Chile",
    "base de datos pyme",
    "implementar Airtable",
    "consultoría Airtable Chile",
    "gestión proyectos Airtable",
  ],
  alternates: { canonical: "https://0kbot.com/herramientas/airtable" },
  openGraph: {
    title: "Airtable para pymes en Chile — implementación con 0kbot",
    description:
      "Pipeline comercial, inventario y proyectos en Airtable. Implementación con el método Lean de 12 semanas.",
    url: "https://0kbot.com/herramientas/airtable",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable para pymes en Chile — implementación con 0kbot",
    description:
      "Pipeline comercial, inventario y proyectos en Airtable.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://0kbot.com/herramientas" },
    { "@type": "ListItem", position: 3, name: "Airtable", item: "https://0kbot.com/herramientas/airtable" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Implementación de Airtable para pymes en Chile",
  serviceType: "Gestión de datos operativos",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: "Chile",
  description:
    "Diseño e implementación de bases Airtable para pymes chilenas: CRM, inventario, proyectos, operaciones.",
};

const casos = [
  {
    titulo: "Pipeline comercial",
    desc: "Una base con prospectos, cuentas, oportunidades y actividades. Vistas por vendedor, por etapa, por mes. Se alimenta desde un formulario público y vía Make o n8n desde el correo y WhatsApp.",
  },
  {
    titulo: "Inventario simple",
    desc: "Para pymes que no necesitan aún un ERP: productos, stock por bodega, movimientos y alertas de quiebre. Suficiente para operar y bastante mejor que una planilla compartida.",
  },
  {
    titulo: "Gestión de proyectos internos",
    desc: "Proyectos, tareas, entregables y responsables. Vistas Kanban para el equipo, Gantt para el gerente, calendario para el cliente. Una sola fuente de verdad.",
  },
  {
    titulo: "Gestión de contratos y cobranza",
    desc: "Seguimiento de estado de contratos, fechas de renovación, facturas emitidas vs pagadas. Alertas automáticas cuando falta menos de X días para vencimiento.",
  },
  {
    titulo: "Reclutamiento y selección",
    desc: "Pipeline de postulantes, entrevistas, evaluaciones y ofertas. Portal interno donde RRHH y los jefes de área ven el mismo estado al mismo tiempo.",
  },
];

const fases = [
  { num: "01", title: "Diagnóstico (sem. 1–2)", desc: "Entendemos qué datos manejas hoy, dónde están y quién los necesita. A veces el problema no es la herramienta, es que nadie definió responsables." },
  { num: "02", title: "Diseño (sem. 3–4)", desc: "Modelamos la base: tablas, relaciones, campos, vistas y permisos. Un buen modelo al inicio ahorra meses de desorden." },
  { num: "03", title: "Implementación (sem. 5–10)", desc: "Creamos la base, cargamos datos iniciales, configuramos automatizaciones propias de Airtable, integramos con el resto del stack y capacitamos al equipo." },
  { num: "04", title: "Medición (sem. 11–12)", desc: "Revisamos adopción real: cuánta gente registra, cuántos datos faltan, qué procesos quedaron en la base. Si no hay uso medible, no cobramos el último tramo." },
];

const limitaciones = [
  "No es un ERP. No reemplaza Bsale, Defontana ni contabilidad formal — es complemento operativo.",
  "Los planes por usuario suben el costo rápido en equipos grandes (>20 personas con edición).",
  "Para volúmenes sobre 50.000 registros por tabla empieza a ponerse lento; ahí conviene migrar a Postgres o similar.",
  "Sin gobernanza (reglas claras de quién registra qué), se transforma en una planilla caótica pero más cara.",
];

export default function AirtablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Herramientas · Airtable
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Airtable para pymes chilenas: la base de datos que tu equipo sí usa
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Se ve como planilla, funciona como base de datos. Pipeline
            comercial, inventario o proyectos en una herramienta que el
            operativo aprende en días.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Qué es Airtable?
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Airtable es una base de datos híbrida: por fuera parece Google
                Sheets, por dentro es una base relacional con tipos de campo
                (texto, fecha, link entre tablas, archivo, fórmula, rollup).
              </p>
              <p>
                Sirve para ordenar datos que hoy viven repartidos en planillas,
                correos y WhatsApp: clientes, pedidos, proyectos, inventario.
                Le pones permisos, vistas filtradas por persona, formularios
                públicos para captura y automatizaciones livianas sin depender
                de otra herramienta.
              </p>
              <p>
                No es magia. Sigue siendo una base que hay que diseñar bien
                desde el principio. Bien implementada es el puente entre la
                planilla caótica y un sistema formal — y muchas pymes no
                necesitan más que eso por los próximos 3–5 años.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Casos */}
      <section className="section-padding surface-warm">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Casos de uso en pymes chilenas
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Lo que hemos construido o visto funcionar bien en pymes de
              servicios, retail, inmobiliarias y consultoras.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-2 gap-6">
            {casos.map((c, i) => (
              <MotionSection key={c.titulo} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {c.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo lo implementamos */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo lo implementamos: método Lean de 12 semanas
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              El error típico con Airtable es armar tablas apuradas sin pensar
              en el modelo. A los 3 meses el orden se pierde. El método evita
              eso.
            </p>
            <div className="space-y-4 mb-4">
              {fases.map((f) => (
                <div key={f.num} className="flex gap-4 items-start">
                  <span className="text-2xl font-heading font-bold text-primary/20 flex-shrink-0 w-8">
                    {f.num}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground font-body">{f.title}</p>
                    <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/como-trabajamos"
              className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all"
            >
              Ver metodología completa <ArrowRight size={16} />
            </Link>
          </MotionSection>
        </div>
      </section>

      {/* Limitaciones */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cuándo NO conviene Airtable
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Ser honestos ahorra tiempo y plata. Estas son las situaciones
              donde recomendamos otra cosa.
            </p>
          </MotionSection>
          <div className="space-y-4">
            {limitaciones.map((l) => (
              <MotionSection key={l}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <XCircle className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-body">{l}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precio referencial
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                <strong className="text-foreground">Licencia Airtable:</strong>{" "}
                plan gratis para probar (limitado en registros y automatizaciones).
                El plan Team parte en torno a USD 20 por usuario al mes,
                facturado anual. Para una pyme típica con 5–15 personas
                editando, el costo mensual ronda los USD 100–300.
              </p>
              <p>
                <strong className="text-foreground">Implementación 0kbot:</strong>{" "}
                el proyecto Lean de 12 semanas se cotiza en UF según alcance.
                Para bases Airtable bien diseñadas con capacitación e
                integraciones, el rango típico va de 60 a 180 UF, pagadas por
                tramos y con la última cuota sujeta a adopción medible.
              </p>
              <p className="text-sm">
                Antes de cerrar número revisamos cuántos usuarios editores
                necesitas (los de solo lectura son gratis en la mayoría de los
                planes) para no pagar licencias que no usas.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground font-body">
                La base queda documentada, con responsables por tabla y una
                guía corta para que el equipo la opere sin nosotros.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Airtable calza con tu operación?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos revisamos tus datos actuales y te decimos si conviene
            Airtable, Google Sheets bien usado o ya es hora de un sistema más
            formal.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico gratuito <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
