import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

export default function CTAFinalSection() {
  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="container-content text-center">
        <MotionSection className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Cada mes que esperas, el número crece
          </h2>
          <p className="text-lg text-white/70 font-body leading-relaxed">
            Las ineficiencias no se quedan estáticas. Se normalizan, se
            entierran, se vuelven &ldquo;así es esto&rdquo;. En 6 meses, lo que
            hoy es un dolor de cabeza será &ldquo;imposible de cambiar&rdquo;.
          </p>
          <OpenModalButton className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-base hover:bg-accent/90 transition-colors">
            Quiero números, no suposiciones →
          </OpenModalButton>
          <p className="text-sm text-white/40 font-body">
            Sin compromiso. Sin spam. Te llamamos, conversamos, y si no hay fit,
            te damos una recomendación igual.
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
