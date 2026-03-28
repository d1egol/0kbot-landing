"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Zap, TrendingUp } from "lucide-react";
import OpenModalButton from "@/components/ui/OpenModalButton";

const floatingMetrics = [
  { icon: Clock, label: "Horas ahorradas hoy", value: "3.2 hrs", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
  { icon: Zap, label: "Respuestas automáticas", value: "12", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
  { icon: TrendingUp, label: "Procesos optimizados", value: "4", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
];

const chatMessages = [
  { time: "Sáb 2:47am", text: "¿Tienen disponibilidad para el lunes?", from: "client" },
  { time: "Sáb 2:47am", text: "✅ ¡Hola! Sí tenemos. Te agendo para las 10am. Recibirás confirmación en tu email.", from: "bot" },
  { time: "Sáb 2:48am", text: "Perfecto, muchas gracias 🙌", from: "client" },
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
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1]"
            >
              Ordenamos y automatizamos{" "}
              <span className="text-gradient-accent">la operación de tu empresa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground font-body leading-relaxed max-w-xl"
            >
              Mapeamos cómo opera tu negocio hoy, eliminamos los cuellos de
              botella y automatizamos las tareas repetitivas. En 12 semanas,
              con resultados medibles. Sin código. Sin inversión en software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <OpenModalButton className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-medium font-body text-sm hover:bg-primary/90 transition-colors">
                Descubrir pérdidas ocultas →
              </OpenModalButton>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-primary/40 text-primary rounded-md font-medium font-body text-sm hover:border-primary hover:bg-primary/5 transition-colors"
              >
                Ver cómo lo hacemos ↓
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

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 pt-2 border-t border-muted"
            >
              {[
                { value: "40+", label: "empresas" },
                { value: "12 sem", label: "implementación" },
                { value: "73%", label: "reducción de errores" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-xl text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual — 2 cols */}
          <div className="lg:col-span-2 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Dashboard mockup card */}
              <div className="rounded-2xl bg-white border border-[#E5E2DB] shadow-xl p-5 relative overflow-hidden">
                {/* Card header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F0EDE8]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-[#1A1A1A]">0kbot Assistant</span>
                  </div>
                  <span className="text-xs text-[#999]">Operando 24/7</span>
                </div>

                {/* Chat simulation */}
                <div className="space-y-3 mb-5">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.2 }}
                      className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                    >
                      <div className={`max-w-[80%] rounded-xl px-3 py-2 text-xs ${
                        msg.from === "bot"
                          ? "bg-[#1B5FA6] text-white rounded-tl-none"
                          : "bg-[#F7F5F0] text-[#1A1A1A] border border-[#E5E2DB] rounded-tr-none"
                      }`}>
                        <p>{msg.text}</p>
                        <p className={`text-[10px] mt-0.5 ${msg.from === "bot" ? "text-white/60" : "text-[#999]"}`}>
                          {msg.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#F0EDE8]">
                  {floatingMetrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <motion.div
                        key={m.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className={`rounded-lg p-2 text-center ${m.bg} border ${m.border}`}
                      >
                        <Icon className={`w-3.5 h-3.5 mx-auto mb-1 ${m.color}`} />
                        <div className={`font-bold text-sm ${m.color}`}>{m.value}</div>
                        <div className="text-[9px] text-[#666] leading-tight mt-0.5">{m.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Floating badge */}
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

              {/* Decorative blob */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10 blur-2xl"
                style={{ background: "radial-gradient(circle, #D4A853, transparent)" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
