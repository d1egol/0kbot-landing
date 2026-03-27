import { Link } from "react-router-dom";

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
      { label: "Agendar reunión", href: "/contacto" },
      { label: "contacto@0kbot.com", href: "mailto:contacto@0kbot.com" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">0kbot</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Consultora de digitalización de procesos para pymes en Chile. Ayudamos a ordenar, automatizar y dar visibilidad a tu operación.
            </p>
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
                      to={link.href}
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

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} 0kbot. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Digitalización práctica para pymes en Chile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
