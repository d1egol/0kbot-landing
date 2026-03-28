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
  },
  {
    industria: "Empresa constructora o de proyectos",
    tamano: "50–100 personas",
    problema:
      "Los informes de avance de obra llegan tarde, en formatos distintos, y la gerencia toma decisiones con información de días atrás.",
    enfoque:
      "Reporte diario estandarizado de 5 minutos por jefe de obra + consolidación automática para gerencia en un tablero único.",
    impactoEsperado:
      "Información actualizada diariamente reduce el tiempo de detección de desviaciones y elimina compras de emergencia reactivas.",
  },
  {
    industria: "Empresa de distribución o bodega",
    tamano: "30–60 personas",
    problema:
      "El inventario no cuadra. El cierre mensual toma días y siempre aparecen diferencias que nadie puede explicar.",
    enfoque:
      "Registro del movimiento en el momento que ocurre, con responsable asignado por zona. El cuadre masivo de fin de mes desaparece.",
    impactoEsperado:
      "El registro inmediato de movimientos elimina la acumulación de errores que provoca los descuadres masivos al cierre.",
  },
  {
    industria: "Empresa de servicios masivos o facilities",
    tamano: "80+ personas",
    problema:
      "Los supervisores invierten horas diarias en verificar que el personal esté en su puesto, desplazándose físicamente entre ubicaciones.",
    enfoque:
      "Check-in digital por QR en cada punto de trabajo + dashboard de cobertura en tiempo real para el supervisor.",
    impactoEsperado:
      "La digitalización del control de asistencia libera tiempo de supervisión para tareas de mayor valor y respuesta a incidentes.",
  },
];

export default function CasosSection() {
  return (
    <section id="casos" className="surface-warm py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Escenarios comunes
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-body">
            Problemas típicos de pymes y cómo los abordamos.
          </p>
        </MotionSection>
        <CasosCarousel casos={escenarios} />
        <p className="mt-8 text-xs text-muted-foreground font-body text-center">
          Escenarios basados en problemas comunes de la industria. Las métricas de referencia provienen de estudios del sector, no de proyectos propios.
        </p>
      </div>
    </section>
  );
}
