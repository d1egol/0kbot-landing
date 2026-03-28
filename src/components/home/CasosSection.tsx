import MotionSection from "@/components/ui/MotionSection";
import CasosCarousel from "@/components/ui/CasosCarousel";

const casos = [
  {
    industria: "Empresa de frutas y verduras",
    tamano: "Pyme familiar",
    problema: "Los pedidos llegaban por WhatsApp y nadie los registraba en un solo lugar. El stock se contaba a mano al cierre del día y siempre había diferencias.",
    solucion: "Automatización del registro de pedidos y movimientos de inventario. Un solo sistema donde toda la operación queda registrada en tiempo real.",
    resultado: "Stock en tiempo real sin conteo manual. Pedidos centralizados sin pérdidas ni duplicados. Implementado en 8 semanas.",
    metrica: "✓",
    metricaLabel: "primer cliente 0kbot",
  },
  {
    industria: "Distribuidora de alimentos",
    tamano: "55 personas",
    problema: "El 18% de los pedidos salían con al menos un error. Reenvíos, notas de crédito y clientes molestos eran el pan de cada día.",
    solucion: "Estandarización del proceso de picking con checklist digital en tablet. Sin sistema nuevo, sin inversión en software.",
    resultado: "$5.8M anuales en reenvíos y notas de crédito eliminados. 6 semanas de implementación.",
    metrica: "-88%",
    metricaLabel: "errores de despacho",
  },
  {
    industria: "Empresa de mantención eléctrica",
    tamano: "42 personas",
    problema: "1 de cada 3 visitas técnicas requería una segunda visita porque el técnico llegaba sin el repuesto correcto.",
    solucion: "Diagnóstico estandarizado previo a la visita + lista de materiales automatizada según historial.",
    resultado: "Segundas visitas bajaron de 31% a 7%. La misma dotación atiende 26% más órdenes al mes.",
    metrica: "+26%",
    metricaLabel: "capacidad sin contratar",
  },
  {
    industria: "Clínica dental",
    tamano: "19 personas",
    problema: "El 27% de las horas agendadas no se presentaban. La recepcionista pasaba 2 horas diarias llamando para confirmar.",
    solucion: "Confirmación automática por WhatsApp 48 y 24 horas antes. Lista de espera activa para llenar cancelaciones.",
    resultado: "Inasistencias bajaron al 8%. $2.1M mensuales en horas recuperadas sin agregar sillones.",
    metrica: "-70%",
    metricaLabel: "inasistencias",
  },
  {
    industria: "Empresa constructora",
    tamano: "67 personas",
    problema: "Los informes de avance llegaban cada viernes, a mano, con datos del martes.",
    solucion: "Reporte diario estandarizado de 5 minutos por jefe de obra + consolidación automática para gerencia.",
    resultado: "Tiempo de detección de desviaciones bajó de 5 días a 1. 2 compras de emergencia eliminadas al mes.",
    metrica: "5×",
    metricaLabel: "más rápido detectar desviaciones",
  },
  {
    industria: "Importadora de insumos",
    tamano: "34 personas",
    problema: "Cada fin de mes, 3 personas pasaban 2 días haciendo cuadre de inventario.",
    solucion: "Registro en el momento del movimiento + responsable asignado por zona.",
    resultado: "Diferencias de inventario bajaron 94%. El equipo recuperó 48 horas mensuales.",
    metrica: "-94%",
    metricaLabel: "diferencias de inventario",
  },
  {
    industria: "Empresa de aseo y facilities",
    tamano: "110 personas",
    problema: "Los supervisores hacían rondas de 3 horas para verificar cobertura.",
    solucion: "Check-in digital por QR + dashboard de cobertura en tiempo real.",
    resultado: "Tiempo de supervisión bajó de 3 horas a 40 minutos. Incidentes: 0 en el último trimestre.",
    metrica: "-78%",
    metricaLabel: "tiempo de supervisión",
  },
];

export default function CasosSection() {
  return (
    <section id="casos" className="surface-warm py-20 lg:py-32">
      <div className="container-content">
        <MotionSection className="mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Lo que encontramos
          </h2>
          <p className="mt-3 text-lg text-muted-foreground font-body">
            Y cuánto costaba no saberlo.
          </p>
        </MotionSection>
        <CasosCarousel casos={casos} />
      </div>
    </section>
  );
}
