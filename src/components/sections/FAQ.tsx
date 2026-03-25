import FAQAccordion from "@/components/ui/FAQAccordion";

const preguntas = [
  {
    pregunta: "¿Me van a querer vender un software caro?",
    respuesta:
      "Si tu problema se resuelve con un Excel bien hecho, te damos un Excel. Solo el 40% de nuestros proyectos incluye desarrollo. El otro 60% es procesos, flujos y capacitación.",
  },
  {
    pregunta: "¿Cuánto cuesta esto?",
    respuesta:
      "El diagnóstico es gratis. La implementación depende de qué encontremos. Te damos presupuesto fijo antes de empezar, no horas abiertas. Y sí: si no ves resultado, no pagas el último tramo.",
  },
  {
    pregunta: "¿Tengo que parar mi operación para esto?",
    respuesta:
      "No. El mapeo lo hacemos observando, no interrumpiendo. La implementación la hacemos en paralelo. Tu equipo sigue trabajando.",
  },
  {
    pregunta: "¿Y si el problema es mi gente, no los procesos?",
    respuesta:
      "Te lo decimos en el diagnóstico. Si el problema es estructural de personas, te lo decimos y no cobramos implementación. Prefiero una recomendación honesta que un proyecto forzado.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-card py-20 lg:py-32 border-y border-muted">
      <div className="container-content max-w-2xl">
        <h2 className="font-display text-display-lg font-bold text-foreground mb-12 text-center">
          Preguntas frecuentes
        </h2>
        <FAQAccordion items={preguntas} />
      </div>
    </section>
  );
}
