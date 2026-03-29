"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import OpenModalButton from "@/components/ui/OpenModalButton";

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
              Automatizamos procesos para pymes en Chile.
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

          {/* Visual — 2 cols */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Tech dashboard card */}
              <div
                className="rounded-2xl overflow-hidden border border-[#1e3a5f] shadow-2xl"
                style={{ background: "linear-gradient(160deg, #0d1f3c 0%, #0a1628 100%)" }}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                    <span className="text-xs font-semibold text-white/80 font-mono">0kbot · Sistema activo</span>
                  </div>
                  <span className="text-[10px] text-white/40 font-mono">v2.4.1</span>
                </div>

                {/* Process flow */}
                <div className="px-4 pt-4 pb-3">
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-3 font-mono">Flujo de optimización</p>
                  <div className="flex items-center gap-1">
                    {[
                      { label: "Diagnóstico", icon: "🔍", active: true },
                      { label: "Análisis", icon: "📊", active: true },
                      { label: "Implementación", icon: "⚡", active: true },
                      { label: "Resultados", icon: "📈", active: false },
                    ].map((step, i) => (
                      <div key={step.label} className="flex items-center gap-1 flex-1">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.15 }}
                          className={`flex-1 rounded-lg p-2 text-center border ${
                            step.active
                              ? "bg-[#06B6D4]/10 border-[#06B6D4]/30 text-[#06B6D4]"
                              : "bg-white/5 border-white/10 text-white/40"
                          }`}
                        >
                          <div className="text-base leading-none mb-1">{step.icon}</div>
                          <div className="text-[9px] font-medium leading-tight">{step.label}</div>
                        </motion.div>
                        {i < 3 && <div className="text-white/20 text-xs flex-shrink-0">›</div>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics grid */}
                <div className="px-4 pb-3 grid grid-cols-2 gap-2">
                  {[
                    { label: "Tiempo ahorrado", value: "38%", trend: "↑" },
                    { label: "Errores operac.", value: "−74%", trend: "↓" },
                    { label: "Proc. digitalizados", value: "12", trend: "✓" },
                    { label: "ROI promedio", value: "3.2×", trend: "↑" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-white/50 font-mono uppercase tracking-wide leading-tight">{m.label}</span>
                        <span className="text-[#06B6D4] text-[10px]">{m.trend}</span>
                      </div>
                      <div className="font-heading font-bold text-lg text-white leading-none">{m.value}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Coverage bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="px-4 py-3 border-t border-white/10 flex items-center justify-between"
                >
                  <span className="text-[10px] text-white/40 font-mono">Cobertura</span>
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-[#06B6D4] font-semibold">● Santiago</span>
                    <span className="text-white/30">—</span>
                    <span className="text-white/60">Chile</span>
                    <span className="text-white/30">—</span>
                    <span className="text-white/40">LATAM</span>
                  </div>
                </motion.div>
              </div>

              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
