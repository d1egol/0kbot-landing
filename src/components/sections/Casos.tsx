import AnimatedSection from "@/components/ui/AnimatedSection";

const casos = [
  {
    industria: "Distribuidora de alimentos",
    tamano: "55 personas",
    problema:
      "El 18% de los pedidos salían con al menos un error. Reenvíos, notas de crédito y clientes molestos eran el pan de cada día.",
    solucion:
      "Estandarización del proceso de picking con checklist digital en tablet. Sin sistema nuevo, sin inversión en software.",
    resultado: "$5.8M anuales en reenvíos y notas de crédito eliminados. 6 semanas de implementación.",
    metrica: "-88%",
    metricaLabel: "errores de despacho",
  },
  {
    industria: "Empresa de mantención eléctrica",
    tamano: "42 personas",
    problema:
      "1 de cada 3 visitas técnicas requería una segunda visita porque el técnico llegaba sin el repuesto correcto. El cliente esperaba, el técnico viajaba de vuelta.",
    solucion:
      "Diagnóstico estandarizado previo a la visita + lista de materiales automatizada según historial.",
    resultado: "Segundas visitas bajaron de 31% a 7%. La misma dotación atiende 26% más órdenes al mes.",
    metrica: "+26%",
    metricaLabel: "capacidad sin contratar",
  },
  {
    industria: "Clínica dental",
    tamano: "19 personas",
    problema:
      "El 27% de las horas agendadas no se presentaban. La recepcionista pasaba 2 horas diarias llamando para confirmar.",
    solucion:
      "Confirmación automática por WhatsApp 48 y 24 horas antes. Lista de espera activa para llenar cancelaciones.",
    resultado: "Inasistencias bajaron al 8%. $2.1M mensuales en horas recuperadas sin agregar sillones.",
    metrica: "-70%",
    metricaLabel: "inasistencias",
  },
  {
    industria: "Empresa constructora",
    tamano: "67 personas",
    problema:
      "Los informes de avance de obra llegaban cada viernes, a mano, con datos del martes. Las decisiones de compra se hacían sobre información vieja.",
    solucion:
      "Reporte diario estandarizado de 5 minutos por jefe de obra + consolidación automática para gerencia.",
    resultado: "Tiempo de detección de desviaciones bajó de 5 días a 1. 2 compras de emergencia eliminadas al mes.",
    metrica: "5×",
    metricaLabel: "más rápido detectar desviaciones",
  },
  {
    industria: "Importadora de insumos",
    tamano: "34 personas",
    problema:
      "Cada fin de mes, 3 personas pasaban 2 días haciendo \"cuadre de inventario\". Las diferencias aparecían pero nadie sabía de dónde venían.",
    solucion:
      "Registro en el momento del movimiento + responsable asignado por zona. El cuadre mensual desapareció.",
    resultado: "Diferencias de inventario bajaron 94%. El equipo recuperó 48 horas mensuales para trabajo productivo.",
    metrica: "-94%",
    metricaLabel: "diferencias de inventario",
  },
  {
    industria: "Empresa de aseo y facilities",
    tamano: "110 personas",
    problema:
      "Los supervisores hacían rondas de 3 horas para verificar cobertura. No había trazabilidad de qué punto estaba atendido y cuál no.",
    solucion:
      "Check-in digital por QR en cada punto de servicio + dashboard de cobertura en tiempo real.",
    resultado: "Tiempo de supervisión bajó de 3 horas a 40 minutos. Incidentes por punto no atendido: 0 en el último trimestre.",
    metrica: "-78%",
    metricaLabel: "tiempo de supervisión",
  },
];

export default function Casos() {
  return (
    <section className="bg-muted/30 py-20 lg:py-32">
      <div className="container-content">
        <AnimatedSection className="mb-14">
          <h2 className="font-display text-display-lg font-bold text-foreground">
            Lo que encontramos
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-sans">
            Y cuánto costaba no saberlo.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casos.map((caso, i) => (
            <AnimatedSection key={caso.industria} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <div className="bg-card border border-muted rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
                {/* Header */}
                <div className="p-6 pb-4 border-b border-muted">
                  <p className="text-xs font-sans font-medium text-muted-foreground uppercase tracking-wide mb-1">
                    {caso.industria}
                  </p>
                  <p className="text-sm font-sans text-muted-foreground">
                    {caso.tamano}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 space-y-4">
                  <div>
                    <p className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide mb-1.5">
                      El problema
                    </p>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {caso.problema}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-sans font-semibold text-foreground uppercase tracking-wide mb-1.5">
                      La solución
                    </p>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {caso.solucion}
                    </p>
                  </div>
                </div>

                {/* Resultado */}
                <div
                  className="p-6 pt-4 border-t-2"
                  style={{ borderTopColor: "#D4A853" }}
                >
                  <p className="font-mono-metric text-xl font-bold text-primary">
                    {caso.metrica}
                  </p>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    {caso.metricaLabel}
                  </p>
                  <p className="text-xs text-muted-foreground font-sans mt-2 italic">
                    {caso.resultado}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
