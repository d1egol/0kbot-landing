import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "n8n para pymes en Chile — implementación con 0kbot",
  description:
    "Implementamos n8n en pymes chilenas: workflows que conectan WhatsApp, Sheets, CRM y facturación. Open-source, sin lock-in, desplegado en 12 semanas.",
  keywords: [
    "n8n Chile",
    "n8n pymes",
    "automatización n8n Chile",
    "implementar n8n pyme",
    "n8n self-host Chile",
    "consultoría n8n Chile",
    "workflows n8n WhatsApp",
  ],
  alternates: { canonical: "https://0kbot.com/herramientas/n8n" },
  openGraph: {
    title: "n8n para pymes en Chile — implementación con 0kbot",
    description:
      "Automatización open-source con n8n para pymes chilenas. Sin lock-in, workflows propios, método Lean de 12 semanas.",
    url: "https://0kbot.com/herramientas/n8n",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n para pymes en Chile — implementación con 0kbot",
    description:
      "Automatización open-source con n8n para pymes chilenas. Sin lock-in.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://0kbot.com/herramientas" },
    { "@type": "ListItem", position: 3, name: "n8n", item: "https://0kbot.com/herramientas/n8n" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Implementación de n8n para pymes en Chile",
  serviceType: "Automatización de procesos",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: "Chile",
  description:
    "Consultoría e implementación de workflows en n8n para pymes chilenas. Incluye diagnóstico, despliegue, integraciones y capacitación.",
};

const casos = [
  {
    titulo: "WhatsApp + Google Sheets + Gmail",
    desc: "Cuando entra un mensaje al WhatsApp del negocio, n8n lo registra en una planilla, notifica al vendedor asignado y gatilla un correo de seguimiento a las 48 horas si no hubo respuesta.",
  },
  {
    titulo: "Sincronizar CRM con facturación",
    desc: "Cada vez que un deal pasa a 'ganado' en el CRM, n8n crea la cotización en Bsale, envía el link al cliente y actualiza el estado en Airtable. Sin doble digitación.",
  },
  {
    titulo: "Alertas operativas",
    desc: "Monitorear tickets, pedidos o OT: si algo lleva más de X horas sin avance, llega un mensaje al responsable (email, Slack o WhatsApp) con el link directo.",
  },
  {
    titulo: "Reportes automáticos semanales",
    desc: "n8n junta datos de varios sistemas (ventas, soporte, stock), arma un resumen y lo deja cada lunes a las 8am en el correo del gerente. Sin tocar una planilla.",
  },
  {
    titulo: "Onboarding de clientes",
    desc: "Al firmar contrato, n8n crea carpeta en Drive, invita al cliente, agenda kickoff en Calendly y envía bienvenida con credenciales. 15 minutos menos por cliente.",
  },
];

const fases = [
  { num: "01", title: "Diagnóstico (sem. 1–2)", desc: "Mapeamos procesos y decidimos si n8n es la herramienta correcta o si hay algo más simple. No forzamos la solución." },
  { num: "02", title: "Diseño (sem. 3–4)", desc: "Priorizamos 2–3 workflows con mayor ROI. Dibujamos el flujo, definimos credenciales, accesos e infra (cloud vs self-host)." },
  { num: "03", title: "Implementación (sem. 5–10)", desc: "Construimos los workflows, conectamos APIs (WhatsApp Business, Bsale, Sheets, CRM), probamos con datos reales y capacitamos al equipo." },
  { num: "04", title: "Medición (sem. 11–12)", desc: "Medimos horas ahorradas y errores evitados. Si no hay ROI medible, no cobramos el último tramo." },
];

const limitaciones = [
  "Requiere mantención técnica: alguien tiene que revisar cuando un workflow falla o cuando una API cambia.",
  "Si eliges self-host para ahorrar, estás asumiendo responsabilidad de servidor, respaldos y seguridad.",
  "No es la mejor opción si tu equipo solo tiene 1–2 integraciones simples — Make suele ser más rápido.",
  "La curva de aprendizaje es mayor que Make para quien nunca ha visto workflows.",
];

export default function N8nPage() {
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
            Herramientas · n8n
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            n8n para pymes en Chile: automatización sin lock-in
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Workflows propios, open-source, conectados a WhatsApp, Bsale,
            Sheets y lo que sea que ya uses. Implementación dentro del método
            Lean de 12 semanas.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Qué es n8n?
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                n8n es una plataforma de automatización open-source. Funciona
                parecido a Make o Zapier: conectas apps y defines workflows
                visuales del tipo &ldquo;cuando pase X, haz Y y después Z&rdquo;.
              </p>
              <p>
                La diferencia clave es que n8n puedes usarla en la nube que
                ellos hostean, o instalarla en tu propio servidor (self-host).
                En self-host no pagas por ejecución, los datos quedan en tu
                infraestructura y el workflow es 100% tuyo — no dependes de que
                el proveedor cambie precios o cierre la cuenta.
              </p>
              <p>
                No es magia: sigue siendo una herramienta que alguien tiene que
                configurar y mantener. Pero para pymes con volumen operativo
                medio o alto, o con datos sensibles, suele ser la mejor relación
                control/costo del mercado.
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
              Ejemplos concretos de lo que hemos construido o visto funcionar en
              pymes de servicios, retail e industria.
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
              No partimos instalando n8n el día 1. Primero entendemos el
              proceso, después decidimos herramientas y recién en la fase 3
              tocamos el teclado.
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
              Cuándo NO conviene n8n
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
                <strong className="text-foreground">Licencia n8n:</strong> la
                versión self-host es gratis. El plan cloud oficial parte en
                torno a USD 20 al mes para uso liviano y sube según ejecuciones
                y usuarios activos.
              </p>
              <p>
                <strong className="text-foreground">Infra self-host:</strong>{" "}
                un VPS razonable en Chile o DigitalOcean ronda USD 10–30
                mensuales. Sumas costo de dominio y monitoreo si lo necesitas.
              </p>
              <p>
                <strong className="text-foreground">Implementación 0kbot:</strong>{" "}
                el proyecto Lean de 12 semanas (diagnóstico + diseño +
                implementación + medición) se cotiza en UF según alcance. En
                implementaciones acotadas con n8n el rango típico va de 80 a
                250 UF, pagadas por tramos y con la última cuota sujeta a ROI
                medible.
              </p>
              <p className="text-sm">
                Este rango es referencial y depende del número de workflows,
                integraciones y estado de tus datos. Lo cerramos después del
                diagnóstico, no antes.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground font-body">
                Los workflows quedan documentados y son tuyos. Puedes seguir
                operándolos con tu equipo o con otro proveedor si quieres.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿n8n calza con tu operación?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos revisamos tus procesos y te decimos si conviene n8n,
            Make o algo más liviano. Sin promesas vacías.
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
