import MotionSection from "@/components/ui/MotionSection";
import { Search, ListChecks, Cog, Activity } from "lucide-react";

const etapas = [
  {
    numero: "01",
    fase: "Detectar",
    titulo: "Dónde se pierde tiempo, plata y control",
    texto:
      "Mapeamos sin interrumpir. Tu equipo sigue trabajando; nosotros medimos. Salimos con un documento de números rojos que no se pueden ignorar.",
    icono: Search,
    color: "#1B5FA6",
  },
  {
    numero: "02",
    fase: "Ordenar",
    titulo: "Roles, pasos, datos y responsables",
    texto:
      "Estandarizamos lo que hoy depende de memoria. Quién hace qué, con qué información, en qué momento y dónde queda registrado.",
    icono: ListChecks,
    color: "#1A74C4",
  },
  {
    numero: "03",
    fase: "Automatizar",
    titulo: "Flujos simples que tu equipo sí usa",
    texto:
      "Formularios, tableros, bots y alertas. Sin software caro, sin proyectos eternos. Lo que automatizamos lo deja documentado tu equipo, no nosotros.",
    icono: Cog,
    color: "#D4AF37",
  },
  {
    numero: "04",
    fase: "Medir",
    titulo: "Indicadores que viven después de nosotros",
    texto:
      "Mismo indicador, mismo período. La diferencia es tu ROI. Si no se ve, no cobramos el último tramo. La mejora deja de depender de memoria.",
    icono: Activity,
    color: "#10B981",
  },
];

export default function MetodoSection() {
  return (
    <section id="metodo" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="mb-14">
          <p className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-3">
            Método 0kbot OS
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Detectar → Ordenar → Automatizar → Medir.
            <br />
            En 12 semanas, tu operación deja de depender de nosotros.
          </h2>
        </MotionSection>

        {/* Timeline desktop */}
        <div className="hidden lg:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-muted" />
          <div className="grid grid-cols-4 gap-6">
            {etapas.map((etapa, i) => {
              const Icono = etapa.icono;
              return (
                <MotionSection key={etapa.numero} delay={i * 0.1}>
                  <div className="flex flex-col items-start">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 mb-4"
                      style={{ borderColor: etapa.color }}
                    >
                      <Icono size={18} style={{ color: etapa.color }} />
                    </div>
                    <div className="bg-card rounded-xl p-5 border border-muted/50 space-y-3 w-full">
                      <p
                        className="text-xs font-medium font-mono"
                        style={{ color: etapa.color }}
                      >
                        {etapa.numero} · {etapa.fase}
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
                      style={{ borderColor: etapa.color }}
                    >
                      <Icono size={16} style={{ color: etapa.color }} />
                    </div>
                    {i < etapas.length - 1 && (
                      <div className="w-px flex-1 bg-muted mt-2 min-h-[2rem]" />
                    )}
                  </div>
                  <div className="pb-8 space-y-1.5">
                    <p
                      className="text-xs font-medium font-mono"
                      style={{ color: etapa.color }}
                    >
                      {etapa.numero} · {etapa.fase}
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
            Usamos automatización e IA donde tiene sentido — no porque esté de
            moda, sino porque mejora tu eficiencia operacional.
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
