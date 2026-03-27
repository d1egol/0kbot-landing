"use client";

import { useEffect, useRef, useState } from "react";

interface MetricCardProps {
  className?: string;
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.round(startValue + (target - startValue) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return value;
}

export default function MetricCard({ className = "" }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const horas = useCountUp(12, 1800, visible);
  const costo = useCountUp(380, 1800, visible);

  return (
    <div
      ref={ref}
      className={`relative bg-white border-l-4 border-l-accent rounded-lg p-6 shadow-metric ${className}`}
      style={{ borderLeftColor: "#D4A853" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-lg">⚠️</span>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide font-sans">
          Cuello de botella detectado
        </span>
        <span
          className="ml-auto inline-block w-2 h-2 rounded-full bg-accent animate-scan"
          style={{ backgroundColor: "#D4A853" }}
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground font-sans mb-0.5">
            Proceso
          </p>
          <p className="font-display font-semibold text-foreground text-base">
            Facturación
          </p>
        </div>

        <div className="pt-2 border-t border-muted">
          <p className="text-xs text-muted-foreground font-sans mb-1">
            Tiempo perdido
          </p>
          <p
            className="font-mono-metric text-2xl font-medium text-foreground transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <span className="text-3xl font-bold">{horas}</span>
            <span className="text-base ml-1 text-muted-foreground">
              hrs/semana
            </span>
          </p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground font-sans mb-1">
            Costo estimado
          </p>
          <p
            className="font-mono-metric text-foreground transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <span className="text-xl font-bold text-primary">
              ${costo.toLocaleString("es-CL")}.000
            </span>
            <span className="text-sm ml-1 text-muted-foreground">/mes</span>
          </p>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={() => {
          document
            .getElementById("cta-diagnostico")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-5 w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors text-left font-sans"
      >
        Resolver ahora →
      </button>
    </div>
  );
}
