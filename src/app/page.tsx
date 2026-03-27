import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Solucion from "@/components/sections/Solucion";
import ComoFunciona from "@/components/sections/ComoFunciona";
import Casos from "@/components/sections/Casos";
import Credenciales from "@/components/sections/Credenciales";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Diagnostico from "@/components/sections/Diagnostico";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Credenciales />
        <Casos />
        <PainPoints />
        <Solucion />
        <ComoFunciona />
        <FAQ />
        <Diagnostico />
        <CTAFinal />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
