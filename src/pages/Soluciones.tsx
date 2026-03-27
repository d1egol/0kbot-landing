import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shuffle, Clock, EyeOff, FileText, BarChart3, UserX, ArrowRight } from "lucide-react";

const soluciones = [
  {
    icon: Shuffle,
    title: "Desorden operativo",
    problema: "Cada persona trabaja distinto, no hay un flujo claro y las cosas se pierden.",
    solucion: "Levantamos los procesos clave, definimos un flujo estándar y lo implementamos con herramientas que lo sostengan.",
  },
  {
    icon: Clock,
    title: "Pérdida de tiempo en tareas manuales",
    problema: "Horas invertidas en copiar datos, armar informes y coordinar por WhatsApp.",
    solucion: "Automatizamos tareas repetitivas, centralizamos la comunicación y eliminamos el doble registro.",
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    problema: "No sabes el estado real de tu operación sin preguntar uno por uno.",
    solucion: "Creamos tableros con indicadores clave que se actualizan automáticamente.",
  },
  {
    icon: FileText,
    title: "Registro manual disperso",
    problema: "Información en planillas, correos, cuadernos y la cabeza de cada uno.",
    solucion: "Estandarizamos los registros con formularios y bases de datos centralizadas.",
  },
  {
    icon: BarChart3,
    title: "Reportes lentos y poco confiables",
    problema: "Armar un informe toma días y siempre hay datos que no cuadran.",
    solucion: "Automatizamos reportes que se generan solos con datos consistentes y actualizados.",
  },
  {
    icon: UserX,
    title: "Seguimiento comercial débil",
    problema: "Clientes que se pierden, cotizaciones sin seguimiento y oportunidades olvidadas.",
    solucion: "Organizamos el pipeline de ventas con seguimiento estructurado y alertas automáticas.",
  },
];

const SolucionesPage = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Soluciones por necesidad</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 max-w-3xl">
              ¿Cuál es tu principal desafío operativo?
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl">
              Identifica tu problema y conoce cómo lo resolvemos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-8">
          {soluciones.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h2>
                  <div className="mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70">Problema</span>
                    <p className="text-sm text-muted-foreground mt-1">{s.problema}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">Solución</span>
                    <p className="text-sm text-foreground mt-1">{s.solucion}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="hero-gradient text-primary-foreground py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">¿Tu desafío no está en la lista?</h2>
          <p className="text-primary-foreground/75 mb-8">Cuéntanos qué necesitas y te diremos cómo podemos ayudarte.</p>
          <Link to="/contacto">
            <Button variant="hero" size="xl">Cuéntanos tu desafío <ArrowRight className="ml-1" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SolucionesPage;
