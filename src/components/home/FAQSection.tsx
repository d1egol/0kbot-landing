import FAQAccordion from "@/components/ui/FAQAccordion";

const preguntas = [
  {
    pregunta: "¿Me van a querer vender un software caro?",
    respuesta: "No. Muchas veces el problema no es el software, sino el proceso. Si se resuelve con orden, estandarización o una herramienta simple, esa será la recomendación.",
  },
  {
    pregunta: "¿Cuánto cuesta un proyecto de mejora de procesos?",
    respuesta: "El diagnóstico inicial es gratuito y dura 30 minutos. Para servicios acotados con precio fijo, los rangos parten desde $390.000 CLP y suben según alcance — mapeo de procesos, auditoría de herramientas, plan de acción priorizado, entre otros. Cuando el problema es más grande, lo cotizamos al cierre del diagnóstico inicial. Si no vemos retorno claro, te lo decimos directo y no avanzamos.",
    cta: { label: "Calcula tu pérdida operativa estimada", href: "/calculadora-roi" },
  },
  {
    pregunta: "¿Tengo que parar mi operación para esto?",
    respuesta: "No. El análisis y la implementación se diseñan para convivir con la operación, no para frenarla.",
  },
  {
    pregunta: "¿Y si el problema es mi gente, no los procesos?",
    respuesta: "En la mayoría de los casos, el problema no parte por las personas, sino por procesos mal diseñados, información dispersa y roles poco claros.",
  },
  {
    pregunta: "¿Usan IA en la consultoría de procesos?",
    respuesta: "Sí, pero solo cuando ayuda de verdad. No se implementa IA por moda, sino cuando reduce trabajo manual, errores o tiempos de respuesta.",
  },
  {
    pregunta: "¿Cuánto se demoran en verse resultados de la mejora de procesos?",
    respuesta: "Muchas mejoras muestran impacto en las primeras semanas, sobre todo cuando el cuello de botella está claro. El programa completo dura 12 semanas.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-card py-20 lg:py-32 border-y border-muted">
      <div className="container-content max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Preguntas frecuentes
        </h2>
        <FAQAccordion items={preguntas} />
      </div>
    </section>
  );
}
