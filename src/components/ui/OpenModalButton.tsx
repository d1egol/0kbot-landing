"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import { trackCTAClick } from "@/lib/analytics";

interface OpenModalButtonProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onBeforeOpen?: () => void;
}

export default function OpenModalButton({
  children,
  className,
  id,
  onBeforeOpen,
}: OpenModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button id={id} className={className} onClick={() => { trackCTAClick(typeof children === "string" ? children : "modal_open", "button"); onBeforeOpen?.(); setIsOpen(true); }}>
        {children}
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
