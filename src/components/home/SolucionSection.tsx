import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";
import { ScanSearch, Settings2, Award } from "lucide-react";

const pasos = [
  "Observamos lo que realmente pasa",
  "Medimos tiempos, errores y puntos de fricción",
  "Priorizamos qué corregir primero",
  "Estandarizamos y automatizamos donde tiene sentido",
  "Medimos el impacto",
];

const resultados = [
  "Menos errores",
  "Menos dependencia de personas clave",
  "Más velocidad operativa",
  "Más control",
  "Decisiones con datos reales",
];

export default function SolucionSection() {
  return (
    <section className="bg-card py-20 lg:py-32 border-y border-muted">
      <div className="container-content">
        <MotionSection className="text-center mb-14">
          <p className="text-xs font-mono font-semibold text-primary uppercase tracking-widest mb-4">
            Qué hacemos · cómo · para qué
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] text-foreground">
            Análisis, estandarización y<br />automatización de procesos
          </h2>
        </MotionSection>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {/* Qué hacemos */}
          <MotionSection delay={0}>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10">
                <ScanSearch size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Qué hacemos
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Analizamos tus procesos operativos para detectar pérdidas de
                tiempo, errores, retrabajo y cuellos de botella.
              </p>
            </div>
          </MotionSection>

          {/* Cómo lo hacemos */}
          <MotionSection delay={0.1}>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10">
                <Settings2 size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Cómo lo hacemos
              </h3>
              <ol className="space-y-2">
                {pasos.map((paso, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-muted-foreground font-body text-sm leading-relaxed">
                    <span className="text-primary font-mono text-xs font-bold mt-0.5 shrink-0">
                      {i + 1}.
                    </span>
                    {paso}
                  </li>
                ))}
              </ol>
            </div>
          </MotionSection>

          {/* Qué obtienes */}
          <MotionSection delay={0.2}>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10">
                <Award size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">
                Qué obtienes
              </h3>
              <ul className="space-y-2">
                {resultados.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-muted-foreground font-body text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>
        </div>

        <MotionSection className="text-center">
          <OpenModalButton location="solucion" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-md font-semibold font-body text-sm hover:bg-primary/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>
          <p className="mt-3 text-muted-foreground text-xs font-body">
            Diagnóstico gratuito · Sin compromiso
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
