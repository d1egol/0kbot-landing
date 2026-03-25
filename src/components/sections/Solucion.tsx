import AnimatedSection from "@/components/ui/AnimatedSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

const columnas = [
  {
    titulo: "Lo que hacemos",
    texto:
      "Entramos, observamos, cronometramos. En 2 semanas te decimos exactamente dónde se va tu plata y tu tiempo. Con números, no con \"se ve mal\".",
  },
  {
    titulo: "Cómo lo resolvemos",
    texto:
      "La mitad de las veces no necesitas software nuevo. Necesitas que alguien que ha visto 40 empresas como la tuya te diga: \"esto se arregla cambiando este paso, no comprando ese sistema\".",
  },
  {
    titulo: "Por qué nosotros",
    texto:
      "No somos desarrolladores que quieren codear. Somos ingenieros que odiamos el desperdicio. Si la solución es un Excel bien hecho, te damos un Excel. Si es automatización, la implementamos.",
  },
];

export default function Solucion() {
  return (
    <section className="section-primary py-20 lg:py-32">
      <div className="container-content">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-display-lg font-bold text-white">
            No vendemos IA.
            <br />
            Vendemos lunes tranquilos.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {columnas.map((col, i) => (
            <AnimatedSection key={col.titulo} delay={(i * 100) as 0 | 100 | 200}>
              <div className="space-y-3">
                <h3 className="font-display font-semibold text-lg text-accent">
                  {col.titulo}
                </h3>
                <p className="text-white/80 font-sans text-sm leading-relaxed">
                  {col.texto}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <OpenModalButton className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-md font-semibold font-sans text-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary transition-colors">
            Quiero saber cuánto estoy perdiendo →
          </OpenModalButton>
          <p className="mt-3 text-white/50 text-xs font-sans">
            Diagnóstico gratuito · Sin compromiso
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
