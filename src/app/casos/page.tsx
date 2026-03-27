import type { Metadata } from "next";
import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de éxito",
  description:
    "Casos reales de mejora de procesos en pymes chilenas. Resultados medibles: -88% errores, +26% capacidad, -70% inasistencias y más.",
  keywords: [
    "casos de éxito consultoría procesos",
    "resultados mejora de procesos Chile",
    "pymes chilenas eficiencia",
  ],
};

const casosMetrica = [
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
    solucion: "Registro en el momento del movimiento + responsable asignado por zona. El cuadre mensual desapareció.",
    resultado: "Diferencias de inventario bajaron 94%. El equipo recuperó 48 horas mensuales para trabajo productivo.",
    metrica: "-94%",
    metricaLabel: "diferencias de inventario",
  },
  {
    industria: "Empresa de aseo y facilities",
    tamano: "110 personas",
    problema: "Los supervisores hacían rondas de 3 horas para verificar cobertura.",
    solucion: "Check-in digital por QR en cada punto + dashboard de cobertura en tiempo real.",
    resultado: "Tiempo de supervisión bajó de 3 horas a 40 minutos. Incidentes: 0 en el último trimestre.",
    metrica: "-78%",
    metricaLabel: "tiempo de supervisión",
  },
];

const casosNarrativos = [
  {
    sector: "Empresa de servicios profesionales",
    contexto: "Empresa de 25 personas que gestionaba proyectos con planillas separadas por área. El gerente no tenía visibilidad sin reuniones semanales.",
    problema: "Información fragmentada, reportes manuales de dos días y decisiones basadas en percepciones.",
    acciones: ["Mapeo de procesos de gestión de proyectos", "Centralización en plataforma única", "Automatización de reportes de estado", "Tablero de indicadores clave"],
    resultado: "60% menos tiempo en reportes. Visibilidad en tiempo real del pipeline. Mejor asignación de recursos.",
  },
  {
    sector: "Comercio mayorista",
    contexto: "Distribuidor con 15 vendedores que recibían pedidos por WhatsApp. Los errores eran frecuentes y los reclamos iban en aumento.",
    problema: "Sin registro formal de pedidos, errores de despacho y clientes insatisfechos.",
    acciones: ["Estandarización del flujo de pedidos", "Formularios digitales de captura", "Confirmaciones automáticas a clientes", "Tablero de seguimiento"],
    resultado: "80% menos errores en pedidos. Trazabilidad completa. Clientes más satisfechos.",
  },
  {
    sector: "Centro de salud",
    contexto: "Clínica con agenda manual, fichas en papel y reportes mensuales que requerían dos días de trabajo administrativo.",
    problema: "Pérdida de fichas, doble agenda y falta de indicadores de gestión.",
    acciones: ["Digitalización de fichas y agendamiento", "Recordatorios automáticos a pacientes", "Reportes automáticos de atención", "Dashboard de ocupación"],
    resultado: "Reportes en minutos. Mejor control de agendamiento. Reducción de inasistencias.",
  },
];

export default function CasosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Casos y resultados
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Lo que encontramos. Y cuánto costaba no saberlo.
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Resultados medibles de pymes reales. Con números, no con
            &ldquo;se mejoró&rdquo;.
          </p>
        </div>
      </section>

      {/* Casos con métrica */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <MotionSection className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Resultados con métricas específicas
            </h2>
          </MotionSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {casosMetrica.map((caso, i) => (
              <MotionSection key={caso.industria} delay={i * 0.06}>
                <div className="bg-card border border-muted rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow h-full flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-muted-foreground font-body">
                      {caso.industria} · {caso.tamano}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3 flex-1">
                    {caso.problema}
                  </p>
                  <p className="text-xs text-foreground font-body mb-4 italic">
                    {caso.solucion}
                  </p>
                  <div
                    className="pt-4 border-t-2"
                    style={{ borderTopColor: "#D4A853" }}
                  >
                    <p
                      className="font-mono text-3xl font-bold"
                      style={{ color: "#1B5FA6" }}
                    >
                      {caso.metrica}
                    </p>
                    <p className="text-xs text-muted-foreground font-body mt-1">
                      {caso.metricaLabel}
                    </p>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* Casos narrativos */}
      <section className="section-padding surface-warm">
        <div className="container-narrow">
          <MotionSection className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Historias completas
            </h2>
          </MotionSection>
          <div className="space-y-10">
            {casosNarrativos.map((caso) => (
              <MotionSection key={caso.sector}>
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
                  <div className="bg-primary px-6 py-4">
                    <h3 className="font-heading font-bold text-primary-foreground text-lg">
                      {caso.sector}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8 space-y-5">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Contexto
                      </h4>
                      <p className="text-sm text-foreground font-body leading-relaxed">
                        {caso.contexto}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-destructive/70 mb-2">
                        Problema
                      </h4>
                      <p className="text-sm text-foreground font-body leading-relaxed">
                        {caso.problema}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                        Acciones implementadas
                      </h4>
                      <ul className="space-y-2">
                        {caso.acciones.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-3 text-sm text-foreground font-body"
                          >
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
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Resultado
                      </h4>
                      <p className="text-sm font-medium text-foreground font-body leading-relaxed">
                        {caso.resultado}
                      </p>
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
            ¿Tu pyme enfrenta desafíos similares?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Conversemos para entender cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Solicitar diagnóstico <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
