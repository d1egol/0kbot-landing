import MetricCard from "@/components/ui/MetricCard";
import OpenModalButton from "@/components/ui/OpenModalButton";

const HERO_BULLETS = [
  "Detectamos cuellos de botella con números reales",
  "Eliminamos trabajo manual innecesario",
  "Implementamos soluciones simples que sí usa tu equipo",
];

export default function Hero() {
  return (
    <section className="bg-background pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container-content">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="font-display font-bold text-foreground" style={{ fontSize: "22px" }}>
              0kbot
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full font-sans border border-primary/15">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-scan"
                style={{ backgroundColor: "#1B5FA6" }}
              />
              Consultoría de procesos · Santiago, Chile
            </div>

            <h1 className="font-display text-display-xl font-bold text-foreground text-balance leading-[1.08]">
              Automatizamos procesos para pymes en Chile.
              <br />
              No vendemos IA. Vendemos lunes tranquilos.
            </h1>

            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl">
              Detectamos dónde se va tu tiempo y tu plata, y lo arreglamos con
              cambios concretos: automatización de procesos, estandarización y
              mejora de procesos operativos. Sin teoría. Sin software
              innecesario.
            </p>

            <ul className="space-y-2.5">
              {HERO_BULLETS.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground/90 font-sans">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <OpenModalButton className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-medium font-sans text-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors">
                Descubrir cuánto estoy perdiendo →
              </OpenModalButton>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-primary/40 text-primary rounded-md font-medium font-sans text-sm hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Ver cómo trabajamos ↓
              </a>
            </div>

            <p className="text-xs text-muted-foreground font-sans">
              Diagnóstico inicial sin costo · Sin compromiso · Respuesta en 24 hrs
            </p>
          </div>

          <div className="lg:col-span-2">
            <MetricCard />
          </div>
        </div>
      </div>
    </section>
  );
}
