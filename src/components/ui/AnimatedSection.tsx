"use client";

import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: 0 | 100 | 200 | 300;
  className?: string;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = {
    0: "delay-0",
    100: "delay-100",
    200: "delay-200",
    300: "delay-300",
  }[delay];

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
