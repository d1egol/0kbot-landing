import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Agendar diagnóstico gratuito de procesos",
  description:
    "Agenda una llamada de 30 minutos sin compromiso. Te mostramos dónde pierde tiempo y dinero tu empresa con números reales. Consultora de procesos para pymes en Chile.",
  keywords: [
    "diagnóstico procesos pymes Chile",
    "agendar consultoría procesos",
    "diagnóstico gratuito automatización",
    "consultoría gratis pymes Chile",
  ],
};

export default function ContactoPage() {
  return <ContactoClient />;
}
