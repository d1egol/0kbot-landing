import MotionSection from "@/components/ui/MotionSection";
import TrackedLink from "@/components/ui/TrackedLink";
import { CheckCircle2 } from "lucide-react";

const banderaBullets = [
  "Mapa visual de 8-12 procesos críticos (PDF + Miro editable)",
  "Ranking de los 3 procesos más costosos en tiempo y errores, estimados en CLP/mes",
  "Ficha por proceso: duración, frecuencia, cuellos de botella, costo de ineficiencia",
  "Recomendación de qué automatizar primero (criterio impacto/esfuerzo)",
];

type ServicioBreve = {
  slug: string;
  nombre: string;
  promesa: string;
  entregable: string;
  plazo: string;
  precio: string;
  para: string;
};

const SERVICIOS_BREVES: ServicioBreve[] = [
  {
    slug: "primer-paso-digital",
    nombre: "Primer Paso Digital",
    promesa:
      "Auditamos qué tecnología ya pagas y si la estás usando bien — antes de comprar más.",
    entregable:
      "Inventario de stack actual, score de madurez digital (5 dimensiones), hoja de ruta 90 días con herramientas concretas y ahorro mensual proyectado.",
    plazo: "7 días hábiles",
    precio: "Desde $690.000 CLP",
    para: "Pymes que sienten que pagan mucho software y nadie lo usa.",
  },
  {
    slug: "sop-express",
    nombre: "SOP Express",
    promesa:
      "Tus 3 procesos críticos por escrito. Para que dejen de vivir solo en la cabeza de una persona.",
    entregable:
      "3 procedimientos paso a paso (Google Doc + PDF), índice maestro de procesos y checklist de validación.",
    plazo: "4 días hábiles",
    precio: "Desde $390.000 CLP",
    para: "Pymes que están onboardeando gente nueva o donde una persona clave se va.",
  },
  {
    slug: "diagnostico-costos",
    nombre: "Diagnóstico de Costos Ocultos",
    promesa:
      "Te decimos exactamente dónde se te va la plata todos los meses sin que la veas.",
    entregable:
      "Inventario de gastos recurrentes (productivos / duplicados / zombie), mapa de rentabilidad por cliente o línea, top 5 ajustes con ahorro estimado.",
    plazo: "5 días hábiles",
    precio: "Desde $490.000 CLP",
    para: "Pymes con ventas razonables pero márgenes pobres sin entender por qué.",
  },
  {
    slug: "plan-accion-priorizado",
    nombre: "Plan de Acción Priorizado",
    promesa:
      "Ya tienes un diagnóstico (propio o ajeno) pero no sabes por dónde empezar. Te lo ordenamos.",
    entregable:
      "Brechas reorganizadas por impacto y esfuerzo, secuencia ejecutable de 90 días, quién hace qué y criterio de éxito por hito.",
    plazo: "5 días hábiles",
    precio: "Desde $490.000 CLP",
    para: "Pymes con un informe de consultora anterior junto al PC y nada hecho con él.",
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-card py-20 lg:py-32 border-y border-muted">
      <div className="container-content">
        <MotionSection className="mb-12 max-w-3xl">
          <p className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-3">
            Cómo trabajamos contigo
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diagnósticos acotados, con precio fijo y entregable revisable.
          </h2>
          <p className="text-base text-muted-foreground font-body leading-relaxed">
            Cada formato tiene plazo cerrado, entregable concreto y precio
            visible. Si después del diagnóstico inicial no vemos retorno claro,
            te lo decimos directo y no avanzamos.
          </p>
        </MotionSection>

        {/* Card grande — Radiografía Operacional (bandera) */}
        <MotionSection>
          <div className="bg-background rounded-2xl border-2 border-primary/30 shadow-card overflow-hidden mb-10">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Columna izquierda — info principal */}
              <div className="lg:col-span-3 p-8 lg:p-10 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Diagnóstico bandera
                  </span>
                  <span className="text-xs text-muted-foreground font-body">
                    5 días hábiles
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  Radiografía Operacional
                </h3>

                <p className="text-base text-muted-foreground font-body leading-relaxed">
                  En 5 días sabes exactamente cómo funciona tu empresa. Por
                  escrito, con ranking de los procesos más costosos y qué
                  atacar primero. Sin presentación de 80 slides ni promesas
                  de transformación.
                </p>

                <ul className="space-y-2.5 pt-2">
                  {banderaBullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-foreground font-body leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Columna derecha — precio + CTA */}
              <div className="lg:col-span-2 bg-muted/30 p-8 lg:p-10 flex flex-col justify-between border-l border-muted">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wide mb-1">
                      Precio
                    </p>
                    <p className="font-heading text-2xl font-bold text-foreground">
                      Desde $490.000 CLP
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      Final según número de procesos relevados ($490K–$690K).
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wide mb-1">
                      Pago
                    </p>
                    <p className="text-sm text-foreground font-body">
                      50% al inicio · 50% al entregar
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-body uppercase tracking-wide mb-1">
                      Para
                    </p>
                    <p className="text-sm text-foreground font-body leading-snug">
                      Pymes de servicios, 5–25 empleados, que sienten que
                      &ldquo;algo funciona mal&rdquo; pero no saben dónde.
                    </p>
                  </div>
                </div>

                <TrackedLink
                  href="/#cta-diagnostico"
                  ctaName="Quiero la Radiografía"
                  location="servicios_bandera"
                  className="mt-6 inline-flex items-center justify-center px-5 py-3.5 bg-primary text-primary-foreground rounded-md font-semibold font-body text-sm hover:bg-primary/90 transition-colors"
                >
                  Quiero la Radiografía →
                </TrackedLink>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Grid 2×2 — servicios complementarios */}
        <MotionSection delay={0.1}>
          <p className="text-sm font-medium text-muted-foreground font-body uppercase tracking-wide mb-5">
            También hacemos
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICIOS_BREVES.map((s) => (
              <div
                key={s.slug}
                className="bg-background rounded-xl border border-muted p-6 space-y-3 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    {s.nombre}
                  </h4>
                  <span className="text-xs text-muted-foreground font-body whitespace-nowrap">
                    {s.plazo}
                  </span>
                </div>
                <p className="text-sm text-foreground font-body leading-relaxed">
                  {s.promesa}
                </p>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">
                  <span className="font-medium text-foreground">Recibes:</span>{" "}
                  {s.entregable}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-muted">
                  <span className="text-sm font-heading font-bold text-foreground">
                    {s.precio}
                  </span>
                  <TrackedLink
                    href="/#cta-diagnostico"
                    ctaName={`Conocer ${s.nombre}`}
                    location={`servicios_breve_${s.slug}`}
                    className="text-xs text-primary font-medium font-body hover:underline"
                  >
                    Hablemos →
                  </TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.15} className="mt-12 pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground font-body text-center italic max-w-xl mx-auto">
            ¿No sabes cuál calza? El diagnóstico inicial de 30 minutos es
            gratuito. Lo definimos ahí, sin compromiso.
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
