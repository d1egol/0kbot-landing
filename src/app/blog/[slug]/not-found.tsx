import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function BlogNotFound() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] flex items-center justify-center">
      <div className="text-center p-8">
        <FileQuestion className="w-16 h-16 text-[#1B5FA6]/30 mx-auto mb-6" />
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-3">
          Artículo no encontrado
        </h1>
        <p className="text-[#666] mb-8 max-w-sm mx-auto">
          El artículo que buscas no existe o fue movido.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-[#1B5FA6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#154d8a] transition-colors"
        >
          Ver todos los artículos
        </Link>
      </div>
    </main>
  );
}
