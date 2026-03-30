import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import {
  Shuffle,
  Clock,
  EyeOff,
  FileText,
  BarChart3,
  UserX,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluciones para problemas operativos en pymes Chile",
  description:
    "Identifica tu desafío operativo y conoce cómo lo resolvemos: desorden, pérdida de tiempo, falta de visibilidad de datos, registros dispersos y más. Consultoría de procesos para pymes en Chile.",
  keywords: [
    "problemas operativos pymes Chile",
    "soluciones mejora de procesos",
    "desorden operativo empresa Chile",
    "pérdida de tiempo procesos pymes",
    "visibilidad operaciones pyme",
    "automatización tareas manuales Chile",
  ],
  alternates: { canonical: "https://0kbot.com/soluciones" },
};

const soluciones = [
  {
    icon: Shuffle,
    title: "Desorden operativo",
    problema:
      "Cada persona trabaja distinto, no hay un flujo claro y las cosas se pierden.",
    solucion:
      "Levantamos los procesos clave, definimos un flujo estándar y lo implementamos con herramientas que lo sostengan.",
    dolor: "Errores y reprocesos frecuentes",
    blogHref: "/blog/5-senales-operacion-sangrando-plata",
    blogLabel: "Ver señales de ineficiencia",
  },
  {
    icon: Clock,
    title: "Pérdida de tiempo en tareas manuales",
    problema:
      "Horas invertidas en copiar datos, armar informes y coordinar por WhatsApp.",
    solucion:
      "Automatizamos tareas repetitivas, centralizamos la comunicación y eliminamos el doble registro.",
    dolor: "Demasiado tiempo en tareas administrativas",
    blogHref: "/blog/reducir-horas-extras-automatizacion",
    blogLabel: "Cómo eliminar horas extras",
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    problema:
      "No sabes el estado real de tu operación sin preguntar uno por uno.",
    solucion:
      "Creamos tableros con indicadores clave que se actualizan automáticamente.",
    dolor: "Información desactualizada para tomar decisiones",
    blogHref: "/blog/ia-para-pymes-lo-que-realmente-sirve",
    blogLabel: "IA para visibilidad de datos",
  },
  {
    icon: FileText,
    title: "Registro manual disperso",
    problema:
      "Información en planillas, correos, cuadernos y la cabeza de cada uno.",
    solucion:
      "Estandarizamos los registros con formularios y bases de datos centralizadas.",
    dolor: "Dificultad para coordinar equipos o turnos",
    blogHref: "/blog/por-que-tu-empresa-vive-en-whatsapp",
    blogLabel: "Por qué tu empresa vive en WhatsApp",
  },
  {
    icon: BarChart3,
    title: "Reportes lentos y poco confiables",
    problema:
      "Armar un informe toma días y siempre hay datos que no cuadran.",
    solucion:
      "Automatizamos reportes que se generan solos con datos consistentes y actualizados.",
    dolor: "Costos que suben sin saber exactamente por qué",
    blogHref: "/blog/ia-para-pymes-lo-que-realmente-sirve",
    blogLabel: "IA que realmente funciona en pymes",
  },
  {
    icon: UserX,
    title: "Seguimiento comercial débil",
    problema:
      "Clientes que se pierden, cotizaciones sin seguimiento y oportunidades olvidadas.",
    solucion:
      "Organizamos el pipeline de ventas con seguimiento estructurado y alertas automáticas.",
    dolor: "Clientes que reclaman por fallas en el servicio",
    blogHref: "/blog/automatizacion-whatsapp-pymes",
    blogLabel: "Automatizar seguimiento en WhatsApp",
  },
];

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Soluciones por necesidad
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            ¿Cuál es tu principal desafío operativo?
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Identifica tu problema y conoce cómo lo resolvemos con
            implementaciones prácticas.
          </p>
        </div>
      </section>

      {/* Soluciones grid */}
      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          {soluciones.map((s, i) => (
            <MotionSection key={s.title} delay={i * 0.07}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors h-full flex flex-col">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-bold text-lg text-foreground mb-3">
                      {s.title}
                    </h2>
                    <div className="mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70">
                        Problema
                      </span>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        {s.problema}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        Cómo lo resolvemos
                      </span>
                      <p className="text-sm text-foreground font-body mt-1">
                        {s.solucion}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Links: blog + CTA */}
                <div className="mt-5 flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/contacto?dolor=${encodeURIComponent(s.dolor)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors font-body"
                  >
                    Resolver este problema <ArrowRight size={14} />
                  </Link>
                  <Link
                    href={s.blogHref}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors font-body"
                  >
                    {s.blogLabel} →
                  </Link>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tu desafío no está en la lista?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Cuéntanos qué necesitas y te diremos cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Cuéntanos tu desafío <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
