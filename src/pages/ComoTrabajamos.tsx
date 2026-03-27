import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ListChecks, Wrench, TrendingUp, ArrowRight } from "lucide-react";

const pasos = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Conversamos contigo y tu equipo para entender cómo funciona tu operación hoy. Levantamos procesos, identificamos dónde se pierde tiempo, dónde falta información y qué duele más.",
    detail: "El diagnóstico es la base de todo. Sin entender bien el problema, cualquier solución es un parche. Por eso nos tomamos el tiempo de conocer tu realidad antes de proponer cualquier cambio.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Priorización de mejoras",
    desc: "No todo se puede resolver al mismo tiempo. Definimos juntos qué atacar primero según el impacto que genera y la facilidad de implementación.",
    detail: "Evitamos proyectos enormes que se estancan. Preferimos empezar por cambios que se noten rápido y que den confianza para seguir avanzando.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementación práctica",
    desc: "Configuramos herramientas, flujos y automatizaciones que funcionan desde el primer día. Capacitamos a tu equipo y acompañamos la adopción.",
    detail: "No dejamos un documento de 50 páginas. Dejamos procesos funcionando, herramientas configuradas y un equipo que sabe usarlas.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Medición y seguimiento",
    desc: "Verificamos que los cambios generen los resultados esperados. Ajustamos lo que haga falta y seguimos mejorando.",
    detail: "La mejora es continua. Después de la primera implementación, seguimos acompañando para asegurar que todo funcione y evolucione con tu negocio.",
  },
];

const ComoTrabajamosPage = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Método</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 max-w-3xl">
              Un proceso claro, concreto y orientado a resultados
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl">
              No improvisamos ni vendemos soluciones genéricas. Nuestro método se adapta a la realidad de cada pyme.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-20">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-start gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-7xl font-heading font-bold text-accent/15">{paso.number}</span>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <paso.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">{paso.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{paso.desc}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed border-l-2 border-accent/30 pl-4">{paso.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="hero-gradient text-primary-foreground py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">¿Quieres saber cómo aplicaría esto a tu pyme?</h2>
          <p className="text-primary-foreground/75 mb-8">El primer paso es una conversación para entender tu situación.</p>
          <Link to="/contacto">
            <Button variant="hero" size="xl">Solicitar diagnóstico <ArrowRight className="ml-1" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ComoTrabajamosPage;
