interface OkbotLogoProps {
  className?: string;
  /** Height in pixels. Width scales proportionally. Default: 32 */
  height?: number;
}

/**
 * Logo vectorial de 0kbot.
 * Replica el logotipo oficial: texto "0KBo" + ícono robot (reemplaza la "t").
 * Sin fondo — usa el color primario del sitio.
 */
export default function OkbotLogo({ className = "", height = 32 }: OkbotLogoProps) {
  // Viewbox: 260 x 80 — proporciones del logo horizontal
  const width = Math.round((height * 260) / 80);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 260 80"
      width={width}
      height={height}
      aria-label="0kbot"
      role="img"
      className={className}
      fill="none"
    >
      {/* ── Texto "0kbo" ── */}
      <text
        x="0"
        y="66"
        fontFamily="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
        fontWeight="700"
        fontSize="72"
        letterSpacing="-2"
        fill="currentColor"
      >
        0kbo
      </text>

      {/* ── Ícono robot (reemplaza la "t") ── posicionado a la derecha del texto ── */}
      {/* Burbuja de chat (fondo) */}
      <rect x="178" y="12" width="78" height="60" rx="10" ry="10" fill="currentColor" />
      {/* Cola de la burbuja — triángulo pequeño abajo-izquierda */}
      <path d="M178 60 L178 72 L192 72 Z" fill="currentColor" />

      {/* ── Cara del robot (recorte en blanco sobre el azul) ── */}
      {/* Antena: línea vertical */}
      <rect x="215" y="2" width="4" height="14" rx="2" fill="currentColor" />
      {/* Antena: bolita superior */}
      <circle cx="217" cy="2" r="5" fill="currentColor" />

      {/* Cabeza del robot (rect blanco interior) */}
      <rect x="188" y="22" width="58" height="44" rx="8" ry="8" fill="white" />

      {/* Ojo izquierdo */}
      <rect x="194" y="30" width="14" height="11" rx="3" fill="currentColor" />
      {/* Ojo derecho */}
      <rect x="226" y="30" width="14" height="11" rx="3" fill="currentColor" />

      {/* Sonrisa */}
      <path
        d="M197 50 Q217 62 237 50"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
