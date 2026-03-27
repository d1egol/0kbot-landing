import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="hero-gradient text-primary-foreground py-16 md:py-24">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
            ¿Listo para ordenar tu operación?
          </h2>
          <p className="text-lg text-primary-foreground/75 mb-8 leading-relaxed">
            Conversemos sobre los desafíos de tu pyme. El diagnóstico inicial es el primer paso para una operación más eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button variant="hero" size="xl">
                Solicitar diagnóstico
                <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <Link to="/contacto">
              <Button variant="hero-outline" size="xl">
                Cuéntanos tu desafío
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
