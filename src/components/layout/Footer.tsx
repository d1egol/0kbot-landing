import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Diagnóstico de procesos", href: "/servicios#diagnostico" },
      { label: "Estandarización", href: "/servicios#estandarizacion" },
      { label: "Automatización", href: "/servicios#automatizacion" },
      { label: "Tableros de datos", href: "/servicios#tableros" },
      { label: "Gestión comercial", href: "/servicios#gestion-comercial" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre nosotros", href: "/nosotros" },
      { label: "Cómo trabajamos", href: "/como-trabajamos" },
      { label: "Casos y resultados", href: "/casos" },
      { label: "Recursos", href: "/recursos" },
      { label: "Calculadora ROI", href: "/calculadora-roi" },
      { label: "Comparativas", href: "/comparar" },
      { label: "Herramientas", href: "/herramientas" },
      { label: "Por industria", href: "/industria" },
    ],
  },
  {
    title: "Guías",
    links: [
      { label: "Mejora de procesos pymes", href: "/mejora-de-procesos" },
      { label: "IA para pymes Chile", href: "/ia-para-pymes" },
      { label: "Automatización de procesos", href: "/automatizacion-procesos-chile" },
      { label: "Transformación digital pymes", href: "/transformacion-digital-pymes" },
    ],
  },
  {
    title: "Blog",
    links: [
      { label: "IA para pymes Chile 2026", href: "/blog/ia-para-pymes-chile" },
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
      { label: "Agendar diagnóstico gratis", href: CALENDLY_URL },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
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
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xs hover:text-primary-foreground transition-colors"
              >
                {CONTACT_EMAIL}
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

        <div className="mt-10 p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 flex flex-col sm:flex-row items-center gap-3 justify-between">
          <p className="text-sm text-primary-foreground/70">
            ¿Tienes una pregunta?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary-foreground hover:underline font-medium">
              {CONTACT_EMAIL}
            </a>{" "}
            — Respondemos en 24 hrs
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-accent text-[#1A1A1A] text-sm font-bold rounded-lg hover:bg-accent/90 transition-colors whitespace-nowrap"
          >
            Agendar diagnóstico gratis
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
