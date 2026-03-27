import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Workflow, Database, Zap, BarChart2, Users, Settings } from "lucide-react";

const servicios = [
  {
    icon: Workflow,
    title: "Diagnóstico y orden de procesos",
    desc: "Identificamos cómo funciona tu operación, detectamos cuellos de botella y proponemos mejoras concretas.",
  },
  {
    icon: Database,
    title: "Estandarización de información",
    desc: "Definimos formatos, flujos de registro y puntos de captura para que la información sea confiable.",
  },
  {
    icon: Zap,
    title: "Automatización de tareas y reportes",
    desc: "Automatizamos lo repetitivo: notificaciones, asignaciones, actualizaciones de estado e informes.",
  },
  {
    icon: BarChart2,
    title: "Tableros y visibilidad de datos",
    desc: "Creamos dashboards con indicadores claros para que veas el estado real de tu operación.",
  },
  {
    icon: Users,
    title: "Apoyo a gestión comercial",
    desc: "Seguimiento de clientes, oportunidades y pipeline de ventas organizado y medible.",
  },
  {
    icon: Settings,
    title: "Implementación práctica",
    desc: "Configuramos herramientas y procesos que funcionan desde el día uno, sin proyectos largos.",
  },
];

const ServiciosSection = () => {
  return (
    <section className="section-padding surface-warm">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Servicios</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Soluciones concretas para tu operación
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada servicio está pensado para resolver problemas reales de la pyme, con foco en resultados prácticos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <s.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/servicios" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
            Ver todos los servicios <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiciosSection;
