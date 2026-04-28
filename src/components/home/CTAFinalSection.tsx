import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

export default function CTAFinalSection() {
  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="container-content text-center">
        <MotionSection className="max-w-2xl mx-auto space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Cada mes que esperas, el número crece.
          </h2>
          <p className="text-lg text-white/70 font-body leading-relaxed">
            Si tu operación depende de WhatsApp, Excel y memoria, probablemente
            ya estás pagando el costo: horas perdidas, errores, clientes
            esperando y decisiones sin datos. Veamos si hay una mejora concreta
            que valga la pena implementar.
          </p>
          <OpenModalButton location="cta_final" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-base hover:bg-accent/90 transition-colors">
            Agendar diagnóstico gratuito →
          </OpenModalButton>
          <p className="text-sm text-white/40 font-body">
            Si no vemos una oportunidad clara de mejora, te lo diremos directo.
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
