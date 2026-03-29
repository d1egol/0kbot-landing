export interface Escenario {
  slug: string;
  industria: string;
  tamano: string;
  problema: string;
  raizDelProblema: string;
  enfoque: string[];
  impactoEsperado: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  blogRelacionado?: { href: string; label: string };
}

export const escenarios: Escenario[] = [
  {
    slug: "distribuidoras",
    industria: "Distribuidora o empresa de despacho",
    tamano: "40–60 personas",
    problema:
      "Los pedidos se coordinan por WhatsApp y planilla Excel. El picking se hace de memoria, sin checklist, y los errores llegan con el cliente. Reenvíos, notas de crédito y clientes molestos son la norma.",
    raizDelProblema:
      "Falta de estandarización del proceso de picking. Sin un protocolo claro, cada operario hace las cosas a su manera.",
    enfoque: [
      "Mapeo del flujo de pedidos desde la recepción hasta el despacho",
      "Diseño de checklist digital de picking por línea de producto",
      "Centralización del registro de pedidos en un formulario único",
      "Tablero de seguimiento de pedidos y estado de despacho",
    ],
    impactoEsperado:
      "La estandarización del picking reduce errores en 50–80% según benchmarks de industria logística (Lean Institute). El tiempo de coordinación baja al eliminar la doble entrada de datos.",
    metaTitle: "Automatización de Procesos en Distribuidoras Chile | 0kbot",
    metaDescription:
      "Reducimos errores de despacho y optimizamos el proceso de picking en distribuidoras chilenas. Checklist digital, tablero de pedidos y registro centralizado. Resultados en 12 semanas.",
    keywords: [
      "automatización procesos distribuidora Chile",
      "mejora procesos logística Chile",
      "estandarización picking distribuidora",
      "control despachos pyme Chile",
    ],
    blogRelacionado: {
      href: "/blog/reducir-horas-extras-automatizacion",
      label: "Cómo eliminar trabajo manual en operaciones logísticas",
    },
  },
  {
    slug: "empresas-servicios-tecnicos",
    industria: "Empresa de servicios técnicos o mantención",
    tamano: "30–50 personas",
    problema:
      "Los técnicos llegan a terreno sin el repuesto correcto porque no hay diagnóstico previo estandarizado. 1 de cada 3 visitas requiere una segunda. Los clientes esperan más, la empresa gasta más en traslados.",
    raizDelProblema:
      "Ausencia de protocolo de diagnóstico previo. La información del trabajo no se recopila antes de despachar al técnico.",
    enfoque: [
      "Protocolo de diagnóstico telefónico previo a cada visita",
      "Lista de materiales recomendada según tipo de trabajo e historial del equipo",
      "Registro digital del trabajo realizado para alimentar el historial",
      "Dashboard de órdenes activas y segundas visitas por tipo de falla",
    ],
    impactoEsperado:
      "Reducir las segundas visitas libera capacidad para atender más órdenes con la misma dotación, sin necesidad de contratar.",
    metaTitle: "Mejora de Procesos en Empresas de Servicios Técnicos Chile | 0kbot",
    metaDescription:
      "Reducimos segundas visitas y mejoramos la eficiencia de técnicos en empresas de mantención en Chile. Protocolo de diagnóstico previo, historial de equipos y dashboard de órdenes.",
    keywords: [
      "mejora procesos servicios técnicos Chile",
      "automatización mantención empresas Chile",
      "gestión órdenes de trabajo pyme",
      "eficiencia técnicos campo Chile",
    ],
  },
  {
    slug: "clinicas-centros-salud",
    industria: "Centro de salud, clínica o empresa con agenda",
    tamano: "10–30 personas",
    problema:
      "El 20–30% de las horas agendadas resultan en inasistencias. El personal llama manualmente para confirmar, quitando horas que deberían estar en la operación. La agenda queda con huecos que no se llenan.",
    raizDelProblema:
      "Proceso de confirmación manual e ineficiente. Sin una lista de espera activa, los cupos cancelados se pierden.",
    enfoque: [
      "Configuración de recordatorios automáticos por WhatsApp a 48 y 24 horas antes",
      "Lista de espera activa para llenar cupos cancelados automáticamente",
      "Registro de motivos de inasistencia para identificar patrones",
      "Tablero de ocupación y tasa de presentación por tipo de servicio",
    ],
    impactoEsperado:
      "Estudios del sector salud muestran reducciones del 30–50% en inasistencias con recordatorios automatizados (NEJM Catalyst). El personal recupera tiempo para la atención.",
    metaTitle: "Automatización de Clínicas y Centros de Salud en Chile | 0kbot",
    metaDescription:
      "Reducimos inasistencias y optimizamos agendas en clínicas y centros de salud en Chile. Recordatorios automáticos por WhatsApp, lista de espera activa y tablero de ocupación.",
    keywords: [
      "automatización clínica Chile",
      "reducir inasistencias centro salud",
      "gestión agenda clínica Chile",
      "recordatorios WhatsApp clínica",
    ],
    blogRelacionado: {
      href: "/blog/automatizacion-whatsapp-pymes",
      label: "Cómo automatizar WhatsApp en tu empresa de salud",
    },
  },
  {
    slug: "empresas-constructoras",
    industria: "Empresa constructora o de proyectos",
    tamano: "50–100 personas",
    problema:
      "Los informes de avance de obra llegan tarde, en formatos distintos según quien los haga, con datos de días atrás. La gerencia toma decisiones reactivas porque no tiene visibilidad actualizada.",
    raizDelProblema:
      "Sin un formato estándar de reporte y sin un canal de consolidación, la información queda fragmentada en cada obra.",
    enfoque: [
      "Diseño de reporte diario estandarizado de 5 minutos por jefe de obra",
      "Consolidación automática de todos los reportes en un tablero central",
      "Alerta automática cuando una variable clave sale del rango definido",
      "Histórico de avance por proyecto para proyecciones más precisas",
    ],
    impactoEsperado:
      "Información actualizada diariamente reduce el tiempo de detección de desviaciones. Las compras de emergencia reactivas disminuyen al anticipar los requerimientos con más tiempo.",
    metaTitle: "Mejora de Procesos en Empresas Constructoras Chile | 0kbot",
    metaDescription:
      "Mejoramos la visibilidad y gestión de obras en empresas constructoras en Chile. Reportes estandarizados, tablero de avance en tiempo real y alertas automáticas de desviaciones.",
    keywords: [
      "mejora procesos construcción Chile",
      "gestión obras constructoras Chile",
      "digitalización empresa constructora",
      "tablero avance obra Chile",
    ],
  },
  {
    slug: "bodegas-inventario",
    industria: "Empresa de distribución o bodega",
    tamano: "30–60 personas",
    problema:
      "El inventario no cuadra. El cierre mensual toma 2–3 días de tres personas, y siempre aparecen diferencias que nadie puede explicar. El equipo pasa tiempo valioso buscando errores en vez de operar.",
    raizDelProblema:
      "El registro de movimientos se hace al final del día o al cierre del mes, no en el momento que ocurre. Los errores se acumulan.",
    enfoque: [
      "Registro de movimiento en el momento que ocurre, desde el celular o tablet",
      "Responsable asignado por zona con visibilidad de su stock en tiempo real",
      "Conciliación automática al final de cada jornada",
      "Alerta de diferencias por encima de umbral definido",
    ],
    impactoEsperado:
      "El registro inmediato elimina la acumulación de errores. El cuadre mensual de días se convierte en una verificación de minutos.",
    metaTitle: "Control de Inventario para Pymes en Chile | 0kbot",
    metaDescription:
      "Optimizamos el control de inventario en bodegas y distribuidoras chilenas. Registro en tiempo real, conciliación automática y alertas de diferencias. Menos errores, menos tiempo en cierres.",
    keywords: [
      "control inventario pymes Chile",
      "gestión bodega Chile",
      "optimización inventario empresa Chile",
      "registro stock tiempo real pyme",
    ],
  },
  {
    slug: "empresas-facilities",
    industria: "Empresa de servicios masivos o facilities",
    tamano: "80+ personas",
    problema:
      "Los supervisores invierten 2–3 horas diarias en verificar que el personal esté en su puesto, desplazándose físicamente entre ubicaciones. El tiempo no alcanza para hacer supervisión real.",
    raizDelProblema:
      "La verificación de presencia es manual y presencial. No hay forma de saber sin ir a ver.",
    enfoque: [
      "Check-in digital por código QR en cada punto de trabajo",
      "Dashboard de cobertura en tiempo real para el supervisor",
      "Alerta automática si un punto queda sin cobertura",
      "Registro histórico de asistencia por punto y turno",
    ],
    impactoEsperado:
      "La digitalización del control de presencia libera tiempo de supervisión para actividades de mayor valor: capacitación, resolución de incidentes y mejora continua.",
    metaTitle: "Automatización de Empresas de Facilities y Servicios Masivos Chile | 0kbot",
    metaDescription:
      "Digitalizamos el control de presencia y supervisión en empresas de facilities en Chile. Check-in digital, dashboard en tiempo real y alertas de cobertura.",
    keywords: [
      "automatización facilities Chile",
      "control presencia personal Chile",
      "digitalización servicios masivos",
      "gestión supervisión campo Chile",
    ],
  },
];

export function getEscenarioBySlug(slug: string): Escenario | undefined {
  return escenarios.find((e) => e.slug === slug);
}
