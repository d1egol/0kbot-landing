import { motion } from "framer-motion";
import { Workflow, Database, Zap, Layout, BarChart2, Users } from "lucide-react";

const capabilities = [
  { icon: Workflow, title: "Ordena procesos", desc: "Mapeamos y clarificamos flujos de trabajo para eliminar confusión." },
  { icon: Database, title: "Estandariza registros", desc: "Un solo lugar y un solo formato para la información importante." },
  { icon: Zap, title: "Automatiza tareas repetitivas", desc: "Lo que se puede automatizar, lo automatizamos. Sin complejidad." },
  { icon: Layout, title: "Centraliza información clave", desc: "Todo lo relevante accesible para quienes lo necesitan." },
  { icon: BarChart2, title: "Genera visibilidad y reportes", desc: "Tableros e informes automáticos con datos actualizados." },
  { icon: Users, title: "Apoya la gestión comercial", desc: "Seguimiento de clientes, oportunidades y pipeline de ventas." },
];

const QueHacemosSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Qué hacemos</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Transformamos operaciones desordenadas en sistemas de trabajo claros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No vendemos tecnología por moda. Resolvemos problemas operativos reales con soluciones concretas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <cap.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1.5">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueHacemosSection;
