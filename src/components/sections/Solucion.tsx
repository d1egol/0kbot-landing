import AnimatedSection from "@/components/ui/AnimatedSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

const pasos = [
  "Observamos lo que realmente pasa",
  "Medimos tiempos, errores y puntos de fricción",
  "Priorizamos qué corregir primero",
  "Estandarizamos y automatizamos donde tiene sentido",
  "Medimos impacto en eficiencia operacional",
];

const resultados = [
  "Menos errores",
  "Menos dependencia de personas clave",
  "Más velocidad operativa",
  "Más control",
  "Decisiones con datos reales",
];

export default function Solucion() {
  return (
    <section className="section-primary py-20 lg:py-32">
      <div className="container-content">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-display-lg font-bold text-white">
            Consultoría de procesos para pymes,
            <br />
            enfocada en corregir lo que hoy te frena.
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          <AnimatedSection>
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-accent">
                Qué hacemos
              </h3>
              <p className="text-white/85 font-sans text-sm leading-relaxed">
                Analizamos tus procesos operativos para detectar pérdidas de
                tiempo, errores, retrabajo y cuellos de botella. Esa es la base
                de cualquier optimización de procesos en pymes que valga la
                pena.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-accent">
                Cómo lo hacemos
              </h3>
              <ol className="space-y-2.5">
                {pasos.map((paso, idx) => (
                  <li key={paso} className="flex items-start gap-2.5 text-white/85 font-sans text-sm leading-relaxed">
                    <span className="text-accent font-mono-metric text-xs mt-0.5">
                      {idx + 1}.
                    </span>
                    <span>{paso}</span>
                  </li>
                ))}
              </ol>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-lg text-accent">
                Qué obtienes
              </h3>
              <ul className="space-y-2.5">
                {resultados.map((resultado) => (
                  <li key={resultado} className="flex items-start gap-2.5 text-white/85 font-sans text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{resultado}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="text-center">
          <OpenModalButton className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold font-sans text-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-colors">
            Detectar mis cuellos de botella →
          </OpenModalButton>
          <p className="mt-3 text-white/50 text-xs font-sans">
            Sin teoría. Sin software por moda.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
