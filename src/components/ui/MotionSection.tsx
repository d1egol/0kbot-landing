"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

/**
 * Scroll-triggered fade-in animation wrapper.
 *
 * SSR-safe: content renders at full opacity in the server HTML so crawlers
 * (Google, AI bots) always see it. Animations are applied client-side only
 * via IntersectionObserver, and only for elements below the viewport at
 * hydration time — no flash for above-fold content.
 *
 * Respects `prefers-reduced-motion: reduce`.
 */
export default function MotionSection({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: MotionSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Skip animation for elements already visible — avoids flash after SSR hydration
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60) return;

    // Apply initial hidden state (client-only — SSR HTML stays fully visible)
    el.style.opacity = "0";
    el.style.transform =
      direction === "up"
        ? "translateY(24px)"
        : direction === "left"
        ? "translateX(-20px)"
        : "none";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;
          el.style.opacity = "1";
          el.style.transform = "none";
          observer.unobserve(el);
        }
      },
      { rootMargin: "-60px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
