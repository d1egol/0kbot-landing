"use client";

import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  Automatización: "bg-primary/10 text-primary border-primary/20",
  "IA para Pymes": "bg-primary/10 text-primary border-primary/20",
  "Mejora de Procesos": "bg-primary/10 text-primary border-primary/20",
  "Casos y Resultados": "bg-primary/10 text-primary border-primary/20",
  Metodología: "bg-muted text-muted-foreground border-border",
  "AI Research": "bg-muted text-muted-foreground border-border",
  Todos: "bg-muted text-muted-foreground border-border",
};

interface CategoryBadgeProps {
  category: string;
  className?: string;
  size?: "sm" | "md";
}

export function CategoryBadge({
  category,
  className,
  size = "md",
}: CategoryBadgeProps) {
  const colors =
    CATEGORY_COLORS[category] || "bg-gray-100 text-gray-800 border-gray-200";

  return (
    <span
      className={cn(
        "inline-flex items-center border rounded-full font-medium",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-xs",
        colors,
        className
      )}
    >
      {category}
    </span>
  );
}
