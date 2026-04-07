"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { trackCTAClick } from "@/lib/analytics";

interface OpenModalButtonProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onBeforeOpen?: () => void;
  /**
   * Ubicación del CTA en la página (e.g. "hero", "cta_final"). Se envía a GA4
   * como parámetro `location` de `cta_click` para poder distinguir abandonos
   * y conversiones por sección en el A/B test de CTAs de homepage.
   */
  location?: string;
}

export default function OpenModalButton({
  children,
  className,
  id,
  onBeforeOpen,
  location = "button",
}: OpenModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button id={id} className={className} onClick={() => { trackCTAClick(typeof children === "string" ? children : "modal_open", location); onBeforeOpen?.(); setIsOpen(true); }}>
        {children}
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
