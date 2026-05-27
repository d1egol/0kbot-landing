import MotionSection from "@/components/ui/MotionSection";
import TrackedLink from "@/components/ui/TrackedLink";
import { Bot, RefreshCw, Layers } from "lucide-react";

const pilares = [
  {
    icon: Bot,
    titulo: "El dogfood es la demo",
    texto:
      "0kbot corre su propia operación sobre un equipo de ~75 agentes de IA — gestión, outreach, reportería, cumplimiento. Lo que te ofrecemos es montar uno adentro de tu empresa.",
  },
  {
    icon: RefreshCw,
    titulo: "Operación continua, no proyecto puntual",
    texto:
      "Suscripción mensual = equipo de agentes que opera tu proceso todos los días. No un entregable que se archiva — algo que trabaja mientras tú duermes.",
  },
  {
    icon: Layers,
    titulo: "Sin reinventar la rueda",
    texto:
      "Reutilizamos lo que ya tienes: OneDrive, Google Sheets, formularios, WhatsApp. Los agentes conectan las piezas — tú no tiras lo que ya pagaste.",
  },
];

export default function AgentesSection() {
  return (
    <section
      id="agentes-as-a-service"
      className="bg-foreground text-background py-20 lg:py-28"
    >
      <div className="container-content">
        <MotionSection className="mb-12 max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4 text-accent-glow">
            Agents-as-a-Service
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            No te lo contamos.
            <br />
            <span className="text-background/70">Te lo mostramos.</span>
          </h2>
          <p className="mt-5 text-base text-background/70 font-body leading-relaxed max-w-2xl">
            Un proyecto one-time te da la base. El retainer mensual te deja un
            equipo de agentes operando dentro de tu empresa — replicando la
            arquitectura que 0kbot corre sobre sí mismo. Sin promesas de
            &ldquo;transformación digital&rdquo;. Con procesos reales que funcionan el
            lunes siguiente.
          </p>
        </MotionSection>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pilares.map((p, i) => {
            const Icon = p.icon;
            return (
              <MotionSection key={p.titulo} delay={i * 0.07}>
                <div className="flex flex-col gap-3 bg-background/5 border border-background/10 rounded-xl px-5 py-5 hover:border-background/25 transition-colors h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-background/10 shrink-0">
                    <Icon size={20} className="text-accent-glow" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-background leading-snug">
                    {p.titulo}
                  </h3>
                  <p className="text-sm font-body text-background/70 leading-relaxed">
                    {p.texto}
                  </p>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection delay={0.25} className="pt-6 border-t border-background/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <TrackedLink
              href="/#cta-diagnostico"
              ctaName="Quiero ver un quick win"
              location="agentes_cta_primario"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary rounded-md font-semibold font-body text-sm hover:bg-accent-glow transition-colors"
            >
              Quiero ver un quick win →
            </TrackedLink>
            <p className="text-xs text-background/50 font-body">
              30 minutos · gratis · sin compromiso
            </p>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
