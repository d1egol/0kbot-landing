import MotionSection from "@/components/ui/MotionSection";
import DiagnosticoWizard from "@/components/ui/DiagnosticoWizard";

export default function DiagnosticoSection() {
  return (
    <section id="cta-diagnostico" className="surface-cool py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-4">
            Diagnóstico gratuito
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cuánto le está costando a tu empresa?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto mb-8">
            Responde 5 preguntas rápidas y agenda tu llamada de diagnóstico.
            Sin compromiso, sin teoría. Solo números reales sobre tu operación.
          </p>
        </MotionSection>

        <div className="max-w-2xl mx-auto">
          <DiagnosticoWizard />
        </div>

        <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground font-body">
          <span>30 minutos</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span>Sin costo</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span>Resultados concretos</span>
        </div>
      </div>
    </section>
  );
}
