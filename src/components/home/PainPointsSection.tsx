import MotionSection from "@/components/ui/MotionSection";
import {
  MessagesSquare,
  Files,
  PackageX,
  FileBarChart,
  UserX,
  Flame,
} from "lucide-react";

const cards = [
  {
    number: "01",
    Icon: MessagesSquare,
    titulo: "WhatsApp desordenado",
    dolor: "Tu equipo responde lo mismo 40 veces al día.",
    costo: "Horas perdidas, errores y clientes esperando.",
    solucion: "Lo convertimos en flujo, registro y seguimiento.",
    border: "border-emerald-200 hover:border-emerald-300",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    number: "02",
    Icon: Files,
    titulo: "Excel duplicado",
    dolor: "Tres versiones del mismo archivo y nadie sabe cuál es la buena.",
    costo: "Decisiones con datos viejos y reprocesos en cierre.",
    solucion: "Una fuente única de datos, con permisos y auditoría.",
    border: "border-amber-200 hover:border-amber-300",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    number: "03",
    Icon: PackageX,
    titulo: "Pedidos perdidos",
    dolor: "Algunos clientes ya no preguntan. Otros se quejan después.",
    costo: "Plata que ya estaba ganada y se va por la cañería.",
    solucion: "Captura, asignación y trazabilidad de cada pedido.",
    border: "border-red-200 hover:border-red-300",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    number: "04",
    Icon: FileBarChart,
    titulo: "Reportes manuales",
    dolor: "Cada lunes alguien arma el reporte copiando y pegando 4 horas.",
    costo: "Tu gerencia toma decisiones tarde y con números desactualizados.",
    solucion: "Tableros automáticos que ven lo mismo y se actualizan solos.",
    border: "border-purple-200 hover:border-purple-300",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    number: "05",
    Icon: UserX,
    titulo: "Clientes sin seguimiento",
    dolor: "Cotizaste, mandaste el correo y nunca más supiste.",
    costo: "Ventas que estaban casi cerradas se enfrían sin que te enteres.",
    solucion: "Pipeline simple con recordatorios y estado de cada cuenta.",
    border: "border-blue-200 hover:border-blue-300",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    number: "06",
    Icon: Flame,
    titulo: "Dueño apagando incendios",
    dolor: "Tu día es resolver lo que nadie más puede resolver.",
    costo: "No avanzas en nada estratégico. Y si te enfermas, todo se detiene.",
    solucion: "Estandarizamos, documentamos y delegamos sin pánico.",
    border: "border-orange-200 hover:border-orange-300",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function PainPointsSection() {
  return (
    <section id="problemas" className="bg-background py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            El síndrome del héroe operativo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Seis señales típicas de que tu operación depende de memoria,
            WhatsApp y Excel — y cómo las abordamos.
          </p>
        </MotionSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.Icon;
            return (
              <MotionSection key={card.titulo} delay={i * 0.06}>
                <div
                  className={`relative bg-card border rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all h-full overflow-hidden ${card.border}`}
                >
                  {/* Number decoration */}
                  <span className="absolute top-4 right-5 font-heading font-bold text-5xl text-muted/30 select-none leading-none">
                    {card.number}
                  </span>

                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`flex items-center justify-center w-11 h-11 rounded-xl shrink-0 ${card.iconBg}`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-heading font-semibold text-base text-foreground pt-2">
                      {card.titulo}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    <p className="text-sm text-foreground font-body leading-relaxed">
                      {card.dolor}
                    </p>
                    <p className="text-xs text-muted-foreground font-body leading-relaxed">
                      <span className="font-semibold text-foreground/70">
                        Costo oculto:
                      </span>{" "}
                      {card.costo}
                    </p>
                    <p className="text-xs font-body leading-relaxed pt-1.5 border-t border-muted/60">
                      <span className="font-semibold text-primary">
                        0kbot:
                      </span>{" "}
                      <span className="text-muted-foreground">
                        {card.solucion}
                      </span>
                    </p>
                  </div>
                </div>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
