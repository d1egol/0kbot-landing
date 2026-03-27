import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const casos = [
  {
    sector: "Empresa de servicios profesionales",
    contexto: "Empresa de 25 personas que gestionaba proyectos con planillas separadas por área. El gerente no tenía visibilidad del estado real sin reuniones semanales.",
    problema: "Información fragmentada, reportes manuales de dos días y decisiones basadas en percepciones.",
    acciones: ["Mapeo de procesos de gestión de proyectos", "Centralización en una plataforma única", "Automatización de reportes de estado", "Tablero de indicadores clave"],
    resultado: "60% menos tiempo en reportes. Visibilidad en tiempo real del pipeline de proyectos. Mejor asignación de recursos.",
  },
  {
    sector: "Comercio mayorista",
    contexto: "Distribuidor con 15 vendedores que recibían pedidos por WhatsApp. Los errores eran frecuentes y los reclamos iban en aumento.",
    problema: "Sin registro formal de pedidos, errores de despacho y clientes insatisfechos.",
    acciones: ["Estandarización del flujo de pedidos", "Formularios digitales de captura", "Confirmaciones automáticas a clientes", "Tablero de seguimiento de pedidos"],
    resultado: "80% menos errores en pedidos. Trazabilidad completa. Clientes más satisfechos.",
  },
  {
    sector: "Centro de salud",
    contexto: "Clínica con agenda manual, fichas en papel y reportes mensuales que requerían dos días de trabajo administrativo.",
    problema: "Pérdida de fichas, doble agenda, reportes manuales y falta de indicadores de gestión.",
    acciones: ["Digitalización de fichas y agendamiento", "Recordatorios automáticos a pacientes", "Reportes automáticos de atención", "Dashboard de ocupación y rendimiento"],
    resultado: "Reportes automáticos en minutos. Mejor control de agendamiento. Reducción de inasistencias.",
  },
];

const CasosPage = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Casos y resultados</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 max-w-3xl">
              Situaciones reales, mejoras concretas
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl">
              Conoce cómo hemos ayudado a pymes similares a la tuya a mejorar su operación.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow space-y-12">
          {casos.map((caso, i) => (
            <motion.div
              key={caso.sector}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="bg-primary px-6 py-4">
                <h2 className="font-heading font-bold text-primary-foreground text-lg">{caso.sector}</h2>
              </div>
              <div className="p-6 md:p-8 space-y-5">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Contexto</h3>
                  <p className="text-sm text-foreground leading-relaxed">{caso.contexto}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-destructive/70 mb-2">Problema</h3>
                  <p className="text-sm text-foreground leading-relaxed">{caso.problema}</p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Acciones implementadas</h3>
                  <ul className="space-y-2">
                    {caso.acciones.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Resultado</h3>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{caso.resultado}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="hero-gradient text-primary-foreground py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">¿Tu pyme enfrenta desafíos similares?</h2>
          <p className="text-primary-foreground/75 mb-8">Conversemos para entender cómo podemos ayudarte.</p>
          <Link to="/contacto">
            <Button variant="hero" size="xl">Solicitar diagnóstico <ArrowRight className="ml-1" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CasosPage;
