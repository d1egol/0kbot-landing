import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import SolucionSection from "@/components/home/SolucionSection";
import CredencialesSection from "@/components/home/CredencialesSection";
import MetodoSection from "@/components/home/MetodoSection";
import ROIEstimatorSection from "@/components/home/ROIEstimatorSection";
import ComparacionSection from "@/components/home/ComparacionSection";
import NoSomosSoftwareSection from "@/components/home/NoSomosSoftwareSection";
import CasosSection from "@/components/home/CasosSection";
import PrincipiosSection from "@/components/home/PrincipiosSection";
import FAQSection from "@/components/home/FAQSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import DiagnosticoSection from "@/components/home/DiagnosticoSection";
import CTAFinalSection from "@/components/home/CTAFinalSection";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: {
    absolute:
      "0kbot — Consultoría en Mejora de Procesos y Automatización para Pymes Chile",
  },
  description:
    "Mejora de procesos y automatización para pymes chilenas con metodología Lean. Resultados medibles en 12 semanas o no pagas. Diagnóstico gratuito.",
  alternates: { canonical: "https://0kbot.com" },
  openGraph: {
    title:
      "0kbot — Consultoría en Mejora de Procesos y Automatización para Pymes Chile",
    description:
      "Detectamos dónde se va tu tiempo y tu plata, y lo arreglamos con cambios concretos. Resultados medibles en 12 semanas.",
    url: "https://0kbot.com",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "0kbot — Mejora de Procesos y Automatización para Pymes Chile",
    description:
      "Detectamos dónde se va tu tiempo y tu plata, y lo arreglamos con cambios concretos. Resultados medibles en 12 semanas.",
  },
};

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
        text: "Depende del alcance — qué procesos se atacan, cuánta gente está involucrada, qué se automatiza. El diagnóstico inicial es siempre gratuito y al cierre te entregamos una propuesta concreta con el número exacto. Si después del diagnóstico no hay un retorno claro proyectado, te lo decimos directo y no avanzamos.",
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
      <SolucionSection />
      <CredencialesSection />
      <MetodoSection />
      <ROIEstimatorSection />
      <ComparacionSection />
      <NoSomosSoftwareSection />
      <CasosSection />
      <PrincipiosSection />
      <FAQSection />
      <BlogPreviewSection />
      <DiagnosticoSection />
      <CTAFinalSection />
      <FloatingCTA />
    </>
  );
}
