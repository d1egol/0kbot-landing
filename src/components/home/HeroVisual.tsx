"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const diagnosisRows = [
  {
    process: "Coordinación de pedidos",
    before: "12 h/sem",
    after: "2 h/sem",
    saving: 83,
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
    saving: 64,
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
    saving: 100,
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
        <rect x="2" y="1.5" width="12" height="13" rx="1.5" stroke="#1B5FA6" strokeWidth="1.4"/>
        <path d="M5 6h6M5 9h4M5 12h3" stroke="#1B5FA6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function HeroVisual() {
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

          {/* Rows with progress bars */}
          <div className="space-y-3">
            {diagnosisRows.map((row, i) => (
              <m.div
                key={row.process}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="rounded-lg bg-[#F7F5F0] px-3 py-2.5 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {row.icon}
                    <span className="text-[10px] font-medium text-[#1A1A1A]">{row.process}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span className="text-[#999] line-through">{row.before}</span>
                    <span className="text-emerald-600 font-semibold">{row.after}</span>
                  </div>
                </div>
                {/* Progress bar showing improvement */}
                <div className="h-1 rounded-full bg-[#E5E2DB] overflow-hidden">
                  <m.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(to right, #EF4444, #10B981)" }}
                    initial={{ width: "100%" }}
                    animate={{ width: `${100 - row.saving}%` }}
                    transition={{ delay: 0.9 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </m.div>
            ))}
          </div>

          {/* Footer: total saving */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-3 pt-3 border-t border-[#F0EDE8] flex items-center justify-between"
          >
            <span className="text-[10px] text-[#999]">Ahorro estimado</span>
            <span className="text-sm font-bold text-emerald-600">~14 hrs / semana</span>
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
