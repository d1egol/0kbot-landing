"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import OpenModalButton from "@/components/ui/OpenModalButton";
import { trackCTAClick, trackMobileMenuOpen } from "@/lib/analytics";

const navItems = [
  { label: "Problemas", href: "/#problemas" },
  { label: "Método", href: "/#metodo" },
  { label: "Casos", href: "/#casos" },
  { label: "Blog", href: "/blog" },
];

function isLinkActive(pathname: string, href: string): boolean {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

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

  const toggleMobile = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (next) trackMobileMenuOpen();
      return next;
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border transition-shadow duration-200 ${
        scrolled ? "shadow-[0_2px_12px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">
        <Link
          href="/"
          aria-label="0kbot — inicio"
          onClick={() => trackCTAClick("logo", "navbar")}
          className="group inline-flex items-center rounded-md transition-opacity hover:opacity-90"
        >
          <Image
            src="/brand/0kbot-logo.svg"
            alt="0kbot"
            width={154}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = isLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
                  active
                    ? "text-primary bg-primary/8 font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <OpenModalButton
            location="navbar_desktop"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-sm"
          >
            Diagnóstico gratis
          </OpenModalButton>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-foreground rounded-md hover:bg-muted/50 transition-colors"
          onClick={toggleMobile}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {mobileOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="container-wide py-5 flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = isLinkActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                        active
                          ? "bg-primary/8 text-primary font-semibold"
                          : "bg-muted/40 text-foreground hover:bg-muted/70"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className="text-muted-foreground">→</span>
                    </Link>
                  );
                })}
                <OpenModalButton
                  location="navbar_mobile"
                  className="mt-2 px-5 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:bg-primary/90 transition-colors text-center w-full shadow-sm"
                >
                  Diagnóstico gratis
                </OpenModalButton>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </nav>
  );
}
