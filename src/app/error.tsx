"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Route error]", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#F7F5F0]">
      <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-3">
        Algo salió mal
      </h1>
      <p className="text-[#666] max-w-md mb-8 leading-relaxed">
        Ocurrió un error inesperado. Puedes intentar recargar la página o volver
        al inicio.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#1B5FA6] text-white rounded-xl font-semibold text-sm hover:bg-[#154d8a] transition-colors"
        >
          Intentar de nuevo
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-[#E5E2DB] rounded-xl font-semibold text-sm text-[#1A1A1A] hover:border-[#1B5FA6] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
