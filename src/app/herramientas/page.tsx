import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Workflow, Layers, Database, Mail } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Herramientas que implementamos para pymes chilenas | 0kbot",
  description:
    "n8n, Make, Airtable y Google Workspace: las herramientas que usamos para automatizar y ordenar pymes en Chile. No vendemos licencias, las implementamos como parte del proyecto Lean.",
  keywords: [
    "herramientas automatización pymes Chile",
    "implementación n8n Chile",
    "implementación Make Integromat Chile",
    "Airtable pymes Chile",
    "Google Workspace pymes Chile",
    "consultoría herramientas automatización",
    "stack tecnológico pyme",
  ],
  alternates: { canonical: "https://0kbot.com/herramientas" },
  openGraph: {
    title: "Herramientas que implementamos para pymes chilenas | 0kbot",
    description:
      "n8n, Make, Airtable y Google Workspace: herramientas probadas en pymes chilenas. Implementadas dentro del método Lean de 12 semanas.",
    url: "https://0kbot.com/herramientas",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herramientas que implementamos para pymes chilenas | 0kbot",
    description:
      "n8n, Make, Airtable y Google Workspace: herramientas probadas en pymes chilenas.",
  },
};

const tools = [
  {
    slug: "n8n",
    icon: Workflow,
    title: "n8n",
    tagline: "Automatización open-source, sin lock-in.",
    desc: "Workflows visuales que conectan WhatsApp, Sheets, CRMs y sistemas de facturación. Self-host o cloud.",
  },
  {
    slug: "make",
    icon: Layers,
    title: "Make (ex Integromat)",
    tagline: "Low-code con 1.000+ integraciones listas.",
    desc: "Conecta Shopify, Bsale, Mailchimp y cientos más. Ideal cuando necesitas partir rápido con integraciones comunes.",
  },
  {
    slug: "airtable",
    icon: Database,
    title: "Airtable",
    tagline: "Base de datos que se ve como planilla.",
    desc: "Pipeline comercial, inventario, gestión de proyectos. El equipo operativo lo aprende en días, no meses.",
  },
  {
    slug: "google-workspace",
    icon: Mail,
    title: "Google Workspace",
    tagline: "Lo que ya tienes, bien usado.",
    desc: "Gmail, Drive, Sheets y Apps Script. Formularios de captura, dashboards livianos y automatizaciones básicas sin pagar nada extra.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://0kbot.com/herramientas" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Herramientas implementadas por 0kbot",
  itemListElement: tools.map((t, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: t.title,
    url: `https://0kbot.com/herramientas/${t.slug}`,
  })),
};

export default function HerramientasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Stack · 0kbot
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Herramientas que implementamos para pymes chilenas
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            No vendemos software. Elegimos la herramienta que mejor calce con el
            proceso y la dejamos funcionando como parte del proyecto Lean de 12
            semanas. Lo que ves acá es lo que usamos en terreno.
          </p>
        </div>
      </section>

      {/* Filosofía */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo elegimos la herramienta
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                No somos partner exclusivo de ninguna plataforma. La herramienta
                sale del diagnóstico: primero entendemos el proceso, la gente y
                los sistemas actuales (Bsale, Previred, Transbank, WhatsApp,
                ERPs locales), y recién ahí decidimos qué conviene.
              </p>
              <p>
                En la mayoría de los proyectos terminamos usando alguna
                combinación de las 4 herramientas de abajo. Son las que han
                probado funcionar en pymes chilenas de 10 a 200 personas, con
                presupuestos acotados y equipos que no son técnicos.
              </p>
              <p>
                Cada ficha explica qué es la herramienta, casos reales, cómo la
                implementamos dentro del método Lean, cuándo <em>no</em> conviene
                y precio referencial honesto.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding surface-warm">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((t, i) => (
              <MotionSection key={t.slug} delay={i * 0.08}>
                <Link
                  href={`/herramientas/${t.slug}`}
                  className="group block bg-card border border-border rounded-xl p-6 h-full hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                    <t.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {t.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary font-body mb-3">
                    {t.tagline}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                    {t.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary font-body group-hover:gap-3 transition-all">
                    Ver ficha completa <ArrowRight size={14} />
                  </span>
                </Link>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿No sabes qué herramienta te sirve?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Normal. La herramienta correcta depende del proceso. En un
            diagnóstico de 30 minutos lo aclaramos.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico gratuito <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
