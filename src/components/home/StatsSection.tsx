"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, TrendingDown, Zap, Building2 } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 40,
    suffix: "+",
    label: "empresas transformadas",
    description: "Pymes en Chile y Latinoamérica",
    color: "text-[#1B5FA6]",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Clock,
    value: 15,
    suffix: " hrs",
    label: "ahorradas por semana",
    description: "Promedio por empresa",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: TrendingDown,
    value: 73,
    suffix: "%",
    label: "reducción de errores",
    description: "En procesos operativos clave",
    color: "text-[#06B6D4]",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
  {
    icon: Zap,
    value: 12,
    suffix: " sem",
    label: "tiempo de implementación",
    description: "De diagnóstico a resultados",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
];

function Counter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white border-y border-[#E5E2DB]">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-[#1B5FA6] uppercase tracking-wider">
            Resultados reales
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-3">
            Números que hablan solos
          </h2>
          <p className="text-[#666] mt-3 max-w-lg mx-auto">
            Basados en proyectos reales implementados con empresas
            latinoamericanas de 15 a 150 personas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-6 text-center ${stat.bg} ${stat.border}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-white shadow-sm`}>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`font-heading text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                  <Counter
                    target={stat.value}
                    suffix={stat.suffix}
                    isVisible={isInView}
                  />
                </div>
                <div className="font-semibold text-[#1A1A1A] text-sm mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#666]">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
