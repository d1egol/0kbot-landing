import DiagnosticoWizard from "@/components/ui/DiagnosticoWizard";

export default function DiagnosticoSection() {
  return (
    <section id="cta-diagnostico" className="surface-cool py-20 lg:py-32">
      <div className="container-content">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent mb-4">
            Diagnóstico gratuito
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Cuánto le está costando a tu empresa?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Completa el diagnóstico en 2 minutos. Te contactamos en menos de 24
            horas con una estimación real de las pérdidas y un plan de acción.
          </p>
        </div>
        <DiagnosticoWizard />
      </div>
    </section>
  );
}
