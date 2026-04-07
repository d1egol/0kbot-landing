import { Shuffle, Clock, EyeOff, FileText, BarChart3, UserX } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

const soluciones = [
  {
    icon: Shuffle,
    title: "Desorden operativo",
    problema: "Cada persona trabaja distinto, no hay un flujo claro y las cosas se pierden.",
    solucion: "Levantamos los procesos clave, definimos un flujo estándar y lo implementamos con herramientas que lo sostengan.",
  },
  {
    icon: Clock,
    title: "Pérdida de tiempo en tareas manuales",
    problema: "Horas invertidas en copiar datos, armar informes y coordinar por WhatsApp.",
    solucion: "Automatizamos tareas repetitivas, centralizamos la comunicación y eliminamos el doble registro.",
  },
  {
    icon: EyeOff,
    title: "Falta de visibilidad",
    problema: "No sabes el estado real de tu operación sin preguntar uno por uno.",
    solucion: "Creamos tableros con indicadores clave que se actualizan automáticamente.",
  },
  {
    icon: FileText,
    title: "Registro manual disperso",
    problema: "Información en planillas, correos, cuadernos y la cabeza de cada uno.",
    solucion: "Estandarizamos los registros con formularios y bases de datos centralizadas.",
  },
  {
    icon: BarChart3,
    title: "Reportes lentos y poco confiables",
    problema: "Armar un informe toma días y siempre hay datos que no cuadran.",
    solucion: "Automatizamos reportes que se generan solos con datos consistentes y actualizados.",
  },
  {
    icon: UserX,
    title: "Seguimiento comercial débil",
    problema: "Clientes que se pierden, cotizaciones sin seguimiento y oportunidades olvidadas.",
    solucion: "Organizamos el pipeline de ventas con seguimiento estructurado y alertas automáticas.",
  },
];

export default function ComparacionSection() {
  return (
    <section className="section-padding surface-cool">
      <div className="container-content">
        <MotionSection className="mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Soluciones concretas
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
            ¿Cuál es tu principal desafío operativo?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl font-body">
            Identifica tu problema y conoce cómo lo resolvemos con optimización de procesos en pymes.
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soluciones.map((s, i) => {
            const Icon = s.icon;
            return (
              <MotionSection key={s.title} delay={i * 0.07}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-colors h-full flex flex-col">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-base text-foreground mb-3">
                        {s.title}
                      </h3>
                      <div className="mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-destructive/70">
                          El problema
                        </span>
                        <p className="text-sm text-muted-foreground font-body mt-1 leading-relaxed">
                          {s.problema}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                          Cómo lo resolvemos
                        </span>
                        <p className="text-sm text-foreground font-body mt-1 leading-relaxed">
                          {s.solucion}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionSection>
            );
          })}
        </div>

        <MotionSection delay={0.2} className="mt-10 text-center">
          <OpenModalButton location="comparacion" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium font-body text-sm hover:bg-primary/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>
        </MotionSection>
      </div>
    </section>
  );
}
