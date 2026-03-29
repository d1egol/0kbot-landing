import type { Metadata } from "next";
import MotionSection from "@/components/ui/MotionSection";
import OpenModalButton from "@/components/ui/OpenModalButton";

export const metadata: Metadata = {
  title: "Escenarios y soluciones · 0kbot",
  description:
    "Problemas operativos comunes en pymes chilenas y cómo los abordamos: coordinación por WhatsApp, errores de despacho, inasistencias, inventario descontrolado y más.",
  keywords: [
    "problemas operativos pymes Chile",
    "mejora de procesos distribuidoras",
    "automatización servicios técnicos Chile",
    "estandarización procesos pymes Santiago",
  ],
};

const escenarios = [
  {
    industria: "Distribuidora o empresa de despacho",
    tamano: "40–60 personas",
    problema:
      "Los pedidos se coordinan por WhatsApp y planilla Excel. El picking se hace de memoria, sin checklist, y los errores llegan con el cliente. Reenvíos, notas de crédito y clientes molestos son la norma.",
    raizDelProblema: "Falta de estandarización del proceso de picking. Sin un protocolo claro, cada operario hace las cosas a su manera.",
    enfoque: [
      "Mapeo del flujo de pedidos desde la recepción hasta el despacho",
      "Diseño de checklist digital de picking por línea de producto",
      "Centralización del registro de pedidos en un formulario único",
      "Tablero de seguimiento de pedidos y estado de despacho",
    ],
    impactoEsperado:
      "La estandarización del picking reduce errores en 50–80% según benchmarks de industria logística (Lean Institute). El tiempo de coordinación baja al eliminar la doble entrada de datos.",
  },
  {
    industria: "Empresa de servicios técnicos o mantención",
    tamano: "30–50 personas",
    problema:
      "Los técnicos llegan a terreno sin el repuesto correcto porque no hay diagnóstico previo estandarizado. 1 de cada 3 visitas requiere una segunda. Los clientes esperan más, la empresa gasta más en traslados.",
    raizDelProblema: "Ausencia de protocolo de diagnóstico previo. La información del trabajo no se recopila antes de despachar al técnico.",
    enfoque: [
      "Protocolo de diagnóstico telefónico previo a cada visita",
      "Lista de materiales recomendada según tipo de trabajo e historial del equipo",
      "Registro digital del trabajo realizado para alimentar el historial",
      "Dashboard de órdenes activas y segundas visitas por tipo de falla",
    ],
    impactoEsperado:
      "Reducir las segundas visitas libera capacidad para atender más órdenes con la misma dotación, sin necesidad de contratar.",
  },
  {
    industria: "Centro de salud, clínica o empresa con agenda",
    tamano: "10–30 personas",
    problema:
      "El 20–30% de las horas agendadas resultan en inasistencias. El personal llama manualmente para confirmar, quitando horas que deberían estar en la operación. La agenda queda con huecos que no se llenan.",
    raizDelProblema: "Proceso de confirmación manual e ineficiente. Sin una lista de espera activa, los cupos cancelados se pierden.",
    enfoque: [
      "Configuración de recordatorios automáticos por WhatsApp a 48 y 24 horas antes",
      "Lista de espera activa para llenar cupos cancelados automáticamente",
      "Registro de motivos de inasistencia para identificar patrones",
      "Tablero de ocupación y tasa de presentación por tipo de servicio",
    ],
    impactoEsperado:
      "Estudios del sector salud muestran reducciones del 30–50% en inasistencias con recordatorios automatizados (NEJM Catalyst). El personal recupera tiempo para la atención.",
  },
  {
    industria: "Empresa constructora o de proyectos",
    tamano: "50–100 personas",
    problema:
      "Los informes de avance de obra llegan tarde, en formatos distintos según quien los haga, con datos de días atrás. La gerencia toma decisiones reactivas porque no tiene visibilidad actualizada.",
    raizDelProblema: "Sin un formato estándar de reporte y sin un canal de consolidación, la información queda fragmentada en cada obra.",
    enfoque: [
      "Diseño de reporte diario estandarizado de 5 minutos por jefe de obra",
      "Consolidación automática de todos los reportes en un tablero central",
      "Alerta automática cuando una variable clave sale del rango definido",
      "Histórico de avance por proyecto para proyecciones más precisas",
    ],
    impactoEsperado:
      "Información actualizada diariamente reduce el tiempo de detección de desviaciones. Las compras de emergencia reactivas disminuyen al anticipar los requerimientos con más tiempo.",
  },
  {
    industria: "Empresa de distribución o bodega",
    tamano: "30–60 personas",
    problema:
      "El inventario no cuadra. El cierre mensual toma 2–3 días de tres personas, y siempre aparecen diferencias que nadie puede explicar. El equipo pasa tiempo valioso buscando errores en vez de operar.",
    raizDelProblema: "El registro de movimientos se hace al final del día o al cierre del mes, no en el momento que ocurre. Los errores se acumulan.",
    enfoque: [
      "Registro de movimiento en el momento que ocurre, desde el celular o tablet",
      "Responsable asignado por zona con visibilidad de su stock en tiempo real",
      "Conciliación automática al final de cada jornada",
      "Alerta de diferencias por encima de umbral definido",
    ],
    impactoEsperado:
      "El registro inmediato elimina la acumulación de errores. El cuadre mensual de días se convierte en una verificación de minutos.",
  },
  {
    industria: "Empresa de servicios masivos o facilities",
    tamano: "80+ personas",
    problema:
      "Los supervisores invierten 2–3 horas diarias en verificar que el personal esté en su puesto, desplazándose físicamente entre ubicaciones. El tiempo no alcanza para hacer supervisión real.",
    raizDelProblema: "La verificación de presencia es manual y presencial. No hay forma de saber sin ir a ver.",
    enfoque: [
      "Check-in digital por código QR en cada punto de trabajo",
      "Dashboard de cobertura en tiempo real para el supervisor",
      "Alerta automática si un punto queda sin cobertura",
      "Registro histórico de asistencia por punto y turno",
    ],
    impactoEsperado:
      "La digitalización del control de presencia libera tiempo de supervisión para actividades de mayor valor: capacitación, resolución de incidentes y mejora continua.",
  },
];

export default function CasosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Escenarios y soluciones
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Los mismos problemas aparecen una y otra vez.
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Distribuidoras, constructoras, clínicas, empresas de servicios: los dolores operativos son más comunes de lo que parece. Así es como los abordamos.
          </p>
        </div>
      </section>

      {/* Aviso de honestidad */}
      <section className="bg-amber-50 border-b border-amber-100 py-4">
        <div className="container-wide">
          <p className="text-sm text-amber-800 font-body text-center">
            <strong>Nota:</strong> Estos son escenarios basados en problemas comunes de la industria. Las métricas de referencia provienen de estudios del sector. Estamos en fase de lanzamiento y documentando nuestros primeros proyectos.
          </p>
        </div>
      </section>

      {/* Escenarios */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-12">
            {escenarios.map((e, i) => (
              <MotionSection key={e.industria} delay={i * 0.04}>
                <div className="bg-card border border-muted rounded-xl overflow-hidden shadow-card">
                  <div className="bg-primary px-6 py-4 flex items-center justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-primary-foreground text-lg">
                        {e.industria}
                      </h2>
                      <p className="text-primary-foreground/60 text-sm">{e.tamano}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-red-500/80 mb-2">
                          El problema
                        </h3>
                        <p className="text-sm text-foreground font-body leading-relaxed">
                          {e.problema}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Raíz del problema
                        </h3>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed italic">
                          {e.raizDelProblema}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                          Nuestro enfoque
                        </h3>
                        <ul className="space-y-2">
                          {e.enfoque.map((a) => (
                            <li key={a} className="flex items-start gap-3 text-sm text-foreground font-body">
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: "#D4A853" }}
                              />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Impacto esperado (referencia de industria)
                        </h3>
                        <p className="text-sm text-foreground font-body leading-relaxed">
                          {e.impactoEsperado}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Reconoces alguno de estos problemas?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Agendemos 30 minutos para revisar tu operación. Sin compromiso.
          </p>
          <OpenModalButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#1A1A1A] rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors">
            Agendar diagnóstico gratis →
          </OpenModalButton>
        </div>
      </section>
    </>
  );
}
