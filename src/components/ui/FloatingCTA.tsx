"use client";

import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import { trackCTAClick } from "@/lib/analytics";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctaEl = document.getElementById("cta-diagnostico");
    let ctaSectionVisible = false;

    const sectionObserver = ctaEl
      ? new IntersectionObserver(
          ([entry]) => {
            ctaSectionVisible = entry.isIntersecting;
            update();
          },
          { threshold: 0.1 }
        )
      : null;

    if (ctaEl && sectionObserver) sectionObserver.observe(ctaEl);

    function update() {
      setVisible(window.scrollY > 300 && !ctaSectionVisible);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      sectionObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-all duration-300 ease-out ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ width: "90%" }}
        aria-hidden={!visible}
      >
        <button
          onClick={() => { trackCTAClick("floating_cta", "floating"); setIsOpen(true); }}
          aria-label="Agendar diagnóstico gratuito"
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-md font-semibold font-sans text-sm shadow-lg hover:bg-primary/90 transition-colors"
        >
          Agendar diagnóstico gratis →
        </button>
      </div>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
