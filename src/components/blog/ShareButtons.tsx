"use client";

import { useState } from "react";
import { Twitter, Linkedin, Link, Check, MessageCircle } from "lucide-react";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/blog/${slug}`
      : `/blog/${slug}`;

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-[#666] font-medium mr-1">Compartir:</span>

      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        aria-label="Compartir en Twitter/X"
      >
        <Twitter className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Twitter</span>
      </a>

      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0077B5] text-white text-sm hover:bg-[#005885] transition-colors"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">LinkedIn</span>
      </a>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-sm hover:bg-[#1eba55] transition-colors"
        aria-label="Compartir en WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <button
        onClick={handleCopy}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F5F0] border border-[#E5E2DB] text-[#666] text-sm hover:bg-[#E5E2DB] transition-colors"
        aria-label="Copiar enlace"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-600" />
            <span className="hidden sm:inline text-green-600">Copiado</span>
          </>
        ) : (
          <>
            <Link className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Copiar</span>
          </>
        )}
      </button>
    </div>
  );
}
