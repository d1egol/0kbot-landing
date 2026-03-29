import Link from "next/link";
import { Linkedin, Mail, MapPin, Rss } from "lucide-react";

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
      { label: "Escenarios y soluciones", href: "/casos" },
      { label: "Recursos", href: "/recursos" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "IA para pymes Chile 2026", href: "/blog/ia-para-pymes-2025" },
      { label: "Señales de ineficiencia operativa", href: "/blog/5-senales-operacion-sangrando-plata" },
      { label: "Automatizar WhatsApp en pymes", href: "/blog/automatizacion-whatsapp-pymes" },
      { label: "Herramientas IA para empresas chilenas", href: "/blog/herramientas-ia-chile" },
      { label: "Reducir horas extras con automatización", href: "/blog/reducir-horas-extras-automatizacion" },
      { label: "Por qué tu empresa vive en WhatsApp", href: "/blog/por-que-tu-empresa-vive-en-whatsapp" },
      { label: "Ver todos los artículos", href: "/blog" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Agendar diagnóstico gratis", href: "https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot" },
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

        {/* Newsletter strip */}
        <div className="mt-12 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Rss className="w-5 h-5 text-accent shrink-0" />
            <div>
              <p className="font-semibold text-sm text-primary-foreground">Newsletter de IA para Pymes</p>
              <p className="text-xs text-primary-foreground/60">Novedades de automatización, casos reales y recursos gratis.</p>
            </div>
          </div>
          <Link
            href="/contacto"
            className="shrink-0 px-5 py-2.5 bg-accent text-[#1A1A1A] text-sm font-bold rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Suscribirme
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} 0kbot. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Términos de Servicio
            </Link>
            <a
              href="https://www.linkedin.com/in/diego-lopez-dinamarca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Diego López — 0kbot"
              className="text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
