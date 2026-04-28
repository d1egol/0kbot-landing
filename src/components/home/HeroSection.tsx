import { CheckCircle2 } from "lucide-react";
import TrackedLink from "@/components/ui/TrackedLink";
import HeroVisual from "./HeroVisual";

const bullets = [
  "Detectamos cuellos de botella con números reales",
  "Reducimos trabajo manual, errores y reprocesos",
  "Implementamos soluciones simples que tu equipo sí usa",
];

export default function HeroSection() {
  return (
    <section className="relative bg-background pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#1B5FA6 1px, transparent 1px), linear-gradient(to right, #1B5FA6 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container-content relative">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12 items-center">
          {/* Text — 3 cols (Server-rendered, CSS-only entrance animations) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="hero-fade hero-fade-0 inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full font-body border border-primary/15">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-scan" />
              Consultoría de procesos + automatización para pymes chilenas
            </div>

            <p className="hero-fade hero-fade-1 text-sm font-medium text-muted-foreground font-body uppercase tracking-wide">
              Mejora de procesos para pymes en Chile
            </p>

            <h1 className="hero-fade hero-fade-1 font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-[1.1]">
              No vendemos IA.
              <br />
              <span className="text-gradient-accent">Vendemos lunes tranquilos.</span>
            </h1>

            <p className="hero-fade hero-fade-2 text-lg text-muted-foreground font-body leading-relaxed max-w-xl">
              Detectamos dónde tu pyme pierde tiempo, plata y control. Luego
              ordenamos, automatizamos y medimos mejoras reales en 12 semanas.
              Sin teoría. Sin software innecesario.
            </p>

            {/* Bullets */}
            <ul className="hero-fade hero-fade-3 space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-foreground font-body">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="hero-fade hero-fade-4 flex flex-col sm:flex-row gap-3 pt-2">
              <TrackedLink
                href="/#estimador"
                ctaName="Calcular mi pérdida operativa"
                location="hero"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-medium font-body text-sm hover:bg-primary/90 transition-colors"
              >
                Calcular mi pérdida operativa →
              </TrackedLink>
              <TrackedLink
                href="/#metodo"
                ctaName="Ver cómo funciona"
                location="hero_secondary"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-primary/40 text-primary rounded-md font-medium font-body text-sm hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Ver cómo funciona ↓
              </TrackedLink>
            </div>

            <p className="hero-fade hero-fade-5 text-xs text-muted-foreground font-body">
              Diagnóstico gratuito · Sin compromiso · Respuesta en 24 hrs
            </p>
          </div>

          {/* Visual — 2 cols: animated diagnosis card (Client Component) */}
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
