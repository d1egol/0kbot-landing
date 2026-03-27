import HeroSection from "@/components/home/HeroSection";
import PainPointsSection from "@/components/home/PainPointsSection";
import SolucionSection from "@/components/home/SolucionSection";
import ComoFuncionaSection from "@/components/home/ComoFuncionaSection";
import CasosSection from "@/components/home/CasosSection";
import TestimoniosSection from "@/components/home/TestimoniosSection";
import CredencialesSection from "@/components/home/CredencialesSection";
import FAQSection from "@/components/home/FAQSection";
import DiagnosticoSection from "@/components/home/DiagnosticoSection";
import CTAFinalSection from "@/components/home/CTAFinalSection";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <SolucionSection />
      <ComoFuncionaSection />
      <CasosSection />
      <TestimoniosSection />
      <CredencialesSection />
      <FAQSection />
      <DiagnosticoSection />
      <CTAFinalSection />
      <FloatingCTA />
    </>
  );
}
