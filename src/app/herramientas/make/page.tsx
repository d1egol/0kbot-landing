import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Make (Integromat) para pymes en Chile — implementación con 0kbot",
  description:
    "Implementamos Make en pymes chilenas: conectamos Shopify, Bsale, Mailchimp, Sheets y más. Automatización visual low-code, puesta a producción en 12 semanas.",
  keywords: [
    "Make Chile",
    "Integromat Chile",
    "Make pymes",
    "automatización Shopify Bsale",
    "implementar Make pyme",
    "consultoría Make Chile",
    "low-code automation Chile",
  ],
  alternates: { canonical: "https://0kbot.com/herramientas/make" },
  openGraph: {
    title: "Make (Integromat) para pymes en Chile — implementación con 0kbot",
    description:
      "Automatización low-code con Make para pymes chilenas. Conexiones listas con Shopify, Bsale, Mailchimp y más.",
    url: "https://0kbot.com/herramientas/make",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Make (Integromat) para pymes en Chile — implementación con 0kbot",
    description:
      "Automatización low-code con Make para pymes chilenas.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://0kbot.com/herramientas" },
    { "@type": "ListItem", position: 3, name: "Make", item: "https://0kbot.com/herramientas/make" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Implementación de Make (Integromat) para pymes en Chile",
  serviceType: "Automatización de procesos",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: "Chile",
  description:
    "Consultoría e implementación de escenarios en Make para pymes chilenas. Integraciones con Shopify, Bsale, Mailchimp, Sheets y más.",
};

const casos = [
  {
    titulo: "Shopify + Bsale + correo",
    desc: "Cada venta en Shopify gatilla en Make la emisión de boleta electrónica en Bsale, envía el detalle al cliente y deja el movimiento en una planilla maestra para control.",
  },
  {
    titulo: "Seguimiento automático de clientes",
    desc: "Cuando un lead entra desde formulario o Meta Ads, Make lo agrega al CRM, envía correo de bienvenida, programa 3 toques de seguimiento y avisa al vendedor si el cliente responde.",
  },
  {
    titulo: "Sincronización entre apps",
    desc: "Make mantiene alineado lo que pasa en Calendly, HubSpot, Mailchimp y Sheets. Si alguien agenda, se crea el deal, se suma a la lista de email y aparece en el dashboard de operaciones.",
  },
  {
    titulo: "Gestión de post-venta",
    desc: "Al cambiar el estado de un pedido en Shopify a &ldquo;entregado&rdquo;, Make espera 5 días y dispara una encuesta de satisfacción. Las respuestas negativas se escalan automáticamente al gerente.",
  },
  {
    titulo: "Consolidación de reportes",
    desc: "Make junta datos de anuncios (Meta, Google), ventas y CRM una vez al día, los deja en Google Sheets y el dashboard queda actualizado sin intervención manual.",
  },
];

const fases = [
  { num: "01", title: "Diagnóstico (sem. 1–2)", desc: "Entendemos qué conecta con qué y dónde hay doble digitación. No todos los procesos necesitan Make: a veces basta con Apps Script o un buen formulario." },
  { num: "02", title: "Diseño (sem. 3–4)", desc: "Priorizamos 2–3 escenarios. Estimamos volumen de operaciones mensuales para elegir el plan correcto y evitar sorpresas en la factura." },
  { num: "03", title: "Implementación (sem. 5–10)", desc: "Construimos escenarios, manejamos errores, documentamos y capacitamos al equipo para que sepan leer el log cuando algo falle." },
  { num: "04", title: "Medición (sem. 11–12)", desc: "Verificamos horas ahorradas, reducción de errores y costo real de operaciones. Si no hay ROI medible, no cobramos el último tramo." },
];

const limitaciones = [
  "El precio escala con el volumen: si procesas miles de operaciones al día, Make puede salir más caro que un n8n self-host.",
  "Para flujos muy custom o con lógica compleja, llega antes al límite que n8n o código propio.",
  "Dependes de la plataforma: si Make cambia precios o discontinua una integración, te ajustas tú.",
  "Los datos pasan por servidores de Make. Para industrias con datos muy sensibles (salud, financiero), conviene revisar política de privacidad.",
];

export default function MakePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Herramientas · Make
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Make (ex Integromat) para pymes chilenas
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Automatización low-code con 1.000+ integraciones listas. Ideal
            cuando necesitas conectar Shopify, Bsale, Mailchimp o Sheets sin
            escribir código.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Qué es Make?
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Make (antes Integromat) es una plataforma low-code para
                automatizar procesos entre aplicaciones. Dibujas el flujo con
                módulos visuales: &ldquo;cuando llegue un pedido en Shopify,
                crea boleta en Bsale y avisa al bodeguero por correo&rdquo;, y
                eso queda corriendo 24/7.
              </p>
              <p>
                El cobro es por <em>operaciones</em> (cada paso ejecutado cuenta
                como una operación). Los planes parten gratis para pruebas y
                suben según volumen. La curva de entrada es más suave que n8n,
                y el catálogo de integraciones es uno de los más grandes del
                mercado: Bsale, HubSpot, Mailchimp, WhatsApp, Google Workspace,
                Meta Ads, Shopify y cientos más.
              </p>
              <p>
                Sirve especialmente bien cuando tu pyme usa 4–6 aplicaciones
                distintas y necesita que hablen entre sí sin depender de que
                alguien copie y pegue información.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Casos */}
      <section className="section-padding surface-warm">
        <div className="container-wide">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Casos de uso en pymes chilenas
            </h2>
            <p className="text-muted-foreground font-body mb-10 max-w-2xl">
              Escenarios reales que implementamos o vemos funcionar en pymes de
              ecommerce, servicios y retail.
            </p>
          </MotionSection>
          <div className="grid md:grid-cols-2 gap-6">
            {casos.map((c, i) => (
              <MotionSection key={c.titulo} delay={i * 0.06}>
                <div className="bg-card border border-border rounded-xl p-6 h-full">
                  <h3 className="font-heading font-bold text-foreground mb-2">
                    {c.titulo}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo lo implementamos */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cómo lo implementamos: método Lean de 12 semanas
            </h2>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Make es rápido de configurar, pero un escenario mal armado se
              transforma en una cuenta cara o en errores silenciosos. El método
              nos evita ambos.
            </p>
            <div className="space-y-4 mb-4">
              {fases.map((f) => (
                <div key={f.num} className="flex gap-4 items-start">
                  <span className="text-2xl font-heading font-bold text-primary/20 flex-shrink-0 w-8">
                    {f.num}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground font-body">{f.title}</p>
                    <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/como-trabajamos"
              className="inline-flex items-center gap-2 text-primary font-medium font-body hover:gap-3 transition-all"
            >
              Ver metodología completa <ArrowRight size={16} />
            </Link>
          </MotionSection>
        </div>
      </section>

      {/* Limitaciones */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Cuándo NO conviene Make
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Ser honestos ahorra tiempo y plata. Estas son las situaciones
              donde recomendamos otra cosa.
            </p>
          </MotionSection>
          <div className="space-y-4">
            {limitaciones.map((l) => (
              <MotionSection key={l}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <XCircle className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-body">{l}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Precio */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precio referencial
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                <strong className="text-foreground">Licencia Make:</strong>{" "}
                plan gratis hasta 1.000 operaciones al mes. Core parte en torno
                a USD 10–20 mensuales (10.000 ops) y Pro sube a USD 30–40
                (10.000 ops con más features). Para pymes con volumen medio,
                el rango habitual va de USD 30 a 100 mensuales.
              </p>
              <p>
                <strong className="text-foreground">Implementación 0kbot:</strong>{" "}
                el proyecto Lean de 12 semanas se cotiza en UF según alcance.
                En proyectos centrados en Make el rango típico va de 60 a 200
                UF, pagadas por tramos y con la última cuota sujeta a ROI
                medible.
              </p>
              <p className="text-sm">
                Antes de cotizar estimamos el volumen de operaciones para
                elegir el plan que te sirve. Nada peor que descubrir al mes 2
                que el plan se queda corto.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground font-body">
                Los escenarios quedan documentados, con owner asignado y guía
                de qué hacer cuando algo falla.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Make es la herramienta correcta para ti?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos revisamos tus procesos y te decimos si conviene Make,
            n8n, Apps Script o simplemente ordenar antes de automatizar.
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
