import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada — 0kbot",
  description: "La página que buscas no existe.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-[#F7F5F0]">
      <p className="text-[#1B5FA6] font-mono text-sm font-medium uppercase tracking-widest mb-4">
        404
      </p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
        Página no encontrada
      </h1>
      <p className="text-[#666] max-w-md mb-10 leading-relaxed">
        La URL que buscas no existe o fue movida. Prueba volviendo al inicio o
        revisando los recursos disponibles.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="px-6 py-3 bg-[#1B5FA6] text-white rounded-xl font-semibold text-sm hover:bg-[#154d8a] transition-colors"
        >
          Volver al inicio
        </Link>
        <Link
          href="/blog"
          className="px-6 py-3 border border-[#E5E2DB] rounded-xl font-semibold text-sm text-[#1A1A1A] hover:border-[#1B5FA6] transition-colors"
        >
          Ver el blog
        </Link>
      </div>
    </div>
  );
}
