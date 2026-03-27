import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import DoloresSection from "@/components/home/DoloresSection";
import QueHacemosSection from "@/components/home/QueHacemosSection";
import PasosSection from "@/components/home/PasosSection";
import BeneficiosSection from "@/components/home/BeneficiosSection";
import ServiciosSection from "@/components/home/ServiciosSection";
import CasosSection from "@/components/home/CasosSection";
import TestimoniosSection from "@/components/home/TestimoniosSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <DoloresSection />
      <QueHacemosSection />
      <PasosSection />
      <BeneficiosSection />
      <ServiciosSection />
      <CasosSection />
      <TestimoniosSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
