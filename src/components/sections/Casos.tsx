import AnimatedSection from "@/components/ui/AnimatedSection";

const casos = [
  {
    industria: "Distribuidora de repuestos",
    tamano: "45 personas",
    problema:
      "Un supervisor dedicaba 3 horas diarias a \"arreglar\" órdenes mal ingresadas. Llevaba 2 años. Pensaban que era \"normal\".",
    solucion:
      "Automatización de validación en el ingreso. El supervisor ahora atiende proveedores.",
    resultado: "$4.200.000 anuales en horas recuperadas. 5 semanas de implementación.",
    metrica: "$4.2M",
    metricaLabel: "recuperados al año",
  },
  {
    industria: "Consultora de servicios",
    tamano: "32 personas",
    problema:
      "La gerenta comercial era la única que sabía el estado de todos los proyectos. Estaba quemada. Clientes insatisfechos porque \"nadie les responde\".",
    solucion:
      "Dashboard visible para clientes + automatización de reportes. Ella delegó 70% del seguimiento.",
    resultado: "0 proyectos perdidos por \"falta de seguimiento\" en 6 meses.",
    metrica: "0",
    metricaLabel: "proyectos perdidos en 6 meses",
  },
  {
    industria: "Empresa de logística",
    tamano: "78 personas",
    problema:
      "Reportes de producción del fin de semana llegaban el martes. Decisiones de inventario con 48 horas de retraso.",
    solucion:
      "Sensores + dashboard en tiempo real. Alertas automáticas por WhatsApp.",
    resultado: "23% reducción en inventario de seguridad. $12M anuales en capital liberado.",
    metrica: "$12M",
    metricaLabel: "en capital liberado al año",
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

        <div className="grid md:grid-cols-3 gap-6">
          {casos.map((caso, i) => (
            <AnimatedSection key={caso.industria} delay={(i * 100) as 0 | 100 | 200}>
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
