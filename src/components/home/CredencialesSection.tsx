import MotionSection from "@/components/ui/MotionSection";
import { GraduationCap, BarChart3, Wrench, Briefcase, CheckCircle } from "lucide-react";

const badges = [
  { icon: GraduationCap, label: "Ing. Civil Industrial PUC", sub: "Pontificia Universidad Católica", color: "text-blue-600", bg: "bg-blue-50 border-blue-100" },
  { icon: BarChart3, label: "MSc Data Science", sub: "Especialización en analítica de datos", color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
  { icon: Wrench, label: "Lean Six Sigma Green Belt", sub: "Mejora continua de procesos", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-100" },
  { icon: Briefcase, label: "8+ años en operaciones", sub: "Plantas, puertos, distribución", color: "text-amber-600", bg: "bg-amber-50 border-amber-100" },
];

const impactMetrics = [
  { value: "40+", label: "empresas ayudadas" },
  { value: "200+", label: "procesos optimizados" },
  { value: "$2M+", label: "ahorros identificados" },
];

export default function CredencialesSection() {
  return (
    <section id="credenciales" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Profile card — izquierda */}
          <MotionSection>
            <div className="relative max-w-sm mx-auto">
              <div className="rounded-2xl bg-white border border-[#E5E2DB] shadow-card overflow-hidden">
                {/* Card top banner */}
                <div className="h-20 bg-gradient-to-r from-[#1B5FA6] to-[#0d3d6e] relative">
                  <div className="absolute bottom-0 right-6 translate-y-1/2">
                    <div className="w-16 h-16 rounded-2xl bg-[#D4A853] flex items-center justify-center font-heading font-bold text-2xl text-white shadow-lg border-4 border-white">
                      D
                    </div>
                  </div>
                </div>

                <div className="pt-10 pb-6 px-6">
                  <div className="mb-1">
                    <p className="font-heading font-bold text-xl text-[#1A1A1A]">Diego</p>
                    <p className="text-sm text-[#666] flex items-center gap-1.5">
                      <span>Founder &amp; CEO</span>
                      <span className="text-[#E5E2DB]">·</span>
                      <span className="text-[#1B5FA6] font-medium">0kbot</span>
                    </p>
                  </div>

                  {/* Impact metrics */}
                  <div className="grid grid-cols-3 gap-3 my-5 py-4 border-y border-[#F0EDE8]">
                    {impactMetrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="font-heading font-bold text-lg text-[#1B5FA6]">{m.value}</div>
                        <div className="text-xs text-[#999] leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Credential badges */}
                  <div className="space-y-2.5">
                    {badges.map((b) => {
                      const Icon = b.icon;
                      return (
                        <div key={b.label} className={`flex items-center gap-3 rounded-xl border p-2.5 ${b.bg}`}>
                          <div className="shrink-0">
                            <Icon className={`w-4 h-4 ${b.color}`} />
                          </div>
                          <div className="min-w-0">
                            <div className={`text-xs font-semibold ${b.color}`}>{b.label}</div>
                            <div className="text-[10px] text-[#666] truncate">{b.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg opacity-20" style={{ backgroundColor: "#D4A853" }} />
              <div className="absolute -bottom-3 -right-3 w-7 h-7 rounded-lg opacity-15" style={{ backgroundColor: "#1B5FA6" }} />
            </div>
          </MotionSection>

          {/* Text — derecha */}
          <MotionSection delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                He estado del otro lado
              </h2>
              <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                <p>
                  Antes de consultar, operé. 8 años en plantas de producción,
                  puertos, centros de distribución. Sé cómo se siente cuando
                  alguien de afuera llega con teorías que no funcionan en la
                  realidad.
                </p>
                <p>
                  Por eso 0kbot no hace teorías. Hacemos que el lunes sea más
                  fácil.
                </p>
                <p>
                  No soy el ingeniero que te vende IA porque está de moda. Soy
                  el que te dice{" "}
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
                  "Resultados medibles o te devuelvo el tiempo",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-body">{point}</span>
                  </div>
                ))}
              </div>

              <p
                className="text-sm text-muted-foreground font-body border-l-4 pl-4 italic"
                style={{ borderLeftColor: "#D4A853" }}
              >
                Si llegaste hasta aquí, probablemente sospechas que algo está
                más roto de lo que admites. Tienes razón. Agendemos 30 minutos
                y te confirmo dónde.
              </p>
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
