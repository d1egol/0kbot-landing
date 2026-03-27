import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿0kbot es una empresa de software o de bots?",
    a: "No. Somos una consultora de digitalización de procesos. Ayudamos a pymes a ordenar su operación, estandarizar registros, automatizar tareas y tener visibilidad de sus datos. Usamos la tecnología como herramienta, no como producto final.",
  },
  {
    q: "¿Con qué tipo de empresas trabajan?",
    a: "Trabajamos principalmente con pymes en Chile de distintos sectores: servicios, comercio, salud, educación, logística y otros negocios intensivos en operación interna. Si tienes procesos desordenados y quieres mejorar, probablemente podamos ayudarte.",
  },
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Depende de la complejidad, pero en general las primeras mejoras se implementan en semanas, no en meses. Priorizamos lo que tiene más impacto y menor fricción para empezar a generar valor rápido.",
  },
  {
    q: "¿Necesito comprar algún software especial?",
    a: "No necesariamente. Trabajamos con herramientas que ya existen en el mercado y las configuramos según tus necesidades. No te vendemos licencias innecesarias; usamos lo que realmente necesitas.",
  },
  {
    q: "¿Qué incluye el diagnóstico inicial?",
    a: "El diagnóstico incluye un levantamiento de tus procesos actuales, identificación de cuellos de botella, mapeo de oportunidades de mejora y una propuesta priorizada de acciones concretas.",
  },
  {
    q: "¿Trabajan de forma remota o presencial?",
    a: "Ambas. El diagnóstico inicial puede ser presencial o remoto, y la implementación se adapta a tu realidad. Lo importante es que funcione para tu equipo.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding surface-warm">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
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
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
