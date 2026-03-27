import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Workflow, Database, Zap, BarChart2, Users, Settings, ArrowRight } from "lucide-react";

const servicios = [
  {
    icon: Workflow,
    title: "Diagnóstico y orden de procesos",
    desc: "Levantamos cómo opera tu negocio hoy: flujos, responsables, puntos de quiebre y tiempos muertos. Luego proponemos un mapa claro de cómo deberían funcionar las cosas, con prioridades y acciones concretas.",
    beneficios: ["Mapeo de procesos actuales", "Identificación de cuellos de botella", "Propuesta de mejoras priorizadas", "Definición de roles y responsabilidades"],
  },
  {
    icon: Database,
    title: "Estandarización de información y registros",
    desc: "Definimos qué información importa, cómo se debe registrar y dónde debe vivir. Terminamos con la dispersión de datos en planillas, correos y WhatsApp.",
    beneficios: ["Formularios de captura estandarizados", "Estructura de datos clara", "Un solo lugar para la información clave", "Menos errores de registro"],
  },
  {
    icon: Zap,
    title: "Automatización de tareas y reportes",
    desc: "Lo que se puede automatizar, lo automatizamos: notificaciones, asignaciones, actualizaciones de estado, cálculos e informes periódicos.",
    beneficios: ["Notificaciones automáticas", "Flujos de aprobación", "Reportes que se generan solos", "Menos tareas manuales repetitivas"],
  },
  {
    icon: BarChart2,
    title: "Tableros y visibilidad de datos",
    desc: "Creamos dashboards con los indicadores que importan para tu negocio. Información actualizada, visual y accesible para tomar decisiones.",
    beneficios: ["Indicadores clave de gestión (KPIs)", "Vistas por área o responsable", "Datos en tiempo real", "Visualización clara y accionable"],
  },
  {
    icon: Users,
    title: "Apoyo a gestión comercial y seguimiento",
    desc: "Organizamos el seguimiento de clientes, oportunidades y pipeline de ventas. Que ningún contacto se pierda por falta de registro.",
    beneficios: ["Pipeline de ventas organizado", "Seguimiento de oportunidades", "Historial de interacciones", "Alertas de seguimiento pendiente"],
  },
  {
    icon: Settings,
    title: "Implementación práctica para pymes",
    desc: "No hacemos proyectos de meses. Configuramos herramientas, capacitamos equipos y dejamos todo funcionando de manera práctica y sostenible.",
    beneficios: ["Configuración de herramientas", "Capacitación del equipo", "Documentación simple", "Soporte post-implementación"],
  },
];

const ServiciosPage = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Servicios</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 max-w-3xl">
              Soluciones concretas para ordenar y digitalizar tu operación
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl">
              Cada servicio está diseñado para resolver problemas reales de la pyme, con foco en resultados prácticos y sostenibles.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide space-y-16">
          {servicios.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">Qué incluye</h3>
                <ul className="space-y-3">
                  {s.beneficios.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="hero-gradient text-primary-foreground py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">¿No sabes por dónde empezar?</h2>
          <p className="text-primary-foreground/75 mb-8">Un diagnóstico inicial nos permite entender tu situación y proponerte un plan claro.</p>
          <Link to="/contacto">
            <Button variant="hero" size="xl">Solicitar diagnóstico <ArrowRight className="ml-1" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiciosPage;
