"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingDown, Clock, FileBarChart } from "lucide-react";
import OpenModalButton from "@/components/ui/OpenModalButton";

const diagnosisRows = [
  {
    process: "Coordinación de pedidos",
    before: "12 hrs/semana manual",
    after: "2 hrs/semana",
    icon: Clock,
  },
  {
    process: "Visitas fallidas",
    before: "33% requieren segunda",
    after: "12%",
    icon: TrendingDown,
  },
  {
    process: "Reporte gerencial",
    before: "4 hrs armarlo",
    after: "Automático",
    icon: FileBarChart,
  },
];

const bullets = [
  "Detectamos cuellos de botella con números reales",
  "Eliminamos trabajo manual innecesario",
  "Implementamos soluciones simples que sí usa tu equipo",
];

const credentials = [
  "Ing. Industrial UDD",
  "MSc Data Science PUC",
  "Lean Six Sigma",
  "8+ años en operaciones",
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

            {/* Credentials bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-wrap gap-2"
            >
              {credentials.map((cred) => (
                <span
                  key={cred}
                  className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-body border border-border"
                >
                  {cred}
                </span>
              ))}
            </motion.div>

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

          {/* Visual — 2 cols */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Diagnosis results card */}
              <div className="rounded-2xl bg-white border border-[#E5E2DB] shadow-xl p-5 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F0EDE8]">
                  <span className="text-xs font-semibold text-[#1A1A1A]">Diagnóstico típico</span>
                  <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    Resultados en 12 semanas
                  </span>
                </div>

                {/* Header row */}
                <div className="grid grid-cols-3 gap-2 mb-2 px-1">
                  <span className="text-[10px] font-semibold text-[#999] uppercase tracking-wider">Proceso</span>
                  <span className="text-[10px] font-semibold text-[#999] uppercase tracking-wider">Hoy</span>
                  <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">Con 0kbot</span>
                </div>

                <div className="space-y-2.5">
                  {diagnosisRows.map((row, i) => {
                    const Icon = row.icon;
                    return (
                      <motion.div
                        key={row.process}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                        className="grid grid-cols-3 gap-2 items-center rounded-lg bg-[#F7F5F0] px-2.5 py-2"
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <Icon className="w-3 h-3 text-[#1B5FA6] shrink-0" />
                          <span className="text-[10px] font-medium text-[#1A1A1A] leading-tight truncate">
                            {row.process}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#999] leading-tight">{row.before}</span>
                        <span className="text-[10px] font-semibold text-emerald-600 leading-tight">{row.after}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="mt-3 text-[9px] text-[#AAA] text-center leading-tight"
                >
                  Resultados típicos basados en benchmarks de industria
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
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
