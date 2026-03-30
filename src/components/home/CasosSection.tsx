import MotionSection from "@/components/ui/MotionSection";
import CasosCarousel from "@/components/ui/CasosCarousel";

const escenarios = [
  {
    industria: "Distribuidora de alimentos",
    tamano: "40–60 personas",
    problema:
      "Los pedidos se coordinan por WhatsApp y planilla Excel. El picking se hace de memoria, sin checklist, y los errores llegan con el cliente.",
    enfoque:
      "Estandarizar el proceso de picking con checklist digital. Centralizar el registro de pedidos para eliminar la doble entrada de datos.",
    impactoEsperado:
      "La estandarización del picking reduce errores típicamente en un 50–80% según benchmarks de la industria logística (Lean Institute).",
    iconName: "Truck" as const,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    industria: "Empresa de servicios técnicos",
    tamano: "30–50 personas",
    problema:
      "Los técnicos llegan a terreno sin el repuesto correcto porque no hay diagnóstico previo estandarizado. 1 de cada 3 visitas requiere una segunda.",
    enfoque:
      "Protocolo de diagnóstico telefónico previo a la visita + lista de materiales recomendada según tipo de trabajo y historial.",
    impactoEsperado:
      "Reducir las segundas visitas libera capacidad para atender más órdenes con la misma dotación, sin contratar.",
    iconName: "Wrench" as const,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
  {
    industria: "Centro de salud o servicios con agenda",
    tamano: "10–30 personas",
    problema:
      "El 20–30% de las horas agendadas resultan en inasistencias. El personal llama manualmente para confirmar, quitando tiempo de la operación.",
    enfoque:
      "Recordatorios automáticos por WhatsApp a 48 y 24 horas antes de la cita. Lista de espera activa para llenar cancelaciones.",
    impactoEsperado:
      "Estudios del sector salud muestran reducciones del 30–50% en inasistencias con recordatorios automatizados (NEJM Catalyst).",
    iconName: "Heart" as const,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
  },
];

export default function CasosSection() {
  return (
    <section id="casos" className="surface-warm py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Cómo funciona en la práctica
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-body">
            Problemas reales que resolvemos con el mismo método.
          </p>
        </MotionSection>
        <CasosCarousel casos={escenarios} />
      </div>
    </section>
  );
}
