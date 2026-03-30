"use client";

import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  Automatización: "bg-blue-100 text-blue-800 border-blue-200",
  "IA para Pymes": "bg-purple-100 text-purple-800 border-purple-200",
  "Casos de Uso": "bg-green-100 text-green-800 border-green-200",
  "Mejora de Procesos": "bg-orange-100 text-orange-800 border-orange-200",
  Tutoriales: "bg-teal-100 text-teal-800 border-teal-200",
  Todos: "bg-gray-100 text-gray-800 border-gray-200",
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
