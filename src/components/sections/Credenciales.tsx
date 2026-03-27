import AnimatedSection from "@/components/ui/AnimatedSection";

const badges = [
  "Ingeniero Civil Industrial PUC",
  "MSc Data Science",
  "Lean Six Sigma Green Belt",
  "8+ años en operaciones",
];

export default function Credenciales() {
  return (
    <section id="credenciales" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Visual izquierda */}
          <AnimatedSection>
            <div className="relative">
              <div className="w-full max-w-sm mx-auto rounded-lg bg-primary/6 border border-primary/15 p-8 space-y-6">
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">
                    Diego
                  </p>
                  <p className="text-sm text-muted-foreground font-sans mt-1">
                    Founder · 0kbot
                  </p>
                </div>
                <div className="h-px bg-primary/10" />
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs px-2.5 py-1.5 rounded-full bg-muted text-foreground font-sans"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detalle decorativo */}
              <div
                className="absolute -top-3 -left-3 w-12 h-12 rounded-md"
                style={{ backgroundColor: "#D4A853", opacity: 0.2 }}
              />
              <div
                className="absolute -bottom-3 -right-3 w-8 h-8 rounded-md"
                style={{ backgroundColor: "#1B5FA6", opacity: 0.15 }}
              />
            </div>
          </AnimatedSection>

          {/* Texto derecha */}
          <AnimatedSection delay={100}>
            <div className="space-y-6">
              <h2 className="font-display text-display-md font-bold text-foreground">
                He estado del otro lado
              </h2>
              <p className="text-sm font-sans text-primary">
                Ingeniero Civil Industrial PUC · MSc Data Science · Lean Six Sigma Green Belt · 8+ años en operaciones
              </p>

              <div className="space-y-4 text-muted-foreground font-sans text-base leading-relaxed">
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

              <p className="text-sm text-muted-foreground font-sans border-l-4 pl-4 italic"
                style={{ borderLeftColor: "#D4A853" }}>
                Si llegaste hasta aquí, probablemente sospechas que algo está
                más roto de lo que admites. Tienes razón. Agendemos 30 minutos
                y te confirmo dónde.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
