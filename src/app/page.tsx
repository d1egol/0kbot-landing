import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solucion from "@/components/sections/Solucion";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Casos from "@/components/sections/Casos";
import Credenciales from "@/components/sections/Credenciales";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Solucion />
      <ComoFunciona />
      <Casos />
      <Credenciales />
      <FAQ />
      <CTAFinal />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
