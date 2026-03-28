import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight, Target, Lightbulb, Users, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros · 0kbot",
  description:
    "Somos una consultora de mejora de procesos para pymes chilenas. Fundada por Diego López, Ingeniero Industrial PUC con 8+ años en operaciones reales. Sin teorías — con resultados.",
  keywords: [
    "consultora procesos Chile",
    "quiénes somos 0kbot",
    "mejora operativa pymes Santiago",
  ],
};

const valores = [
  {
    icon: Target,
    title: "Foco en el problema real",
    desc: "No vendemos tecnología por moda. Antes de proponer cualquier solución, entendemos bien qué duele y por qué.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones prácticas",
    desc: "Priorizamos lo simple y lo útil. Si una planilla bien hecha resuelve el problema, no necesitas un sistema complejo.",
  },
  {
    icon: Users,
    title: "Cercanía consultiva",
    desc: "Trabajamos como parte de tu equipo, no como un proveedor externo. Nos importa que las cosas funcionen de verdad.",
  },
];

const badges = [
  "Ingeniero Civil Industrial PUC",
  "MSc Data Science",
  "Lean Six Sigma Green Belt",
  "8+ años en operaciones",
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Sobre nosotros
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Experiencia operacional real, no teoría de consultoría
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            0kbot es una consultora nueva, fundada por un ingeniero con más de 8 años operando en el mundo real. Sin clientes ficticios, sin promesas vacías.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <MotionSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Por qué existe 0kbot
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                0kbot nació de una convicción simple: las pymes en Chile tienen
                enormes oportunidades de mejora operativa, pero la mayoría de
                las soluciones del mercado están diseñadas para empresas grandes
                o para vender tecnología sin entender el problema.
              </p>
              <p>
                Decidimos hacer las cosas diferente. Antes de hablar de
                herramientas, escuchamos. Antes de implementar, diagnosticamos.
                Y antes de prometer resultados, nos aseguramos de entender bien
                la realidad de cada negocio.
              </p>
              <p>
                Hoy lanzamos 0kbot para llevar esa experiencia directamente a
                pymes que necesitan orden operativo, no teoría. Somos una
                consultora en fase inicial: no tenemos 40 clientes ni $2M en
                ahorros acumulados — pero sí tenemos 8 años de haber estado del
                otro lado del problema.
              </p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Fundador */}
      <section className="section-padding surface-warm">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <MotionSection direction="left">
              <div className="relative">
                <div className="w-full max-w-sm mx-auto rounded-lg bg-primary/5 border border-primary/15 p-8 space-y-6">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-heading font-bold text-2xl text-foreground">
                          Diego López
                        </p>
                        <p className="text-sm text-muted-foreground font-body mt-1">
                          Founder · 0kbot
                        </p>
                      </div>
                      <Link
                        href="https://www.linkedin.com/in/diego-lopez-dinamarca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Diego López"
                        className="text-[#0077b5] hover:text-[#005e8e] transition-colors mt-1"
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                  <div className="h-px bg-primary/10" />
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs px-2.5 py-1.5 rounded-full bg-muted text-foreground font-body"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="absolute -top-3 -left-3 w-12 h-12 rounded-md"
                  style={{ backgroundColor: "#D4A853", opacity: 0.2 }}
                />
                <div
                  className="absolute -bottom-3 -right-3 w-8 h-8 rounded-md"
                  style={{ backgroundColor: "#1B5FA6", opacity: 0.15 }}
                />
              </div>
            </MotionSection>

            <MotionSection delay={0.15}>
              <div className="space-y-6">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                  He estado del otro lado
                </h2>
                <div className="space-y-4 text-muted-foreground font-body text-base leading-relaxed">
                  <p>
                    Antes de consultar, operé. 8 años en plantas de producción,
                    puertos, centros de distribución. Sé cómo se siente cuando
                    alguien de afuera llega con teorías que no funcionan en la
                    realidad.
                  </p>
                  <p>
                    Por eso 0kbot no hace teorías. Hacemos que el lunes sea más
                    fácil.
                  </p>
                  <p>
                    No soy el ingeniero que te vende IA porque está de moda. Soy
                    el que te dice{" "}
                    <em className="text-foreground">
                      &ldquo;esto no necesita código, necesita orden&rdquo;
                    </em>{" "}
                    cuando es verdad.
                  </p>
                </div>
                <p
                  className="text-sm text-muted-foreground font-body border-l-4 pl-4 italic"
                  style={{ borderLeftColor: "#D4A853" }}
                >
                  Si llegaste hasta aquí, probablemente sospechas que algo está
                  más roto de lo que admites. Tienes razón. Agendemos 30 minutos
                  y te confirmo dónde.
                </p>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding surface-cool">
        <div className="container-wide">
          <MotionSection className="text-center mb-14">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Lo que nos define
            </h2>
          </MotionSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((v, i) => (
              <MotionSection key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres conocernos mejor?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Agendemos una reunión para conversar sobre tu pyme.
          </p>
          <Link
            href="https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#1A1A1A] rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico gratis <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
