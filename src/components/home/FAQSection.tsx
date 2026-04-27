import FAQAccordion from "@/components/ui/FAQAccordion";

const preguntas = [
  {
    pregunta: "¿Me van a querer vender un software caro?",
    respuesta: "No. Muchas veces el problema no es el software, sino el proceso. Si se resuelve con orden, estandarización o una herramienta simple, esa será la recomendación.",
  },
  {
    pregunta: "¿Cuánto cuesta un proyecto de mejora de procesos?",
    respuesta: "Depende del tamaño y alcance, pero para orientarte: programas para pymes de 10–50 personas parten desde 30–50 UF, y para operaciones de 50–200 personas suelen estar entre 60–120 UF. El diagnóstico inicial es siempre gratuito. Si no hay retorno visible proyectado, no tiene sentido avanzar.",
    cta: { label: "Calcula tu ROI estimado en 30 segundos", href: "/calculadora-roi" },
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
