import { motion } from "framer-motion";
import { Clock, Shield, FileCheck, BarChart3, Users, Eye } from "lucide-react";

const beneficios = [
  { icon: Clock, title: "Menos tiempo administrativo", desc: "Libera horas de trabajo manual para enfocarte en lo que importa." },
  { icon: Shield, title: "Mejor control operativo", desc: "Sabes qué pasa en tu negocio sin depender de preguntar uno por uno." },
  { icon: FileCheck, title: "Información más confiable", desc: "Datos estandarizados y centralizados, no dispersos en planillas." },
  { icon: BarChart3, title: "Reportes automáticos", desc: "Informes que se generan solos y siempre están actualizados." },
  { icon: Users, title: "Más seguimiento comercial", desc: "No pierdas oportunidades por falta de registro o seguimiento." },
  { icon: Eye, title: "Decisiones con datos visibles", desc: "Tableros claros que te muestran el estado real de tu operación." },
];

const BeneficiosSection = () => {
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
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Resultados</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Beneficios que puedes esperar
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <b.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSection;
