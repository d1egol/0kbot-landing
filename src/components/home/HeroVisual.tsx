"use client";

import { useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

type Phase = "ordenado" | "automatizando" | "medido";

const phaseStyles: Record<Phase, { label: string; mark: string; bg: string; fg: string; ring: string }> = {
  ordenado: { label: "Ordenado", mark: "○", bg: "bg-[#E8F0FA]", fg: "text-[#1B5FA6]", ring: "ring-[#1B5FA6]/15" },
  automatizando: { label: "Automatizando", mark: "⏳", bg: "bg-[#FBF4DC]", fg: "text-[#9C7B0F]", ring: "ring-[#D4AF37]/30" },
  medido: { label: "Medido", mark: "✓", bg: "bg-emerald-50", fg: "text-emerald-700", ring: "ring-emerald-500/20" },
};

const diagnosisRows: Array<{
  process: string;
  before: string;
  after: string;
  beforePct: number;
  afterPct: number;
  phase: Phase;
  icon: React.ReactNode;
}> = [
  {
    process: "Coordinación de pedidos",
    before: "12 h/sem",
    after: "2 h/sem",
    beforePct: 100,
    afterPct: 17,
    phase: "medido",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
        <rect x="1" y="4" width="14" height="9" rx="2" stroke="#1B5FA6" strokeWidth="1.4"/>
        <path d="M5 4V3a3 3 0 016 0v1" stroke="#1B5FA6" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 8v2M6 9h4" stroke="#1B5FA6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    process: "Visitas fallidas",
    before: "33%",
    after: "12%",
    beforePct: 100,
    afterPct: 36,
    phase: "automatizando",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
        <circle cx="8" cy="8" r="6.5" stroke="#1B5FA6" strokeWidth="1.4"/>
        <path d="M5.5 8.5l2 2 3-3" stroke="#1B5FA6" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    process: "Reporte gerencial",
    before: "4 hrs",
    after: "Automático",
    beforePct: 100,
    afterPct: 0,
    phase: "medido",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
        <rect x="2" y="1.5" width="12" height="13" rx="1.5" stroke="#1B5FA6" strokeWidth="1.4"/>
        <path d="M5 6h6M5 9h4M5 12h3" stroke="#1B5FA6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const TOTAL_HOURS = 14;

function useCounterOnVisible(target: number, durationMs: number = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !triggered.current) {
          triggered.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(elapsed / durationMs, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}

export default function HeroVisual() {
  const { ref: counterRef, value: hoursSaved } = useCounterOnVisible(TOTAL_HOURS);

  return (
    <LazyMotion features={domAnimation}>
    <div className="lg:col-span-2 relative">
      <m.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        {/* Diagnosis results card */}
        <div className="rounded-2xl bg-white border border-[#E5E2DB] shadow-xl p-5 relative overflow-hidden">

          {/* Card header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F0EDE8]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-[#1A1A1A]">Diagnóstico típico</span>
            </div>
            <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              12 semanas
            </span>
          </div>

          {/* Rows with phase chip + before/after bars */}
          <div className="space-y-3">
            {diagnosisRows.map((row, i) => {
              const phase = phaseStyles[row.phase];
              return (
                <m.div
                  key={row.process}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="rounded-lg bg-[#F7F5F0] px-3 py-2.5 space-y-2"
                >
                  {/* Top row: process name + phase chip + before/after labels */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      {row.icon}
                      <span className="text-[10px] font-medium text-[#1A1A1A] truncate">{row.process}</span>
                    </div>
                    <span
                      className={`text-[8.5px] font-semibold px-1.5 py-0.5 rounded-full ring-1 shrink-0 ${phase.bg} ${phase.fg} ${phase.ring}`}
                      aria-label={`Fase: ${phase.label}`}
                    >
                      {phase.mark} {phase.label}
                    </span>
                  </div>

                  {/* Two stacked bars: before (red) vs after (green) */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[8.5px] font-semibold text-[#999] w-10 shrink-0 uppercase tracking-wider">Antes</span>
                      <div className="flex-1 h-1.5 rounded-full bg-[#E5E2DB] overflow-hidden">
                        <m.div
                          className="h-full rounded-full bg-[#EF4444]/70"
                          initial={{ width: 0 }}
                          animate={{ width: `${row.beforePct}%` }}
                          transition={{ delay: 0.8 + i * 0.15, duration: 0.7, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-[9px] text-[#999] tabular-nums w-14 shrink-0 text-right line-through">{row.before}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[8.5px] font-semibold text-emerald-700 w-10 shrink-0 uppercase tracking-wider">Hoy</span>
                      <div className="flex-1 h-1.5 rounded-full bg-[#E5E2DB] overflow-hidden">
                        <m.div
                          className="h-full rounded-full bg-emerald-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${row.afterPct}%` }}
                          transition={{ delay: 1.0 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                      <span className="text-[9px] text-emerald-700 font-semibold tabular-nums w-14 shrink-0 text-right">{row.after}</span>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>

          {/* Footer: animated counter for total saving */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-3 pt-3 border-t border-[#F0EDE8] flex items-center justify-between"
          >
            <span className="text-[10px] text-[#999]">Ahorro estimado</span>
            <span className="text-sm font-bold text-emerald-600 tabular-nums">
              ~<span ref={counterRef}>{hoursSaved}</span> hrs / semana
            </span>
          </m.div>
        </div>

        {/* Floating badge: flow del Método 0kbot OS */}
        <m.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.4, type: "spring" }}
          className="absolute -bottom-5 -left-4 bg-white border border-[#E5E2DB] shadow-lg rounded-xl px-3.5 py-2.5"
        >
          <div className="text-[9px] font-semibold text-[#999] uppercase tracking-wider mb-1.5">
            Método 0kbot OS
          </div>
          <div className="flex items-end gap-2.5">
            {[
              { c: "#1B5FA6", t: "Detectar" },
              { c: "#1A74C4", t: "Ordenar" },
              { c: "#D4AF37", t: "Automatizar" },
              { c: "#10B981", t: "Medir" },
            ].map((step) => (
              <div key={step.t} className="flex flex-col items-center gap-0.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: step.c }}
                />
                <span className="text-[8px] text-[#666] font-medium leading-tight">
                  {step.t}
                </span>
              </div>
            ))}
          </div>
        </m.div>

        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
          style={{ background: "radial-gradient(circle, #1B5FA6, transparent)" }}
        />
      </m.div>
    </div>
    </LazyMotion>
  );
}
