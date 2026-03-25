import AnimatedSection from "@/components/ui/AnimatedSection";

const etapas = [
  {
    numero: "01",
    semanas: "Semanas 1–2",
    titulo: "La verdad incómoda",
    texto:
      "Mapeamos sin interrumpir. Tu equipo sigue trabajando. Nosotros medimos. Al final: un documento con números rojos que no puedes ignorar.",
  },
  {
    numero: "02",
    semanas: "Semanas 3–4",
    titulo: "El plan realista",
    texto:
      "Te decimos qué arreglar primero para sentir el impacto en 30 días. No \"transformación digital\". Cosas concretas: este reporte automático, esa integración, este flujo sin ese paso.",
  },
  {
    numero: "03",
    semanas: "Semanas 5–10",
    titulo: "La implementación",
    texto:
      "Lo construimos con tu equipo. Capacitamos. Documentamos. Cuando nos vamos, alguien de tu empresa sabe exactamente cómo funciona.",
  },
  {
    numero: "04",
    semanas: "Semanas 11–12",
    titulo: "Las pruebas",
    texto:
      "Medimos otra vez. Mismo indicador, mismo período. La diferencia es tu ROI. Si no se ve, no cobramos el último tramo.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <AnimatedSection className="mb-14">
          <h2 className="font-display text-display-lg font-bold text-foreground">
            12 semanas.
            <br />
            Después, te olvidas de nosotros.
          </h2>
        </AnimatedSection>

        {/* Timeline desktop */}
        <div className="hidden lg:block">
          {/* Línea horizontal */}
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-muted" />
            <div className="grid grid-cols-4 gap-6 relative">
              {etapas.map((etapa, i) => (
                <AnimatedSection key={etapa.numero} delay={(i * 100) as 0 | 100 | 200 | 300}>
                  <div className="pt-14 space-y-3">
                    {/* Dot */}
                    <div
                      className="absolute top-4 w-4 h-4 rounded-full border-2 border-accent bg-background"
                      style={{
                        left: `calc(${(i / 4) * 100}% + ${i === 0 ? "0px" : i === 3 ? "-1rem" : "-0.5rem"})`,
                        backgroundColor: "#F7F5F0",
                        borderColor: "#D4A853",
                      }}
                    />
                    <p className="text-xs font-mono-metric text-accent font-medium">
                      {etapa.semanas}
                    </p>
                    <h3 className="font-display font-semibold text-base text-foreground">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {etapa.texto}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline mobile — vertical */}
        <div className="lg:hidden space-y-0">
          {etapas.map((etapa, i) => (
            <AnimatedSection key={etapa.numero} delay={(i % 2 === 0 ? 0 : 100) as 0 | 100}>
              <div className="flex gap-5">
                {/* Left: número y línea */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full border-2 text-xs font-mono-metric font-bold shrink-0"
                    style={{ borderColor: "#D4A853", color: "#D4A853" }}
                  >
                    {etapa.numero}
                  </div>
                  {i < etapas.length - 1 && (
                    <div className="w-px flex-1 bg-muted mt-2 mb-0 min-h-[2rem]" />
                  )}
                </div>

                {/* Right: contenido */}
                <div className="pb-8 space-y-1.5">
                  <p className="text-xs font-mono-metric text-accent font-medium">
                    {etapa.semanas}
                  </p>
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {etapa.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {etapa.texto}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground font-sans text-center italic max-w-lg mx-auto">
            Usamos IA y automatización donde tiene sentido — no porque esté de
            moda, sino porque resuelve el problema específico.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
