import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonios = [
  {
    text: "Antes no teníamos idea del estado real de nuestros proyectos. Hoy vemos todo en un solo lugar y tomamos mejores decisiones.",
    author: "Gerente de operaciones",
    company: "Empresa de servicios profesionales",
  },
  {
    text: "Lo que más valoramos es que no nos vendieron tecnología por vender. Entendieron nuestro problema y nos dieron una solución práctica.",
    author: "Dueña de clínica",
    company: "Centro de salud",
  },
  {
    text: "Los reportes que antes me tomaban dos días ahora se generan solos. Eso cambió completamente mi trabajo.",
    author: "Jefe administrativo",
    company: "Comercio mayorista",
  },
];

const TestimoniosSection = () => {
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
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Confianza</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Lo que dicen quienes ya trabajaron con nosotros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-6 right-6" />
              <p className="text-foreground leading-relaxed mb-6 pr-8">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;
