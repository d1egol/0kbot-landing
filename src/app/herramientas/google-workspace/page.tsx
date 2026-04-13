import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Google Workspace para pymes en Chile — implementación con 0kbot",
  description:
    "Sacarle el jugo a Gmail, Drive, Sheets y Apps Script. Formularios de captura, dashboards livianos y automatizaciones para pymes chilenas sin pagar extra.",
  keywords: [
    "Google Workspace Chile",
    "Google Sheets pymes",
    "Apps Script Chile",
    "Google Forms captura leads",
    "automatización Google Workspace",
    "consultoría Google Workspace pyme",
    "dashboards Google Sheets",
  ],
  alternates: { canonical: "https://0kbot.com/herramientas/google-workspace" },
  openGraph: {
    title: "Google Workspace para pymes en Chile — implementación con 0kbot",
    description:
      "Formularios, dashboards y automatizaciones con las herramientas que tu pyme ya tiene. Método Lean de 12 semanas.",
    url: "https://0kbot.com/herramientas/google-workspace",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Workspace para pymes en Chile — implementación con 0kbot",
    description:
      "Formularios, dashboards y automatizaciones con Google Workspace.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    { "@type": "ListItem", position: 2, name: "Herramientas", item: "https://0kbot.com/herramientas" },
    { "@type": "ListItem", position: 3, name: "Google Workspace", item: "https://0kbot.com/herramientas/google-workspace" },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Implementación de Google Workspace para pymes en Chile",
  serviceType: "Productividad y automatización liviana",
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
  areaServed: "Chile",
  description:
    "Diseño de procesos con Gmail, Drive, Sheets, Forms y Apps Script para pymes chilenas.",
};

const casos = [
  {
    titulo: "Formulario de captura de leads",
    desc: "Google Forms público, resultados en Sheets, Apps Script envía correo automático al cliente y notificación interna. 0 costo adicional, 1 hora de configuración bien hecha.",
  },
  {
    titulo: "Dashboard operativo básico",
    desc: "Sheets consolida ventas, tickets o producción del mes. Fórmulas + Looker Studio para la gráfica. Suficiente para reunión semanal sin pagar BI.",
  },
  {
    titulo: "Automatización liviana con Apps Script",
    desc: "Scripts que envían recordatorios, generan documentos desde plantillas, limpian datos o mueven archivos entre carpetas. Útil cuando n8n o Make es demasiado.",
  },
  {
    titulo: "Plantillas de cotización",
    desc: "Formulario interno → Apps Script genera Doc desde plantilla → PDF firmado → correo al cliente con link de Calendly. Vendedores dejan de pelear con Word.",
  },
  {
    titulo: "Gobierno de archivos",
    desc: "Estructura clara de Drive: carpetas por proyecto, permisos por área, convención de nombres. Suena simple, pero ordenar Drive ahorra horas cada semana.",
  },
];

const fases = [
  { num: "01", title: "Diagnóstico (sem. 1–2)", desc: "Revisamos qué estás usando de Workspace y qué no. La mayoría de las pymes usa el 20% de lo que paga." },
  { num: "02", title: "Diseño (sem. 3–4)", desc: "Priorizamos 2–3 flujos donde Sheets, Forms o Apps Script resuelven sin sumar herramientas. No siempre hay que comprar algo nuevo." },
  { num: "03", title: "Implementación (sem. 5–10)", desc: "Construimos formularios, dashboards y scripts. Dejamos documentación corta para que el equipo entienda cómo está armado." },
  { num: "04", title: "Medición (sem. 11–12)", desc: "Revisamos adopción, errores y tiempo ahorrado. Si no hay ROI medible, no cobramos el último tramo." },
];

const limitaciones = [
  "Apps Script tiene cuotas: si necesitas correr miles de ejecuciones diarias o procesos muy largos, te vas a topar con límites.",
  "Sheets se cae en performance con más de 50.000–100.000 filas con fórmulas activas.",
  "No escala a flujos con muchas integraciones externas: ahí conviene Make o n8n.",
  "Para procesos donde varias personas editan el mismo dato sin reglas claras, Sheets termina siendo una planilla compartida con errores.",
];

export default function GoogleWorkspacePage() {
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
            Herramientas · Google Workspace
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Google Workspace: sacarle el jugo a lo que ya pagas
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Gmail, Drive, Sheets, Forms y Apps Script bien usados resuelven el
            80% de los problemas operativos de una pyme chilena — sin sumar
            herramientas nuevas.
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Qué es Google Workspace?
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Google Workspace (antes G Suite) es el paquete corporativo de
                Google: Gmail con dominio propio, Drive, Docs, Sheets, Slides,
                Forms, Calendar, Meet y Apps Script. La mayoría de las pymes
                chilenas ya lo tienen contratado y lo usan solo para correo y
                carpetas compartidas.
              </p>
              <p>
                La diferencia entre pagar y aprovechar está en Sheets bien
                modelado, Forms usados como captura estructurada, permisos
                ordenados en Drive y — sobre todo — Apps Script, que es un
                lenguaje ligero que automatiza dentro del ecosistema sin pagar
                herramientas externas.
              </p>
              <p>
                Para pymes en etapa inicial o con procesos acotados, Workspace
                suele ser lo primero que conviene ordenar antes de sumar
                Airtable, Make o n8n. Muchas veces con 2–3 flujos bien
                implementados ya no se necesita más stack.
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
              Lo que más repetimos en terreno. Nada sofisticado, pero ordena
              bien.
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
              Workspace es trampa: parece fácil y por eso muchas pymes terminan
              con 50 planillas y 0 procesos. El método pone estructura antes de
              sumar complejidad.
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
              Cuándo NO conviene quedarse solo con Workspace
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Google Workspace resuelve mucho, pero no todo. Estas son las
              señales de que necesitas dar el siguiente paso.
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
                <strong className="text-foreground">Licencia Google Workspace:</strong>{" "}
                Business Starter parte en torno a USD 7 por usuario al mes;
                Business Standard ronda USD 14. La mayoría de las pymes
                chilenas ya lo pagan — lo que falta es usarlo mejor.
              </p>
              <p>
                <strong className="text-foreground">Apps Script y Forms:</strong>{" "}
                incluidos sin costo extra dentro de tu licencia.
              </p>
              <p>
                <strong className="text-foreground">Implementación 0kbot:</strong>{" "}
                proyectos centrados en Workspace son más acotados que los de
                stack completo. Rango típico de 40 a 120 UF según cantidad de
                flujos, dashboards y scripts, con el último tramo sujeto a ROI
                medible.
              </p>
              <p className="text-sm">
                Es común que este sea el primer proyecto con nosotros: ordenar
                lo que ya tienes antes de invertir en herramientas nuevas.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground font-body">
                Todo queda en tu dominio y tus cuentas. Nada depende de que
                nosotros sigamos en el proyecto.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Estás exprimiendo Google Workspace?
          </h2>
          <p className="text-white/75 font-body mb-8 max-w-xl mx-auto">
            En 30 minutos vemos qué estás usando, qué te falta y si conviene
            ordenar Workspace antes de sumar nuevas herramientas.
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
