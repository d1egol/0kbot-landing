import MotionSection from "@/components/ui/MotionSection";

const cards = [
  {
    number: "01",
    svgPath: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="4" y="8" width="40" height="36" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2"/>
        <path d="M4 16h40" stroke="#EF4444" strokeWidth="2"/>
        <path d="M16 4v8M32 4v8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="8" fill="#FCA5A5"/>
        <path d="M24 26v5l3 2" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 30h-3M27 30h3" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    titulo: "El lunes de terror",
    texto:
      "Tu gerente llega el lunes y no sabe qué pasó el viernes. Los reportes tardan 4 horas, y nadie confía en los números. Tú tomas decisiones a ciegas hasta el martes.",
    accent: "border-red-200 hover:border-red-300",
    iconBg: "bg-red-50",
  },
  {
    number: "02",
    svgPath: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="6" y="6" width="36" height="36" rx="18" fill="#D1FAE5" stroke="#10B981" strokeWidth="2"/>
        <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 6.1-4.9 7.4L26 34H22l-1.1-2.6C18 30.1 16 27.3 16 24z" fill="#10B981"/>
        <path d="M21 34v2a3 3 0 006 0v-2" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        <path d="M33 10l2-2M38 16h3M36 23l3 1" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="36" cy="12" r="2" fill="#F59E0B"/>
      </svg>
    ),
    titulo: "El WhatsApp empresarial",
    texto:
      "El 60% de la coordinación pasa por WhatsApp. Si se borra el celular de tu supervisor clave, se borra medio año de historial. El conocimiento vive en cabezas, no en sistemas.",
    accent: "border-emerald-200 hover:border-emerald-300",
    iconBg: "bg-emerald-50",
  },
  {
    number: "03",
    svgPath: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="18" r="10" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2"/>
        <path d="M14 38c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 8l1.5 1.5L28 8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="12" r="4" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M32 10v2l1.5 1" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titulo: "La persona indispensable",
    texto:
      "Hay alguien que si se enferma, se detiene un proceso entero. No es su culpa. Es que nadie documentó cómo lo hace, porque \"siempre ha sido así\".",
    accent: "border-purple-200 hover:border-purple-300",
    iconBg: "bg-purple-50",
  },
  {
    number: "04",
    svgPath: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <rect x="8" y="28" width="8" height="14" rx="2" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5"/>
        <rect x="20" y="20" width="8" height="22" rx="2" fill="#FCA5A5" stroke="#EF4444" strokeWidth="1.5"/>
        <rect x="32" y="12" width="8" height="30" rx="2" fill="#EF4444" stroke="#DC2626" strokeWidth="1.5"/>
        <path d="M10 24l6-8 8 4 6-14" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="6" r="4" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M28 6l4 0M30 4v4" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    titulo: "El costo invisible",
    texto:
      "Sabes que algo está caro, pero no sabes qué. Las horas extra crecen, los reclamos suben, y cada mes dices \"esto debería ser más fácil\". Llevas 8 meses diciéndolo.",
    accent: "border-orange-200 hover:border-orange-300",
    iconBg: "bg-orange-50",
  },
];

export default function PainPointsSection() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            El síndrome del héroe operativo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body max-w-xl mx-auto">
            Cuando el dueño es el único que sabe dónde está todo
          </p>
        </MotionSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <MotionSection key={card.titulo} delay={i * 0.08}>
              <div className={`relative bg-card border rounded-xl p-7 shadow-card hover:shadow-card-hover transition-all h-full overflow-hidden ${card.accent}`}>
                {/* Number decoration */}
                <span className="absolute top-4 right-5 font-heading font-bold text-6xl text-muted/30 select-none leading-none">
                  {card.number}
                </span>

                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl shrink-0 ${card.iconBg}`}>
                    {card.svgPath}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground pt-2">
                    {card.titulo}
                  </h3>
                </div>

                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {card.texto}
                </p>
              </div>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
