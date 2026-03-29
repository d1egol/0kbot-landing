import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

export default function DiagnosticoSection() {
  return (
    <section id="cta-diagnostico" className="surface-cool py-20 lg:py-32">
      <div className="container-content text-center">
        <MotionSection>
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-4">
            Diagnóstico gratuito
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cuánto le está costando a tu empresa?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
            Agenda una llamada de diagnóstico de 30 minutos. Sin compromiso,
            sin teoría. Solo números reales sobre tu operación.
          </p>

          <OpenModalButton className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold font-body text-sm hover:bg-primary/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>

          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground font-body">
            <span>30 minutos</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <span>Sin costo</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <span>Resultados concretos</span>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
