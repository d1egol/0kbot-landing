import { motion } from "framer-motion";
import { Search, ListChecks, Wrench, TrendingUp } from "lucide-react";

const pasos = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    desc: "Levantamos cómo funciona tu operación hoy, identificamos cuellos de botella y oportunidades de mejora.",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Priorización de mejoras",
    desc: "Definimos juntos qué resolver primero según impacto y factibilidad. Sin proyectos enormes ni promesas irreales.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementación práctica",
    desc: "Configuramos herramientas, flujos y automatizaciones que funcionan desde el primer día.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Medición y seguimiento",
    desc: "Verificamos que los cambios generen resultados reales y ajustamos lo que haga falta.",
  },
];

const PasosSection = () => {
  return (
    <section className="section-padding surface-cool">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Método</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Cómo trabajamos en 4 pasos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un proceso claro, concreto y orientado a resultados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, i) => (
            <motion.div
              key={paso.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-6xl font-heading font-bold text-accent/10 absolute -top-2 -left-1">
                {paso.number}
              </span>
              <div className="relative pt-10">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <paso.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{paso.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{paso.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PasosSection;
