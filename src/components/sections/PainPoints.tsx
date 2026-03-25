import AnimatedSection from "@/components/ui/AnimatedSection";
import { CalendarX, MessageCircle, UserX, TrendingDown } from "lucide-react";

const cards = [
  {
    icon: CalendarX,
    titulo: "El lunes de terror",
    texto:
      "Tu gerente llega el lunes y no sabe qué pasó el viernes. Los reportes tardan 4 horas, y nadie confía en los números. Tú tomas decisiones a ciegas hasta el martes.",
  },
  {
    icon: MessageCircle,
    titulo: "El WhatsApp empresarial",
    texto:
      "El 60% de la coordinación pasa por WhatsApp. Si se borra el celular de tu supervisor clave, se borra medio año de historial. El conocimiento vive en cabezas, no en sistemas.",
  },
  {
    icon: UserX,
    titulo: "La persona indispensable",
    texto:
      "Hay alguien que si se enferma, se detiene un proceso entero. No es su culpa. Es que nadie documentó cómo lo hace, porque \"siempre ha sido así\".",
  },
  {
    icon: TrendingDown,
    titulo: "El costo invisible",
    texto:
      "Sabes que algo está caro, pero no sabes qué. Las horas extra crecen, los reclamos suben, y cada mes dices \"esto debería ser más fácil\". Llevas 8 meses diciéndolo.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-display-lg font-bold text-foreground">
            El síndrome del héroe operativo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-sans max-w-xl mx-auto">
            Cuando el dueño es el único que sabe dónde está todo
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.titulo} delay={((i % 2) * 100) as 0 | 100}>
                <div className="bg-card border border-muted rounded-lg p-7 shadow-card hover:shadow-card-hover transition-shadow h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/8 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {card.titulo}
                    </h3>
                  </div>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {card.texto}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
