"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <AnimatedSection key={i} delay={(i % 2 === 0 ? 0 : 100) as 0 | 100}>
            <div className="border border-muted rounded-lg overflow-hidden">
              <button
                id={buttonId}
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
                aria-expanded={open === i}
                aria-controls={panelId}
              >
                <span className="font-display font-semibold text-foreground text-base pr-4">
                  {item.pregunta}
                </span>
                <span className="shrink-0 text-muted-foreground" aria-hidden="true">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {open === i && (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-6 pb-5 pt-1 border-t border-muted"
                >
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {item.respuesta}
                  </p>
                </div>
              )}
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}
