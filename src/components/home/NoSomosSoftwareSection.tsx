import MotionSection from "@/components/ui/MotionSection";
import { X } from "lucide-react";

const items = [
  "No partimos comprando herramientas.",
  "No automatizamos procesos rotos.",
  "No llenamos a tu equipo de dashboards que nadie usa.",
  "No prometemos IA mágica.",
  "No desaparecemos después del diagnóstico.",
  "No medimos vanidad, medimos operación.",
];

export default function NoSomosSoftwareSection() {
  return (
    <section className="bg-foreground text-background py-20 lg:py-28">
      <div className="container-content">
        <MotionSection className="mb-12 max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4 text-[#D4AF37]">
            Lo que NO hacemos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            No necesitas otro software caro.
            <br />
            <span className="text-background/70">
              Necesitas que tu operación deje de depender de memoria, WhatsApp
              y Excel.
            </span>
          </h2>
        </MotionSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((text, i) => (
            <MotionSection key={text} delay={i * 0.05}>
              <div className="flex items-start gap-3 bg-background/5 border border-background/10 rounded-xl px-5 py-4 hover:border-background/25 transition-colors h-full">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-background/10 shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 text-background/70" />
                </div>
                <p className="text-sm font-body leading-relaxed text-background/90">
                  {text}
                </p>
              </div>
            </MotionSection>
          ))}
        </div>

        <MotionSection delay={0.4} className="mt-10 pt-6 border-t border-background/10">
          <p className="text-sm font-body text-background/70 max-w-2xl leading-relaxed">
            Si vas a invertir en mejorar tu operación, queremos que te quede
            algo cuando nos vayamos: procesos claros, datos en orden y un
            equipo que sepa sostenerlo.
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
