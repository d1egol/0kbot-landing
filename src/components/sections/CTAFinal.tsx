import AnimatedSection from "@/components/ui/AnimatedSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

export default function CTAFinal() {
  return (
    <section id="cta-diagnostico" className="section-primary py-20 lg:py-32">
      <div className="container-content text-center">
        <AnimatedSection className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-display text-display-lg font-bold text-white">
            Cada mes que esperas, el número crece
          </h2>

          <p className="text-lg text-white/70 font-sans leading-relaxed">
            Las ineficiencias no se quedan estáticas. Se normalizan, se
            entierran, se vuelven &ldquo;así es esto&rdquo;. En 6 meses, lo que
            hoy es un dolor de cabeza será &ldquo;imposible de cambiar&rdquo;.
          </p>

          <OpenModalButton
            id="cta-final-btn"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold font-sans text-base hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-colors"
          >
            Descubrir pérdidas ocultas →
          </OpenModalButton>

          <p className="text-sm text-white/40 font-sans">
            Sin compromiso. Sin spam. Te llamamos, conversamos, y si no hay fit,
            te damos una recomendación igual.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
