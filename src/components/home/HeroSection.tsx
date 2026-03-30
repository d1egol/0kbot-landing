"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import OpenModalButton from "@/components/ui/OpenModalButton";

const diagnosisRows = [
  {
    process: "Coordinación de pedidos",
    before: "12 h/sem",
    after: "2 h/sem",
    saving: 83,
    beforeColor: "#EF4444",
    afterColor: "#10B981",
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
    beforeColor: "#F59E0B",
    afterColor: "#10B981",
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
    beforeColor: "#EF4444",
    afterColor: "#10B981",
    icon: (
      <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5 shrink-0">
        <rect x="2" y="1.5" width="12" height="13" rx="1.5" stroke="#1B5FA6" strokeWidth="1.4"/>
        <path d="M5 6h6M5 9h4M5 12h3" stroke="#1B5FA6" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const bullets = [
  "Detectamos cuellos de botella con números reales",
  "Eliminamos trabajo manual innecesario",
  "Implementamos soluciones simples que sí usa tu equipo",
];

export default function HeroSection() {
  return (
    <section className="bg-background pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#1B5FA6 1px, transparent 1px), linear-gradient(to right, #1B5FA6 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container-content relative">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12 items-center">
          {/* Text — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/8 px-3 py-1.5 rounded-full font-body border border-primary/15"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-scan" />
              Consultora de procesos · Santiago, Chile
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-[1.1]"
            >
              Mejora de procesos para pymes en Chile.
              <br />
              <span className="text-gradient-accent">No vendemos IA. Vendemos lunes tranquilos.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl"
            >
              Detectamos dónde se va tu tiempo y tu plata, y lo arreglamos con
              cambios concretos: automatización, estandarización y mejora de
              procesos. Sin teoría. Sin software innecesario.
            </motion.p>

            {/* Bullets */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-2"
            >
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-foreground font-body">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <OpenModalButton className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-medium font-body text-sm hover:bg-primary/90 transition-colors">
                Agendar diagnóstico gratis →
              </OpenModalButton>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-primary/40 text-primary rounded-md font-medium font-body text-sm hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Ver cómo trabajamos ↓
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs text-muted-foreground font-body"
            >
              Diagnóstico gratuito · Sin compromiso · Respuesta en 24 hrs
            </motion.p>
          </div>

          {/* Visual — 2 cols: Nuestro método */}
          <div className="lg:col-span-2 relative">
            <motion.div
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
                    {/* Scanner pulse dot */}
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
                    <motion.div
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
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(to right, #EF4444, #10B981)" }}
                          initial={{ width: "100%" }}
                          animate={{ width: `${100 - row.saving}%` }}
                          transition={{ delay: 0.9 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer: total saving */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-3 pt-3 border-t border-[#F0EDE8] flex items-center justify-between"
                >
                  <span className="text-[10px] text-[#999]">Ahorro estimado</span>
                  <span className="text-sm font-bold text-emerald-600">~14 hrs / semana</span>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -bottom-4 -left-4 bg-white border border-[#E5E2DB] shadow-lg rounded-xl px-3 py-2 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-[#1A1A1A]">Sin código</div>
                  <div className="text-[10px] text-[#999]">Listo en 12 semanas</div>
                </div>
              </motion.div>

              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ background: "radial-gradient(circle, #1B5FA6, transparent)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
