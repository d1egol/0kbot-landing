import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import CredencialesSection from "@/components/home/CredencialesSection";
import ComoFuncionaSection from "@/components/home/ComoFuncionaSection";
import CasosSection from "@/components/home/CasosSection";
import FAQSection from "@/components/home/FAQSection";
import DiagnosticoSection from "@/components/home/DiagnosticoSection";
import CTAFinalSection from "@/components/home/CTAFinalSection";
import FloatingCTA from "@/components/ui/FloatingCTA";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Me van a querer vender un software caro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Muchas veces el problema no es el software, sino el proceso. Si se resuelve con orden, estandarización o una herramienta simple, esa será la recomendación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un proyecto de mejora de procesos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tamaño y alcance, pero para orientarte: programas para pymes de 10–50 personas parten desde 30–50 UF, y para operaciones de 50–200 personas suelen estar entre 60–120 UF. El diagnóstico inicial es siempre gratuito. Si no hay retorno visible proyectado, no tiene sentido avanzar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tengo que parar mi operación para esto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El análisis y la implementación se diseñan para convivir con la operación, no para frenarla.",
      },
    },
    {
      "@type": "Question",
      name: "¿Y si el problema es mi gente, no los procesos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos, el problema no parte por las personas, sino por procesos mal diseñados, información dispersa y roles poco claros.",
      },
    },
    {
      "@type": "Question",
      name: "¿Usan IA en la consultoría de procesos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, pero solo cuando ayuda de verdad. No se implementa IA por moda, sino cuando reduce trabajo manual, errores o tiempos de respuesta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto se demoran en verse resultados de la mejora de procesos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Muchas mejoras muestran impacto en las primeras semanas, sobre todo cuando el cuello de botella está claro. El programa completo dura 12 semanas.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <PainPointsSection />
      <ComoFuncionaSection />
      <CredencialesSection />
      <CasosSection />
      <FAQSection />
      <DiagnosticoSection />
      <CTAFinalSection />
      <FloatingCTA />
    </>
  );
}
