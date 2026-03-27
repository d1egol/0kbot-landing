import { motion } from "framer-motion";
import { AlertTriangle, FileSpreadsheet, Clock, Eye, BarChart3 } from "lucide-react";

const dolores = [
  {
    icon: AlertTriangle,
    title: "Procesos desordenados",
    desc: "Cada persona trabaja distinto, no hay un flujo claro ni estándar.",
  },
  {
    icon: FileSpreadsheet,
    title: "Información dispersa",
    desc: "Datos repartidos entre planillas, WhatsApp, correos y cuadernos.",
  },
  {
    icon: Clock,
    title: "Seguimiento difícil",
    desc: "No sabes en qué estado están las tareas, pedidos o clientes.",
  },
  {
    icon: BarChart3,
    title: "Reportes manuales",
    desc: "Armar informes consume horas y la información ya llega desactualizada.",
  },
  {
    icon: Eye,
    title: "Falta de visibilidad",
    desc: "No tienes datos confiables ni a tiempo para tomar buenas decisiones.",
  },
];

const DoloresSection = () => {
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estos son los problemas más comunes que enfrentan las pymes cuando crecen sin procesos claros.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {dolores.map((dolor, i) => (
            <motion.div
              key={dolor.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <dolor.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{dolor.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{dolor.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoloresSection;
