"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

interface OpenModalButtonProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function OpenModalButton({
  children,
  className,
  id,
}: OpenModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button id={id} className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
