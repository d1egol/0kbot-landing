import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CalculadoraROI from "./CalculadoraROI";

export const metadata: Metadata = {
  title: "Calculadora de ROI de automatización para pymes Chile — 0kbot",
  description:
    "Calcula cuánto ahorrarías automatizando procesos en tu pyme. Inversión, payback y ROI a 12 meses, en 30 segundos y gratis.",
  keywords: [
    "calculadora ROI automatización",
    "ahorro pymes Chile",
    "ROI mejora procesos",
    "payback automatización",
    "calculadora ahorros pyme",
  ],
  alternates: { canonical: "https://0kbot.com/calculadora-roi" },
  openGraph: {
    title: "Calculadora de ROI de automatización para pymes | 0kbot",
    description:
      "Calcula cuánto ahorrarías automatizando procesos en tu pyme. Inversión, payback y ROI a 12 meses, en 30 segundos y gratis.",
    url: "https://0kbot.com/calculadora-roi",
    siteName: "0kbot",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de ROI de automatización para pymes | 0kbot",
    description:
      "Calcula cuánto ahorrarías automatizando procesos en tu pyme. Inversión, payback y ROI a 12 meses, en 30 segundos y gratis.",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://0kbot.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculadora ROI",
      item: "https://0kbot.com/calculadora-roi",
    },
  ],
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de ROI de automatización — 0kbot",
  url: "https://0kbot.com/calculadora-roi",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  description:
    "Herramienta gratuita para estimar el ahorro anual, payback y ROI de automatizar procesos manuales en una pyme chilena.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CLP",
  },
  provider: {
    "@type": "Organization",
    name: "0kbot",
    url: "https://0kbot.com",
  },
};

export default function CalculadoraROIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Calculadora ROI
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            ¿Cuánto estás perdiendo en tareas manuales y errores?
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            En 30 segundos estimamos el ahorro anual, la inversión, el payback y
            el ROI a 12 meses de automatizar los procesos de tu pyme. Gratis y sin registro.
          </p>
        </div>
      </section>

      {/* Calculadora */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <CalculadoraROI />
        </div>
      </section>

      {/* Cómo calculamos */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Cómo calculamos
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">
            No es magia: son supuestos razonables basados en proyectos de mejora
            de procesos en pymes. Todo es transparente y puedes ajustar los
            inputs.
          </p>
          <ul className="space-y-4 font-body text-foreground">
            <li>
              <strong className="text-[#1B5FA6]">Costo anual por horas manuales</strong> =
              personas × horas/semana × 48 semanas × costo hora.
            </li>
            <li>
              <strong className="text-[#1B5FA6]">Costo anual por errores</strong> =
              errores por mes × 12 × costo promedio por error.
            </li>
            <li>
              <strong className="text-[#1B5FA6]">Ahorro potencial</strong> asume que
              automatizamos un <em>60% de las horas manuales</em> y reducimos un
              <em> 70% de los errores</em> (rangos típicos en proyectos Lean).
            </li>
            <li>
              <strong className="text-[#1B5FA6]">Inversión estimada</strong> depende
              del tamaño del equipo: menos de 20 personas = 180 UF; 20–50 = 350 UF;
              más de 50 = 600 UF. UF convertida a CLP a tasa referencial de $40.000.
            </li>
            <li>
              <strong className="text-[#1B5FA6]">Payback</strong> = inversión ÷
              (ahorro anual ÷ 12). <strong className="text-[#1B5FA6]">ROI 12 meses</strong> =
              (ahorro − inversión) ÷ inversión × 100.
            </li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="rounded-2xl border border-[#E5E2DB] bg-white p-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
              Disclaimer honesto
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-3">
              Esta calculadora entrega una <strong className="text-foreground">estimación</strong>,
              no una garantía. Los números reales dependen de qué procesos se
              automatizan, la calidad de los datos actuales, la adopción del
              equipo y la complejidad de tu operación.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Si quieres un número preciso para tu empresa, agenda un
              diagnóstico gratuito de 30 minutos. Revisamos tu operación real y
              te entregamos una propuesta con supuestos verificados.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary py-16 md:py-20 text-center">
        <div className="container-narrow">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quieres un número preciso para tu empresa?
          </h2>
          <p className="text-white/75 font-body mb-8">
            Un diagnóstico de 30 minutos reemplaza la estimación por un plan concreto.
          </p>
          <Link
            href="/contacto?fuente=calculadora-roi"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors"
          >
            Agendar diagnóstico gratuito <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
