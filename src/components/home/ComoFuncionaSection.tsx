import MotionSection from "@/components/ui/MotionSection";
import { Search, ClipboardList, Wrench, BarChart2 } from "lucide-react";

const etapas = [
  {
    numero: "01",
    semanas: "Semanas 1–2",
    titulo: "La verdad incómoda",
    texto:
      "Mapeamos sin interrumpir. Tu equipo sigue trabajando. Nosotros medimos. Al final: un documento con números rojos que no puedes ignorar.",
    icono: Search,
  },
  {
    numero: "02",
    semanas: "Semanas 3–4",
    titulo: "El plan realista",
    texto:
      "Te decimos qué arreglar primero para sentir el impacto en 30 días. No \"transformación digital\". Cosas concretas: este reporte automático, esa integración, este flujo sin ese paso.",
    icono: ClipboardList,
  },
  {
    numero: "03",
    semanas: "Semanas 5–10",
    titulo: "La implementación",
    texto:
      "Lo construimos con tu equipo. Capacitamos. Documentamos. Cuando nos vamos, alguien de tu empresa sabe exactamente cómo funciona.",
    icono: Wrench,
  },
  {
    numero: "04",
    semanas: "Semanas 11–12",
    titulo: "Las pruebas",
    texto:
      "Medimos otra vez. Mismo indicador, mismo período. La diferencia es tu ROI. Si no se ve, no cobramos el último tramo.",
    icono: BarChart2,
  },
];

export default function ComoFuncionaSection() {
  return (
    <section id="como-funciona" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            12 semanas.
            <br />
            Después, te olvidas de nosotros.
          </h2>
        </MotionSection>

        {/* Timeline desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-muted" />
          <div className="grid grid-cols-4 gap-6 relative">
            {etapas.map((etapa, i) => {
              const Icono = etapa.icono;
              return (
                <MotionSection key={etapa.numero} delay={i * 0.1}>
                  <div className="pt-16 space-y-3">
                    <div
                      className="absolute top-0 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2"
                      style={{
                        left: `calc(${(i / 4) * 100}% + ${i === 0 ? "0px" : i === 3 ? "-1.5rem" : "-0.75rem"})`,
                        borderColor: "#06B6D4",
                      }}
                    >
                      <Icono size={18} style={{ color: "#06B6D4" }} />
                    </div>
                    <p className="text-xs text-accent font-medium font-mono">
                      {etapa.semanas}
                    </p>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {etapa.texto}
                    </p>
                  </div>
                </MotionSection>
              );
            })}
          </div>
        </div>

        {/* Timeline móvil — vertical */}
        <div className="lg:hidden space-y-0">
          {etapas.map((etapa, i) => {
            const Icono = etapa.icono;
            return (
              <MotionSection key={etapa.numero} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-full border-2 shrink-0"
                      style={{ borderColor: "#06B6D4" }}
                    >
                      <Icono size={16} style={{ color: "#06B6D4" }} />
                    </div>
                    {i < etapas.length - 1 && (
                      <div className="w-px flex-1 bg-muted mt-2 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-8 space-y-1.5">
                    <p className="text-xs text-accent font-medium font-mono">
                      {etapa.semanas}
                    </p>
                    <h3 className="font-heading font-semibold text-base text-foreground">
                      {etapa.titulo}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">
                      {etapa.texto}
                    </p>
                  </div>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection className="mt-12 pt-8 border-t border-muted">
          <p className="text-sm text-muted-foreground font-body text-center italic max-w-lg mx-auto">
            Usamos automatización de procesos e IA donde tiene sentido — no
            porque esté de moda, sino porque mejora tu eficiencia operacional.
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
