export default function Footer() {
  return (
    <footer className="bg-background border-t border-muted py-10">
      <div className="container-content">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <span className="font-display font-bold text-xl text-foreground">
            0kbot
          </span>

          {/* Info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-muted-foreground font-sans">
            <span>Santiago, Chile</span>
            <span className="hidden sm:inline text-muted">·</span>
            <a
              href="mailto:hola@0kbot.com"
              className="hover:text-primary transition-colors"
            >
              hola@0kbot.com
            </a>
          </div>

          {/* LinkedIn + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/0kbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn de 0kbot"
            >
              {/* LinkedIn icon SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <p className="text-xs text-muted-foreground font-sans">
              © 2026 0kbot
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
