import AnimatedSection from "@/components/ui/AnimatedSection";
import DiagnosticoWizard from "@/components/ui/DiagnosticoWizard";

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="bg-muted/20 py-20 lg:py-32 border-t border-muted">
      <div className="container-content">
        <AnimatedSection className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full font-sans border border-primary/15 mb-4">
            Diagnóstico inicial · 2 minutos · Sin compromiso
          </div>
          <h2 className="font-display text-display-lg font-bold text-foreground">
            ¿Cuánto le está costando a tu empresa?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-sans max-w-xl mx-auto">
            Responde 5 preguntas y te llamamos para mostrarte dónde están las
            pérdidas y oportunidades de mejora de procesos operativos — con
            números, no con suposiciones.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <DiagnosticoWizard />
        </AnimatedSection>
      </div>
    </section>
  );
}
