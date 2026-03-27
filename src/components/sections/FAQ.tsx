import FAQAccordion from "@/components/ui/FAQAccordion";

const preguntas = [
  {
    pregunta: "¿Me van a querer vender un software caro?",
    respuesta:
      "No. Muchas veces el problema no es el software, sino el proceso. Si se resuelve con orden, estandarización o una herramienta simple, esa será la recomendación.",
  },
  {
    pregunta: "¿Cuánto cuesta esto?",
    respuesta:
      "Depende del tamaño y complejidad de tu operación, pero siempre priorizamos mejoras con impacto claro en tiempo, errores o capacidad. Si no hay retorno visible, no tiene sentido avanzar.",
  },
  {
    pregunta: "¿Tengo que parar mi operación para esto?",
    respuesta:
      "No. El análisis y la implementación se diseñan para convivir con la operación, no para frenarla.",
  },
  {
    pregunta: "¿Y si el problema es mi gente, no los procesos?",
    respuesta:
      "En la mayoría de los casos, el problema no parte por las personas, sino por procesos mal diseñados, información dispersa y roles poco claros.",
  },
  {
    pregunta: "¿Usan IA?",
    respuesta:
      "Sí, pero solo cuando ayuda de verdad. No implementamos IA por moda, sino cuando reduce trabajo manual, errores o tiempos de respuesta dentro de una transformación digital para pymes con foco operacional.",
  },
  {
    pregunta: "¿Cuánto se demoran en verse resultados?",
    respuesta:
      "Muchas mejoras muestran impacto en las primeras semanas, sobre todo cuando el cuello de botella está claro.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: preguntas.map((item) => ({
    "@type": "Question",
    name: item.pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.respuesta,
    },
  })),
};

export default function FAQ() {
  return (
    <section className="bg-card py-20 lg:py-32 border-y border-muted" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container-content max-w-2xl">
        <h2 id="faq-title" className="font-display text-display-lg font-bold text-foreground mb-4 text-center">
          Preguntas frecuentes
        </h2>
        <p className="text-sm text-muted-foreground font-sans text-center mb-10">
          Respondemos lo que más preguntan dueños y gerentes antes de iniciar una
          mejora de procesos operativos.
        </p>
        <FAQAccordion items={preguntas} />
      </div>
    </section>
  );
}
