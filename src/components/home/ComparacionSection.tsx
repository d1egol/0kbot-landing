import { Check, X, Minus } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";

const features = [
  { label: "Implementación en semanas", okbot: true, empleado: false, agencia: false },
  { label: "Diagnóstico incluido", okbot: true, empleado: false, agencia: "partial" },
  { label: "Pago por resultado", okbot: true, empleado: false, agencia: false },
  { label: "Conocimiento del sector industrial", okbot: true, empleado: "partial", agencia: false },
  { label: "Sin costo de contratación/onboarding", okbot: true, empleado: false, agencia: true },
  { label: "Disponible 24/7 post-implementación", okbot: true, empleado: false, agencia: false },
  { label: "Metodología estandarizada", okbot: true, empleado: false, agencia: "partial" },
  { label: "Transferencia de conocimiento al equipo", okbot: true, empleado: true, agencia: false },
];

type FeatureValue = boolean | "partial";

function FeatureIcon({ value }: { value: FeatureValue }) {
  if (value === true)
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[2.5]" />
        </div>
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
          <Minus className="w-3.5 h-3.5 text-amber-600 stroke-[2.5]" />
        </div>
      </div>
    );
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-red-500 stroke-[2.5]" />
      </div>
    </div>
  );
}

export default function ComparacionSection() {
  return (
    <section className="section-padding surface-cool">
      <div className="container-content">
        <MotionSection className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Comparación
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            ¿Por qué 0kbot y no otra opción?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            No somos la única forma de mejorar tus procesos. Pero hay razones
            concretas por las que más de 40 empresas nos eligieron.
          </p>
        </MotionSection>

        <MotionSection delay={0.1}>
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
            {/* Header */}
            <div className="grid grid-cols-4 bg-muted/50">
              <div className="p-4 md:p-6" />
              <div className="p-4 md:p-6 text-center border-l border-border">
                <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  RECOMENDADO
                </div>
                <div className="font-heading font-bold text-foreground text-lg">0kbot</div>
                <div className="text-xs text-muted-foreground">Consultora especializada</div>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-border">
                <div className="font-heading font-bold text-foreground text-base md:text-lg">Empleado</div>
                <div className="text-xs text-muted-foreground">Contratación interna</div>
              </div>
              <div className="p-4 md:p-6 text-center border-l border-border">
                <div className="font-heading font-bold text-foreground text-base md:text-lg">Agencia</div>
                <div className="text-xs text-muted-foreground">Tecnológica genérica</div>
              </div>
            </div>

            {/* Rows */}
            {features.map((f, i) => (
              <div
                key={f.label}
                className={`grid grid-cols-4 border-t border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
              >
                <div className="p-3 md:p-4 flex items-center">
                  <span className="text-sm text-foreground font-body">{f.label}</span>
                </div>
                <div className="p-3 md:p-4 border-l border-border bg-primary/3">
                  <FeatureIcon value={f.okbot as FeatureValue} />
                </div>
                <div className="p-3 md:p-4 border-l border-border">
                  <FeatureIcon value={f.empleado as FeatureValue} />
                </div>
                <div className="p-3 md:p-4 border-l border-border">
                  <FeatureIcon value={f.agencia as FeatureValue} />
                </div>
              </div>
            ))}

            {/* Footer legend */}
            <div className="p-4 bg-muted/30 border-t border-border flex items-center gap-6 flex-wrap text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                </div>
                Incluido
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                  <Minus className="w-2.5 h-2.5 text-amber-600 stroke-[3]" />
                </div>
                Parcial o varía
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-2.5 h-2.5 text-red-500 stroke-[3]" />
                </div>
                No incluido
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
