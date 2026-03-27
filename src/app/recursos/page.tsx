import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Recursos y guías para pymes",
  description:
    "Artículos, guías prácticas y preguntas frecuentes sobre digitalización y mejora de procesos para pymes chilenas.",
  keywords: [
    "guías digitalización pyme Chile",
    "automatización pymes",
    "KPIs pymes Chile",
    "mejora procesos artículos",
  ],
};

const articulos = [
  {
    title: "5 señales de que tu pyme necesita digitalizar sus procesos",
    desc: "Cómo identificar si el desorden operativo ya está afectando tu crecimiento.",
    tag: "Guía práctica",
  },
  {
    title: "Automatización para pymes: por dónde empezar",
    desc: "No necesitas un sistema complejo. Estas son las automatizaciones que generan impacto rápido.",
    tag: "Artículo",
  },
  {
    title: "Cómo pasar de planillas a un sistema de gestión sin morir en el intento",
    desc: "La transición no tiene que ser traumática. Consejos prácticos para migrar tu información.",
    tag: "Guía práctica",
  },
  {
    title: "KPIs para pymes: qué medir y por qué",
    desc: "No todo se mide. Estos son los indicadores que realmente importan para tu negocio.",
    tag: "Artículo",
  },
];

const faqs = [
  {
    q: "¿Cuánto cuesta un proyecto con 0kbot?",
    a: "Depende del alcance. Trabajamos con presupuestos adaptados a la realidad de la pyme. Lo mejor es agendar una conversación para entender tu necesidad y darte una propuesta concreta.",
  },
  {
    q: "¿Necesito tener un equipo de tecnología interno?",
    a: "No. Nosotros nos encargamos de la parte técnica. Lo que necesitamos es alguien del equipo que conozca la operación y pueda tomar decisiones.",
  },
  {
    q: "¿Puedo empezar con algo pequeño?",
    a: "Absolutamente. De hecho, recomendamos empezar con un alcance acotado, generar valor rápido y luego decidir cómo seguir avanzando.",
  },
  {
    q: "¿Qué herramientas usan?",
    a: "Usamos las herramientas que mejor se adapten a cada caso. No estamos atados a ningún proveedor. Lo importante es que la solución funcione y sea sostenible.",
  },
];

export default function RecursosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Recursos
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Conocimiento práctico para tu pyme
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Artículos, guías y respuestas a las preguntas más comunes sobre
            digitalización y mejora de procesos.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection className="flex items-center gap-3 mb-10">
            <BookOpen className="w-6 h-6 text-accent flex-shrink-0" />
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Artículos y guías
            </h2>
          </MotionSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articulos.map((a, i) => (
              <MotionSection key={a.title} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors h-full">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent font-body">
                    {a.tag}
                  </span>
                  <h3 className="font-heading font-bold text-foreground text-lg mt-2 mb-2">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {a.desc}
                  </p>
                </div>
              </MotionSection>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground font-body mt-8">
            Próximamente más contenido. ¡Estamos trabajando en ello!
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection className="flex items-center gap-3 mb-10">
            <HelpCircle className="w-6 h-6 text-accent flex-shrink-0" />
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Preguntas frecuentes
            </h2>
          </MotionSection>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Tienes más preguntas?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Estamos para ayudarte. Escríbenos o agenda una reunión.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Contactar <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
