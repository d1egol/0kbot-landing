import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";
import { ScanSearch, Settings2, Award } from "lucide-react";

const columnas = [
  {
    titulo: "Lo que hacemos",
    texto:
      "Entramos, observamos, cronometramos. En 2 semanas te decimos exactamente dónde se va tu plata y tu tiempo. Con números, no con \"se ve mal\".",
    icono: ScanSearch,
  },
  {
    titulo: "Cómo lo resolvemos",
    texto:
      "La mitad de las veces no necesitas software nuevo. Necesitas que alguien que ha visto 40 empresas como la tuya te diga: \"esto se arregla cambiando este paso, no comprando ese sistema\".",
    icono: Settings2,
  },
  {
    titulo: "Por qué nosotros",
    texto:
      "No somos desarrolladores que quieren codear. Somos ingenieros que odiamos el desperdicio. Si la solución es un Excel bien hecho, te damos un Excel. Si es automatización, la implementamos.",
    icono: Award,
  },
];

export default function SolucionSection() {
  return (
    <section className="bg-primary py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            No vendemos IA.
            <br />
            Vendemos lunes tranquilos.
          </h2>
        </MotionSection>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {columnas.map((col, i) => {
            const Icono = col.icono;
            return (
              <MotionSection key={col.titulo} delay={i * 0.1}>
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10">
                    <Icono size={22} style={{ color: "#D4A853" }} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-accent">
                    {col.titulo}
                  </h3>
                  <p className="text-white/80 font-body text-sm leading-relaxed">
                    {col.texto}
                  </p>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection className="text-center">
          <OpenModalButton className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors">
            Quiero saber cuánto estoy perdiendo →
          </OpenModalButton>
          <p className="mt-3 text-white/50 text-xs font-body">
            Diagnóstico gratuito · Sin compromiso
          </p>
        </MotionSection>
      </div>
    </section>
  );
}
