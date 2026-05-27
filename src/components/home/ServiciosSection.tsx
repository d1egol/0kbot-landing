import MotionSection from "@/components/ui/MotionSection";
import TrackedLink from "@/components/ui/TrackedLink";

// Motor compartido — las 3 etapas del spine 0kbot
const motorPasos = [
  "Entender el dolor real (diagnóstico — 30 min, sin costo)",
  "Ordenar los datos dispersos en una base única",
  "Automatizar lo repetitivo y medir el resultado",
];

type ProductoCard = {
  slug: string;
  orden: string;
  nombre: string;
  tagline: string;
  promesa: string;
  para: string;
  href: string;
  ctaLabel: string;
  destacado?: boolean;
};

const PRODUCTOS: ProductoCard[] = [
  {
    slug: "automatizacion-reportes",
    orden: "P1",
    nombre: "Automatización de Reportes",
    tagline: '"Armo los mismos reportes a mano cada mes y me toma días."',
    promesa:
      "Reportes operativos y comerciales que se generan y actualizan solos. Dejas de armarlos a mano cada mes.",
    para: "Empresas con datos regados en planillas y reportería manual recurrente.",
    href: "/?servicio=automatizacion-reportes#cta-diagnostico",
    ctaLabel: "Quiero mis reportes automáticos",
    destacado: true,
  },
  {
    slug: "gestion-datos",
    orden: "P2",
    nombre: "Gestión y Análisis de Datos",
    tagline: '"Tengo Excels por todos lados y nadie sabe cuál es la versión buena."',
    promesa:
      "Ordenamos y consolidamos tus datos dispersos (Excels, formularios) en una base única, con tableros para decidir.",
    para: "Empresas donde varias personas manejan archivos separados sin una fuente de verdad común.",
    href: "/?servicio=gestion-datos#cta-diagnostico",
    ctaLabel: "Ordenar mis datos",
  },
  {
    slug: "automatizacion-procesos",
    orden: "P3",
    nombre: "Automatización de Procesos",
    tagline: '"Hay tareas que hacemos igual todos los días y nadie ha preguntado por qué."',
    promesa:
      "Eliminamos tareas manuales repetitivas: captura de datos, flujos e integraciones entre las herramientas que ya usas.",
    para: "Empresas con pasos manuales repetitivos que se podrían conectar o eliminar.",
    href: "/?servicio=automatizacion-procesos#cta-diagnostico",
    ctaLabel: "Eliminar mis tareas manuales",
  },
  {
    slug: "herramientas-medida",
    orden: "P4",
    nombre: "Herramientas de Gestión a la Medida",
    tagline: '"Necesito algo simple para seguir clientes o inventario, pero nada me calza."',
    promesa:
      "Sistemas livianos a la medida (seguimiento de clientes, inventario, operación) montados sobre lo que ya tienes.",
    para: "Empresas que necesitan un sistema propio sin pagar por software que les sobra.",
    href: "/?servicio=herramientas-medida#cta-diagnostico",
    ctaLabel: "Quiero mi herramienta",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-card py-20 lg:py-32 border-y border-muted">
      <div className="container-content">
        {/* Encabezado de sección */}
        <MotionSection className="mb-12 max-w-3xl">
          <p className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-3">
            1 motor · 4 puntos de partida
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automatizamos lo que hoy haces a mano en Excel.
          </h2>
          <p className="text-base text-muted-foreground font-body leading-relaxed">
            Todos los proyectos comparten el mismo núcleo: entender el dolor
            real, ordenar los datos y automatizar lo repetitivo. Los 4 focos de
            abajo son los puntos de partida más comunes — no un catálogo cerrado.
            El diagnóstico define qué construimos, y construimos lo justo para
            tu dolor: ni más, ni menos.
          </p>
        </MotionSection>

        {/* El motor — 3 pasos */}
        <MotionSection className="mb-12">
          <div className="bg-primary rounded-2xl px-8 py-7 flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <p className="text-xs font-mono font-semibold text-accent-glow uppercase tracking-widest mb-1">
                El motor
              </p>
              <p className="text-white font-heading font-bold text-lg leading-tight">
                La misma maquinaria
                <br />abajo de todo
              </p>
            </div>
            <div className="hidden md:block w-px bg-white/20 self-stretch" />
            <ol className="flex flex-col sm:flex-row gap-4 flex-1">
              {motorPasos.map((paso, i) => (
                <li
                  key={paso}
                  className="flex items-start gap-2.5 flex-1 text-sm text-white/80 font-body leading-relaxed"
                >
                  <span className="font-mono font-bold text-accent-glow shrink-0 mt-0.5">
                    {i + 1}.
                  </span>
                  {paso}
                </li>
              ))}
            </ol>
          </div>
        </MotionSection>

        {/* Grid 2×2 — 4 focos de partida */}
        <MotionSection delay={0.05}>
          <p className="text-sm font-medium text-muted-foreground font-body uppercase tracking-wide mb-5">
            Los 4 focos más comunes — el tuyo puede ser uno de estos o una combinación
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {PRODUCTOS.map((p, idx) => (
              <MotionSection key={p.slug} delay={idx * 0.06}>
                <div
                  className={`bg-background rounded-xl border ${
                    p.destacado
                      ? "border-primary/40 shadow-card"
                      : "border-muted"
                  } p-6 space-y-3 hover:border-primary/40 transition-colors flex flex-col h-full`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          {p.orden}
                        </span>
                        {p.destacado && (
                          <span className="text-xs font-mono font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            Más solicitado
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {p.nombre}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline — dolor del cliente */}
                  <p className="text-xs text-muted-foreground font-body italic leading-relaxed border-l-2 border-primary/30 pl-3">
                    {p.tagline}
                  </p>

                  {/* Promesa */}
                  <p className="text-sm text-foreground font-body leading-relaxed">
                    {p.promesa}
                  </p>

                  {/* Para quién */}
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    <span className="font-medium text-foreground">Para:</span>{" "}
                    {p.para}
                  </p>

                  {/* CTA */}
                  <div className="pt-3 mt-auto border-t border-muted">
                    <TrackedLink
                      href={p.href}
                      ctaName={p.ctaLabel}
                      location={`servicios_${p.slug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 border border-primary text-primary rounded-md font-medium font-body text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {p.ctaLabel} →
                    </TrackedLink>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </MotionSection>

        {/* CTA base de sección */}
        <MotionSection delay={0.15} className="mt-12 pt-8 border-t border-muted">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <p className="text-sm text-muted-foreground font-body italic">
              ¿No sabes cuál te calza? El diagnóstico inicial de 30 minutos es
              gratuito. Lo definimos ahí, sin compromiso.
            </p>
            <TrackedLink
              href="/#cta-diagnostico"
              ctaName="Agendar diagnóstico gratuito"
              location="servicios_footer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-md font-semibold font-body text-sm hover:bg-primary/90 transition-colors"
            >
              Agendar diagnóstico gratuito →
            </TrackedLink>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
