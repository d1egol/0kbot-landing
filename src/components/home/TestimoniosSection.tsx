"use client";

import { Star, Quote } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";

const testimonios = [
  {
    text: "Antes no teníamos idea del estado real de nuestros proyectos. Hoy vemos todo en un solo lugar y tomamos mejores decisiones.",
    author: "Roberto M.",
    cargo: "Gerente de operaciones",
    company: "Empresa de servicios profesionales",
    initials: "RM",
    color: "bg-blue-100 text-blue-700",
    rating: 5,
  },
  {
    text: "Lo que más valoramos es que no nos vendieron tecnología por vender. Entendieron nuestro problema y nos dieron una solución práctica.",
    author: "Carolina V.",
    cargo: "Directora",
    company: "Centro de salud",
    initials: "CV",
    color: "bg-purple-100 text-purple-700",
    rating: 5,
  },
  {
    text: "Los reportes que antes me tomaban dos días ahora se generan solos. Eso cambió completamente mi trabajo.",
    author: "Andrés P.",
    cargo: "Jefe administrativo",
    company: "Comercio mayorista",
    initials: "AP",
    color: "bg-emerald-100 text-emerald-700",
    rating: 5,
  },
];

export default function TestimoniosSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <MotionSection className="text-center mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Confianza
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Lo que dicen quienes ya trabajaron con nosotros
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Empresas reales, resultados medibles, equipos más tranquilos.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonios.map((t, i) => (
            <MotionSection key={i} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-2xl p-7 relative h-full flex flex-col hover:shadow-card-hover transition-shadow">
                {/* Quote decoration */}
                <Quote className="w-10 h-10 text-accent/15 absolute top-5 right-5" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-[#D4A853] text-[#D4A853]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6 flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${t.color}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {t.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {t.cargo} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
