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
    <section className="bg-primary py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Análisis, estandarización y<br />automatización de procesos
          </h2>
        </MotionSection>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {/* Qué hacemos */}
          <MotionSection delay={0}>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10">
                <ScanSearch size={22} style={{ color: "#06B6D4" }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-accent">
                Qué hacemos
              </h3>
              <p className="text-white/80 font-body text-sm leading-relaxed">
                Analizamos tus procesos operativos para detectar pérdidas de
                tiempo, errores, retrabajo y cuellos de botella.
              </p>
            </div>
          </MotionSection>

          {/* Cómo lo hacemos */}
          <MotionSection delay={0.1}>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10">
                <Settings2 size={22} style={{ color: "#06B6D4" }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-accent">
                Cómo lo hacemos
              </h3>
              <ol className="space-y-2">
                {pasos.map((paso, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/80 font-body text-sm leading-relaxed">
                    <span className="text-accent font-mono text-xs font-bold mt-0.5 shrink-0">
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
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10">
                <Award size={22} style={{ color: "#06B6D4" }} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-accent">
                Qué obtienes
              </h3>
              <ul className="space-y-2">
                {resultados.map((r) => (
                  <li key={r} className="flex items-center gap-2.5 text-white/80 font-body text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </MotionSection>
        </div>

        <MotionSection className="text-center">
          <OpenModalButton className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>
          <p className="mt-3 text-white/50 text-xs font-body">
            Diagnóstico gratuito · Sin compromiso
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
