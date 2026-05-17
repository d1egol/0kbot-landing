"use client";

import { Shield, ArrowUpRight } from "lucide-react";
import MotionSection from "@/components/ui/MotionSection";
import {
  trackCentinelaCtaClick,
  trackCrossDomainReferral,
} from "@/lib/analytics";
import { SEGURIDAD_URL } from "@/lib/constants";

const sectoresAplicables = [
  "Sectores regulados (Ley 21.663 / Ley 21.719)",
  "Proveedores de grandes empresas o del Estado",
  "Fintech, salud, energía, telco, transporte",
  "Empresas con auditorías o exigencias contractuales",
];

function handleSeguridadCtaClick() {
  trackCentinelaCtaClick("verticales_section");
  trackCrossDomainReferral("seguridad.0kbot.com", "verticales");
}

export default function VerticalesSection() {
  return (
    <section
      id="verticales"
      className="bg-foreground text-background py-20 lg:py-28"
    >
      <div className="container-content">
        <MotionSection className="mb-10 max-w-3xl">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4 text-accent-glow">
            Vertical especializada
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
            ¿Tu empresa enfrenta riesgos de ciberseguridad
            <br />
            <span className="text-background/70">
              o exigencias de cumplimiento?
            </span>
          </h2>
        </MotionSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <MotionSection className="lg:col-span-3" delay={0.1}>
            <div className="bg-background/5 border border-background/10 rounded-2xl p-8 lg:p-10 hover:border-accent-glow/30 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-glow/15 border border-accent-glow/30">
                  <Shield className="w-5 h-5 text-accent-glow" aria-hidden="true" />
                </div>
                <p className="font-heading text-lg font-semibold">
                  Diagnósticos de seguridad
                </p>
              </div>

              <p className="text-base font-body leading-relaxed text-background/85 mb-6">
                Hacemos diagnósticos de seguridad accionables, con entregable
                concreto y precio fijo. Para empresas que necesitan saber dónde
                están paradas — no un informe que junte polvo.
              </p>

              <a
                href={SEGURIDAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSeguridadCtaClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent-glow text-foreground rounded-md font-semibold font-sans text-sm hover:bg-accent-glow/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-glow"
                aria-label="Ir a seguridad.0kbot.com — abre en nueva pestaña"
              >
                Solicitar diagnóstico de seguridad
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <p className="text-xs font-body text-background/60 mt-4 leading-relaxed">
                Te lleva a <span className="text-background/80">seguridad.0kbot.com</span>{" "}
                — la vertical especializada del equipo en ciberseguridad y
                cumplimiento normativo.
              </p>
            </div>
          </MotionSection>

          <MotionSection className="lg:col-span-2" delay={0.2}>
            <p className="text-xs font-mono font-semibold uppercase tracking-widest mb-4 text-background/50">
              Para quién aplica
            </p>
            <ul className="space-y-3">
              {sectoresAplicables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-body leading-relaxed text-background/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-glow shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs font-body text-background/55 mt-6 leading-relaxed">
              Si no estás seguro si aplica a tu empresa, el autodiagnóstico
              inicial es gratuito y lo aclara en pocos minutos.
            </p>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
