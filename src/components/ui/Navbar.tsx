"use client";

import { useState, useEffect } from "react";
import OpenModalButton from "./OpenModalButton";

const NAV_LINKS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Casos", href: "#casos" },
  { label: "Sobre mí", href: "#credenciales" },
  { label: "Diagnóstico", href: "#diagnostico" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer resize a desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMenuOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-muted transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-xl text-foreground hover:text-primary transition-colors"
          >
            0kbot
          </a>

          {/* Links — desktop */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground font-sans transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — desktop */}
          <div className="hidden md:block">
            <OpenModalButton className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium font-sans text-sm hover:bg-primary/90 transition-colors">
              Agendar diagnóstico →
            </OpenModalButton>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 text-foreground"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú mobile */}
        {menuOpen && (
          <nav
            className="md:hidden py-3 border-t border-muted"
            aria-label="Navegación mobile"
          >
            <div className="space-y-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground font-sans transition-colors rounded-md hover:bg-muted/40"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 mt-2 border-t border-muted">
              <OpenModalButton
                onBeforeOpen={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-primary text-primary-foreground rounded-md font-medium font-sans text-sm hover:bg-primary/90 transition-colors"
              >
                Agendar diagnóstico →
              </OpenModalButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
