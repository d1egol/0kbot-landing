import MetricCard from "@/components/ui/MetricCard";
import OpenModalButton from "@/components/ui/OpenModalButton";

export default function Hero() {
  return (
    <section className="bg-background pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container-content">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-16 items-center">
          {/* Texto — 3 columnas */}
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full font-sans border border-primary/15">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-scan"
                style={{ backgroundColor: "#1B4332" }}
              />
              Consultora de procesos · Santiago, Chile
            </div>

            <h1 className="font-display text-display-xl font-bold text-foreground text-balance leading-[1.1]">
              Tu equipo trabaja los fines de semana sin darse cuenta
            </h1>

            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
              Las tareas que deberían tomar 20 minutos les roban 3 horas
              diarias. No es que sean lentos. Es que tus procesos están rotos y
              nadie te lo ha dicho con números.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <OpenModalButton
                className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-medium font-sans text-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              >
                Descubrir pérdidas ocultas →
              </OpenModalButton>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-muted text-foreground rounded-md font-medium font-sans text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                Ver cómo lo hacemos ↓
              </a>
            </div>

            <p className="text-xs text-muted-foreground font-sans">
              Diagnóstico gratuito · Sin compromiso · Respuesta en 24 hrs
            </p>
          </div>

          {/* MetricCard — 2 columnas */}
          <div className="lg:col-span-2">
            <MetricCard />
          </div>
        </div>
      </div>
    </section>
  );
}
