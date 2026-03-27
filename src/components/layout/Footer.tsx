import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Diagnóstico de procesos", href: "/servicios" },
      { label: "Estandarización", href: "/servicios" },
      { label: "Automatización", href: "/servicios" },
      { label: "Tableros de datos", href: "/servicios" },
      { label: "Gestión comercial", href: "/servicios" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "/nosotros" },
      { label: "Cómo trabajamos", href: "/como-trabajamos" },
      { label: "Casos y resultados", href: "/casos" },
      { label: "Recursos", href: "/recursos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Solicitar diagnóstico", href: "/contacto" },
      { label: "hola@0kbot.com", href: "mailto:hola@0kbot.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">0kbot</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs mb-5">
              Consultora de mejora de procesos para pymes en Chile. Lean, sin
              tecnología innecesaria, con resultados en 12 semanas.
            </p>
            <div className="flex items-center gap-3 text-primary-foreground/50">
              <MapPin size={14} />
              <span className="text-xs">Santiago, Chile</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/50 mt-2">
              <Mail size={14} />
              <a
                href="mailto:hola@0kbot.com"
                className="text-xs hover:text-primary-foreground transition-colors"
              >
                hola@0kbot.com
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} 0kbot. Todos los derechos reservados.
          </p>
          <a
            href="https://www.linkedin.com/company/0kbot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn 0kbot"
            className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
