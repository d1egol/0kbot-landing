"use client";

import { useSearchParams } from "next/navigation";
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import OpenModalButton from "@/components/ui/OpenModalButton";

const pasos = [
  "Agendas una llamada de 30 minutos.",
  "Conversamos sobre tu operación y tus desafíos.",
  "Te damos un diagnóstico con números reales.",
  "Si hay fit, te proponemos un plan de acción.",
];

export default function ContactoClient() {
  const searchParams = useSearchParams();
  const dolor = searchParams.get("dolor");

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Contacto
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Agenda tu diagnóstico gratuito de procesos
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            30 minutos para entender dónde pierde tiempo y dinero tu empresa.
            Sin compromiso. Sin teoría.
          </p>
        </div>
      </section>

      {/* CTA + Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main CTA */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-card border border-border rounded-xl p-8 md:p-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                {dolor && (
                  <p className="text-sm text-primary font-medium font-body bg-primary/5 border border-primary/20 rounded-lg px-4 py-2.5">
                    Diagnóstico enfocado en: <strong>{dolor}</strong>
                  </p>
                )}
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Elige el horario que te acomode
                </h2>
                <p className="text-muted-foreground font-body max-w-md mx-auto">
                  Selecciona un bloque disponible en nuestro calendario. La
                  reunión es por videollamada y dura 30 minutos.
                </p>
                <OpenModalButton location="contacto_page" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold font-body text-sm hover:bg-primary/90 transition-colors">
                  Agendar ahora <ArrowRight size={16} />
                </OpenModalButton>
              </div>

              <div className="bg-muted rounded-xl p-6 flex items-start gap-4">
                <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground font-body">
                    ¿Prefieres escribirnos?
                  </p>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Envíanos un email a{" "}
                    <a
                      href="mailto:hola@0kbot.com"
                      className="text-primary hover:underline"
                    >
                      hola@0kbot.com
                    </a>{" "}
                    y te respondemos en menos de 24 horas hábiles.
                  </p>
                </div>
              </div>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                  ¿Qué pasa después?
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground font-body">
                  {pasos.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 text-accent"
                        style={{ backgroundColor: "rgba(212,168,83,0.1)" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-muted rounded-xl p-6 space-y-3">
                {[
                  "Sin costo ni compromiso",
                  "Resultados con números reales",
                  "Recomendación honesta aunque no trabajemos juntos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <p className="text-sm text-foreground font-body">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
