import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Lightbulb } from "lucide-react";

const valores = [
  {
    icon: Target,
    title: "Foco en el problema real",
    desc: "No vendemos tecnología por moda. Antes de proponer cualquier solución, entendemos bien qué duele y por qué.",
  },
  {
    icon: Lightbulb,
    title: "Soluciones prácticas",
    desc: "Priorizamos lo simple y lo útil. Si una planilla bien hecha resuelve el problema, no necesitas un sistema complejo.",
  },
  {
    icon: Users,
    title: "Cercanía consultiva",
    desc: "Trabajamos como parte de tu equipo, no como un proveedor externo. Nos importa que las cosas funcionen de verdad.",
  },
];

const NosotrosPage = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">Sobre nosotros</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-3 mb-4 max-w-3xl">
              Socios estratégicos en digitalización práctica
            </h1>
            <p className="text-lg text-primary-foreground/75 max-w-2xl">
              Somos una consultora que ayuda a pymes en Chile a transformar operaciones desordenadas en procesos claros, medibles y eficientes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">Nuestra historia</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                0kbot nació de una convicción simple: las pymes en Chile tienen enormes oportunidades de mejora operativa,
                pero la mayoría de las soluciones del mercado están diseñadas para empresas grandes o para vender tecnología sin entender el problema.
              </p>
              <p>
                Decidimos hacer las cosas diferente. Antes de hablar de herramientas, escuchamos. Antes de implementar, diagnosticamos.
                Y antes de prometer resultados, nos aseguramos de entender bien la realidad de cada negocio.
              </p>
              <p>
                Hoy acompañamos a pymes de distintos sectores a ordenar sus procesos, estandarizar su información, automatizar lo repetitivo
                y tener visibilidad real de su operación. No como un proyecto de un año, sino con implementaciones prácticas que generan valor rápido.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding surface-cool">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Lo que nos define</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap / Plan Maestro */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Plan maestro</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">Roadmap recomendado</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Las 4 fases para evolucionar tu operación de manera sostenible.</p>
          </motion.div>

          <div className="space-y-8">
            {[
              { fase: "Fase 1", title: "Claridad de propuesta y foco comercial", desc: "Definir con precisión qué problema resolvemos, para quién y cómo lo comunicamos. Alinear el mensaje con el valor real que entregamos." },
              { fase: "Fase 2", title: "Servicios y casos por necesidad", desc: "Estructurar los servicios en función de las necesidades reales de las pymes. Documentar casos y resultados para generar credibilidad." },
              { fase: "Fase 3", title: "Confianza, contenidos y SEO", desc: "Crear contenido útil (artículos, guías, FAQs) que posicione a 0kbot como referente. Optimizar para buscadores con keywords relevantes." },
              { fase: "Fase 4", title: "Medición, optimización y escalamiento", desc: "Medir resultados del sitio y canales. Optimizar conversiones. Escalar con campañas, partnerships o nuevos sectores." },
            ].map((f, i) => (
              <motion.div
                key={f.fase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{f.fase}</span>
                </div>
                <div className="border-l-2 border-accent/30 pl-6 pb-2">
                  <h3 className="font-heading font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="hero-gradient text-primary-foreground py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">¿Quieres conocernos mejor?</h2>
          <p className="text-primary-foreground/75 mb-8">Agendemos una reunión para conversar sobre tu pyme.</p>
          <Link to="/contacto">
            <Button variant="hero" size="xl">Agendar reunión <ArrowRight className="ml-1" /></Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NosotrosPage;
