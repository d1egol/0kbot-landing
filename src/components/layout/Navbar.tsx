"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import OpenModalButton from "@/components/ui/OpenModalButton";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Soluciones", href: "/soluciones" },
  { label: "Escenarios", href: "/casos" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-heading font-bold text-xl text-primary hover:text-primary/80 transition-colors tracking-tight"
          aria-label="0kbot — inicio"
        >
          0kBot
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <OpenModalButton className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors">
            Agendar diagnóstico gratis
          </OpenModalButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <OpenModalButton className="mt-3 px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors text-center w-full">
                Agendar diagnóstico gratis
              </OpenModalButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
