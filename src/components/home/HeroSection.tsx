import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-wide relative z-10 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium tracking-wider uppercase mb-6 text-primary-foreground/60 border border-primary-foreground/20 rounded-full px-4 py-1.5">
              Consultora de digitalización para pymes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
          >
            Ayudamos a pymes en Chile a{" "}
            <span className="text-gradient-accent">ordenar, digitalizar y controlar</span>{" "}
            sus procesos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/75 max-w-2xl mb-10 leading-relaxed"
          >
            Menos trabajo manual, mejor información y más visibilidad para tomar decisiones.
            Transformamos operaciones desordenadas en procesos claros, medibles y eficientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contacto">
              <Button variant="hero" size="xl">
                Solicitar diagnóstico
                <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <Link to="/como-trabajamos">
              <Button variant="hero-outline" size="xl">
                Conocer cómo trabajamos
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
