import MotionSection from "@/components/ui/MotionSection";
import TrackedLink from "@/components/ui/TrackedLink";
import { CheckCircle2, ExternalLink } from "lucide-react";

// Motor compartido — las 3 etapas del spine 0kbot
const motorPasos = [
  "Captura ordenada (formularios / lo que ya usas)",
  "Consolidación automática (agentes + una base única)",
  "Reportes automáticos (dashboard / WhatsApp / PDF)",
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
  externo?: boolean; // true = deriva a seguridad.0kbot.com
};

const PRODUCTOS: ProductoCard[] = [
  {
    slug: "reporte-vivo",
    orden: "P1",
    nombre: "Reporte Vivo",
    tagline: '"Tengo todo en Excels y armo los reportes a mano cada vez."',
    promesa:
      "Consolida tus Excels dispersos en un dashboard que se actualiza solo. Fin del copiar-pegar entre planillas.",
    para: "Empresas con datos regados en planillas y reportería manual.",
    href: "/?servicio=reporte-vivo#cta-diagnostico",
    ctaLabel: "Quiero mi Reporte Vivo",
    destacado: true,
  },
  {
    slug: "captura-ordenada",
    orden: "P2",
    nombre: "Captura Ordenada",
    tagline: '"Ingreso la misma data muchas veces y nadie sabe dónde está la versión buena."',
    promesa:
      "Reemplaza el llenado manual de planillas por formularios que cargan a una base única ordenada.",
    para: "Empresas donde varias personas ingresan datos a mano en archivos separados.",
    href: "/?servicio=captura-ordenada#cta-diagnostico",
    ctaLabel: "Ordenar mi captura",
  },
  {
    slug: "cumplimiento-al-dia",
    orden: "P3",
    nombre: "Cumplimiento al Día",
    tagline: '"Cumplir con SII / SERNAPESCA / trazabilidad me come horas y un error me cuesta una multa."',
    promesa:
      "Automatiza la preparación de tus obligaciones regulatorias recurrentes. El acto vinculante lo aprietas tú — los agentes preparan, reconcilian y alertan.",
    para: "Empresas reguladas: SII tributario, SERNAPESCA/SIFA acuícola, trazabilidad export, OIV/ANCI.",
    href: "https://seguridad.0kbot.com",
    ctaLabel: "Ver Cumplimiento →",
    externo: true,
  },
  {
    slug: "cliente-cerca",
    orden: "P4",
    nombre: "Cliente Cerca",
    tagline: '"Hago todo yo: ventas, reportes, y encima necesito potenciar la publicidad."',
    promesa:
      "Reportes de venta automáticos + campañas de contenido y WhatsApp para tu comercio.",
    para: "Comercio y retail chico. Entrada de bajo ticket, con upsell natural.",
    href: "/?servicio=cliente-cerca#cta-diagnostico",
    ctaLabel: "Quiero más clientes",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-card py-20 lg:py-32 border-y border-muted">
      <div className="container-content">
        {/* Encabezado de sección */}
        <MotionSection className="mb-12 max-w-3xl">
          <p className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-3">
            1 motor · 4 productos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Automatizamos lo que hoy haces a mano en Excel.
          </h2>
          <p className="text-base text-muted-foreground font-body leading-relaxed">
            Todos los productos comparten el mismo núcleo: tus datos entran
            ordenados una sola vez, se consolidan solos y el reporte sale
            automático. Lo que cambia es el adaptador — qué duele, qué entra,
            qué sale.
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

        {/* Grid 2×2 — 4 productos */}
        <MotionSection delay={0.05}>
          <p className="text-sm font-medium text-muted-foreground font-body uppercase tracking-wide mb-5">
            Los 4 productos — lanzamiento secuencial
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
                        {p.externo && (
                          <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            Empresa regulada →
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
                    {p.externo ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 border border-emerald-600 text-emerald-700 rounded-md font-medium font-body text-xs hover:bg-emerald-50 transition-colors"
                      >
                        {p.ctaLabel}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <TrackedLink
                        href={p.href}
                        ctaName={p.ctaLabel}
                        location={`servicios_${p.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 border border-primary text-primary rounded-md font-medium font-body text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {p.ctaLabel} →
                      </TrackedLink>
                    )}
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
