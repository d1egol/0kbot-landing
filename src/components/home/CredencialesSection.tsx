import Image from "next/image";
import MotionSection from "@/components/ui/MotionSection";
import { Shield, BarChart3, Briefcase, Users, CheckCircle } from "lucide-react";

const capacidades = [
  { icon: Shield, label: "Metodología Lean Six Sigma", sub: "Mejora continua comprobada" },
  { icon: BarChart3, label: "Decisiones con datos", sub: "Data science aplicada a operaciones" },
  { icon: Briefcase, label: "8+ años en operaciones", sub: "Plantas, puertos, distribución" },
  { icon: Users, label: "Transferencia real", sub: "Tu equipo aprende, no dependes de nosotros" },
];

export default function CredencialesSection() {
  return (
    <section id="credenciales" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Methodology card — izquierda */}
          <MotionSection>
            <div className="relative max-w-sm mx-auto">
              <div className="rounded-2xl bg-white border border-[#E5E2DB] shadow-card overflow-hidden">
                {/* Card top banner — foto del fundador (pequeña, foco en 0kbot) */}
                <div className="h-24 bg-gradient-to-r from-primary to-primary/80 relative flex items-center justify-center">
                  <Image
                    src="/brand/diego-lopez.jpg"
                    alt="Diego López, fundador de 0kbot"
                    width={72}
                    height={72}
                    className="w-[72px] h-[72px] rounded-full object-cover border-2 border-white/70 shadow-sm"
                  />
                </div>

                <div className="pt-6 pb-6 px-6">
                  <div className="mb-4">
                    <p className="font-heading font-bold text-xl text-foreground">Diego López</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Fundador · Ing. Civil Industrial + MSc Data Science
                    </p>
                  </div>

                  {/* Capability badges — monocromo brand v1.1 */}
                  <div className="space-y-2.5">
                    {capacidades.map((b) => {
                      const Icon = b.icon;
                      return (
                        <div key={b.label} className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/5 p-2.5">
                          <div className="shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-primary">{b.label}</div>
                            <div className="text-[10px] text-muted-foreground truncate">{b.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-primary opacity-20" />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 rounded-lg bg-primary opacity-15" />
            </div>
          </MotionSection>

          {/* Text — derecha */}
          <MotionSection delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-foreground">
                Hemos estado del otro lado
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                <p>
                  Antes de consultar, operamos. 8 años en plantas de producción,
                  puertos, centros de distribución. Sabemos cómo se siente cuando
                  alguien de afuera llega con teorías que no funcionan en la
                  realidad.
                </p>
                <p>
                  Por eso 0kbot no hace teorías. Hacemos que el lunes sea más
                  fácil.
                </p>
                <p>
                  No somos la consultora que te vende IA porque está de moda. Somos
                  los que te dicen{" "}
                  <em className="text-foreground">
                    &ldquo;esto no necesita código, necesita orden&rdquo;
                  </em>{" "}
                  cuando es verdad.
                </p>
              </div>

              {/* Proof points */}
              <div className="space-y-2.5 pt-2">
                {[
                  "Diagnóstico honesto antes de cualquier propuesta",
                  "Sin vender tecnología que no necesitas",
                  "Resultados medibles o te devolvemos el tiempo",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-body">{point}</span>
                  </div>
                ))}
              </div>

              <p
                className="text-sm text-muted-foreground font-body border-l-4 border-primary pl-4 italic"
              >
                Si llegaste hasta aquí, probablemente sospechas que algo está
                más roto de lo que admites. Tienes razón. Agendemos 30 minutos
                y te confirmamos dónde.
              </p>

              <div className="pt-6 mt-2 border-t border-muted">
                <p className="text-sm text-muted-foreground font-body mb-3">
                  Diego López lidera 0kbot — Ingeniero Civil Industrial (UDD), MSc en
                  Data Science (PUC) y Lean Six Sigma — con un equipo de agentes que
                  opera cada proceso. El foco siempre es tu operación.
                </p>
                <a
                  href="https://www.linkedin.com/in/diego-lopez-dinamarca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-body font-medium"
                >
                  Ver el perfil de Diego en LinkedIn →
                </a>
              </div>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
