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
    metricaDestacada: "↓ 80%",
    metricaLabel: "errores de picking",
    accentColor: "#1B5FA6",
    accentBg: "#EFF6FF",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="4" y="16" width="28" height="18" rx="3" fill="#DBEAFE" stroke="#1B5FA6" strokeWidth="1.5"/>
        <path d="M4 22h28" stroke="#1B5FA6" strokeWidth="1.5"/>
        <rect x="10" y="8" width="16" height="10" rx="2" fill="#BFDBFE" stroke="#1B5FA6" strokeWidth="1.5"/>
        <path d="M14 8V6a6 6 0 0112 0v2" stroke="#1B5FA6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 27h4M10 31h6" stroke="#1B5FA6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="32" r="6" fill="#10B981"/>
        <path d="M29.5 32l2 2 3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
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
    metricaDestacada: "−64%",
    metricaLabel: "visitas fallidas",
    accentColor: "#7C3AED",
    accentBg: "#F5F3FF",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <circle cx="20" cy="20" r="16" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5"/>
        <path d="M13 20c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.9-1.7 5.4-4.2 6.6L22 28h-4l-.8-2.4C14.7 25.4 13 22.9 13 20z" fill="#7C3AED" opacity=".15"/>
        <path d="M14 20a6 6 0 1112 0" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 16v4l2.5 2.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27 31l4-4" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="29" cy="33" r="3" fill="#10B981"/>
      </svg>
    ),
  },
  {
    industria: "Centro de salud · Servicios con agenda",
    tamano: "10–30 personas",
    problema:
      "El 20–30% de las horas agendadas resultan en inasistencias. El personal llama manualmente para confirmar, quitando tiempo de la operación.",
    enfoque:
      "Recordatorios automáticos por WhatsApp a 48 y 24 horas antes de la cita. Lista de espera activa para llenar cancelaciones.",
    impactoEsperado:
      "Estudios del sector salud muestran reducciones del 30–50% en inasistencias con recordatorios automatizados (NEJM Catalyst).",
    metricaDestacada: "↓ 50%",
    metricaLabel: "inasistencias",
    accentColor: "#059669",
    accentBg: "#ECFDF5",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect x="6" y="8" width="28" height="26" rx="3" fill="#D1FAE5" stroke="#059669" strokeWidth="1.5"/>
        <path d="M6 16h28" stroke="#059669" strokeWidth="1.5"/>
        <path d="M14 4v6M26 4v6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="11" y="21" width="6" height="6" rx="1" fill="#059669" opacity=".3" stroke="#059669" strokeWidth="1"/>
        <rect x="23" y="21" width="6" height="6" rx="1" stroke="#059669" strokeWidth="1" strokeDasharray="2 1"/>
        <path d="M20 21v6M17 24h6" stroke="#059669" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
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
