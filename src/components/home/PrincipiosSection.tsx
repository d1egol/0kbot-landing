import { Shield, Wrench, Users } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";

const principios = [
  {
    icon: Shield,
    titulo: "Diagnóstico antes de propuesta",
    texto:
      "No proponemos soluciones sin antes entender tu realidad. Cada proyecto empieza con medición, no con supuestos.",
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    icon: Wrench,
    titulo: "Sin tecnología innecesaria",
    texto:
      "Si una planilla bien hecha resuelve el problema, no necesitas un sistema de $20M. Priorizamos lo práctico sobre lo llamativo.",
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
  },
  {
    icon: Users,
    titulo: "Transferencia real",
    texto:
      "Cuando terminamos, tu equipo sabe cómo funciona todo. No creamos dependencia. El objetivo es que nos necesites cada vez menos.",
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
  },
];

export default function PrincipiosSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <MotionSection className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Cómo trabajamos
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Principios de trabajo
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            No tecnología por moda. No soluciones genéricas. No dependencia creada.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {principios.map((p, i) => {
            const Icon = p.icon;
            return (
              <MotionSection key={p.titulo} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7 h-full flex flex-col hover:shadow-card-hover transition-shadow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border mb-5 ${p.bg}`}>
                    <Icon className={`w-5 h-5 ${p.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                    {p.titulo}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm flex-1">
                    {p.texto}
                  </p>
                </div>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
