"use client";

import React, { useRef, useState } from "react";
import MotionSection from "./MotionSection";

interface EscenarioData {
  industria: string;
  tamano: string;
  problema: string;
  enfoque: string;
  impactoEsperado: string;
  metricaDestacada?: string;
  metricaLabel?: string;
  accentColor?: string;
  accentBg?: string;
  icon?: React.ReactNode;
}

interface CasosCarouselProps {
  casos: EscenarioData[];
}

function EscenarioCard({ caso }: { caso: EscenarioData }) {
  const accent = caso.accentColor ?? "#1B5FA6";
  const accentBg = caso.accentBg ?? "#EFF6FF";

  return (
    <div className="bg-card border border-muted rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
      {/* Header with icon + industry */}
      <div className="p-5 pb-4 border-b border-muted flex items-center gap-3">
        {caso.icon && (
          <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: accentBg }}>
            {caso.icon}
          </div>
        )}
        <div>
          <p className="text-xs font-sans font-semibold" style={{ color: accent }}>
            {caso.industria}
          </p>
          <p className="text-xs font-sans text-muted-foreground mt-0.5">{caso.tamano}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 space-y-4">
        <div>
          <p className="text-[10px] font-sans font-semibold text-foreground uppercase tracking-wider mb-1.5">
            El problema
          </p>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            {caso.problema}
          </p>
        </div>
        <div>
          <p className="text-[10px] font-sans font-semibold text-foreground uppercase tracking-wider mb-1.5">
            Nuestro enfoque
          </p>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            {caso.enfoque}
          </p>
        </div>
      </div>

      {/* Impacto — métrica destacada + texto */}
      <div className="p-5 pt-4 border-t-2" style={{ borderTopColor: accent }}>
        {caso.metricaDestacada && (
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold font-heading" style={{ color: accent }}>
              {caso.metricaDestacada}
            </span>
            {caso.metricaLabel && (
              <span className="text-xs text-muted-foreground font-sans">{caso.metricaLabel}</span>
            )}
          </div>
        )}
        <p className="text-xs text-muted-foreground font-sans leading-relaxed italic">
          {caso.impactoEsperado}
        </p>
      </div>
    </div>
  );
}

export default function CasosCarousel({ casos }: CasosCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleScroll() {
    const el = scrollRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  }

  function goTo(i: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }

  return (
    <>
      {/* Mobile: carrusel horizontal con scroll snapping */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-none"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {casos.map((caso) => (
            <div
              key={caso.industria}
              className="flex-shrink-0 w-full"
              style={{ scrollSnapAlign: "start" }}
            >
              <EscenarioCard caso={caso} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5" role="tablist">
          {casos.map((caso, i) => (
            <button
              key={caso.industria}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Ver escenario ${i + 1}: ${caso.industria}`}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === activeIndex ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid de 3 columnas */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {casos.map((caso, i) => (
          <MotionSection
            key={caso.industria}
            delay={(i % 3) * 0.1}
          >
            <EscenarioCard caso={caso} />
          </MotionSection>
        ))}
      </div>
    </>
  );
}
