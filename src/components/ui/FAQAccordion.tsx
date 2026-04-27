"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import MotionSection from "./MotionSection";

interface FAQItem {
  pregunta: string;
  respuesta: string;
  cta?: { label: string; href: string };
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <MotionSection key={i} delay={i * 0.05}>
          <div className="border border-muted rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-display font-semibold text-foreground text-base pr-4">
                {item.pregunta}
              </span>
              <span className="shrink-0 text-muted-foreground">
                {open === i ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 pt-1 border-t border-muted">
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {item.respuesta}
                </p>
                {item.cta && (
                  <Link
                    href={item.cta.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    {item.cta.label}
                    <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            )}
          </div>
        </MotionSection>
      ))}
    </div>
  );
}
