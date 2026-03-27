import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const casos = [
  {
    sector: "Empresa de servicios",
    problema: "Seguimiento de proyectos en planillas separadas, sin visibilidad del estado real.",
    solucion: "Se centralizó el registro de proyectos, se automatizaron alertas de plazos y se creó un tablero de estado.",
    resultado: "60% menos tiempo en reportes semanales. Visibilidad completa del pipeline.",
  },
  {
    sector: "Comercio mayorista",
    problema: "Pedidos por WhatsApp sin registro, errores frecuentes y reclamos de clientes.",
    solucion: "Se estandarizó el flujo de pedidos con formularios y confirmaciones automáticas.",
    resultado: "Reducción de errores en 80%. Mejor experiencia de cliente y seguimiento claro.",
  },
  {
    sector: "Clínica de salud",
    problema: "Agenda manual, fichas en papel y reportes mensuales que tomaban dos días.",
    solucion: "Se digitalizó la gestión de pacientes y se automatizaron reportes de atención.",
    resultado: "Reportes automáticos en minutos. Mejor control de agendamiento y asistencia.",
  },
];

const CasosSection = () => {
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
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Casos típicos</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground mt-3 mb-4">
            Escenarios reales, resultados concretos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Situaciones que hemos resuelto junto a pymes como la tuya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="bg-primary px-6 py-4">
                <span className="text-sm font-medium text-primary-foreground/70">{caso.sector}</span>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Problema</span>
                  <p className="text-sm text-foreground mt-1">{caso.problema}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">Solución</span>
                  <p className="text-sm text-foreground mt-1">{caso.solucion}</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resultado</span>
                  <p className="text-sm font-medium text-foreground mt-1">{caso.resultado}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosSection;
