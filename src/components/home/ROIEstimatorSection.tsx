"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import OpenModalButton from "@/components/ui/OpenModalButton";
import MotionSection from "@/components/ui/MotionSection";
import { trackEvent, trackROIEstimatorStarted } from "@/lib/analytics";

const SEMANAS_ANIO = 48;
const MESES_ANIO = 12;

const clpFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

function formatCLP(value: number): string {
  if (!Number.isFinite(value) || value < 0) return clpFormatter.format(0);
  return clpFormatter.format(Math.round(value));
}

type Inputs = {
  horasSemana: number;
  costoHora: number;
  personas: number;
};

const DEFAULTS: Inputs = {
  horasSemana: 10,
  costoHora: 8000,
  personas: 3,
};

export default function ROIEstimatorSection() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);
  const startedRef = useRef(false);
  const computedRef = useRef(false);

  const handleFocus = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    trackROIEstimatorStarted();
  };

  const handleChange = (key: keyof Inputs, raw: string) => {
    const parsed = Number(raw);
    const safe = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    setInputs((prev) => ({ ...prev, [key]: safe }));
  };

  const results = useMemo(() => {
    const { horasSemana, costoHora, personas } = inputs;
    const horasSemanaTotal = horasSemana * personas;
    const costoAnual = horasSemanaTotal * SEMANAS_ANIO * costoHora;
    const costoMensual = costoAnual / MESES_ANIO;
    return { costoMensual, costoAnual, horasSemanaTotal };
  }, [inputs]);

  const sinDatos =
    inputs.horasSemana === 0 || inputs.costoHora === 0 || inputs.personas === 0;

  // Track once (debounced) cuando el usuario tiene una estimacion estable.
  useEffect(() => {
    if (computedRef.current || sinDatos) return;
    const timeoutId = window.setTimeout(() => {
      if (computedRef.current) return;
      computedRef.current = true;
      trackEvent("home_estimator_computed", {
        personas: inputs.personas,
        horas_semana: inputs.horasSemana,
        costo_mensual: Math.round(results.costoMensual),
        costo_anual: Math.round(results.costoAnual),
      });
    }, 1500);
    return () => window.clearTimeout(timeoutId);
  }, [inputs.horasSemana, inputs.costoHora, inputs.personas, results.costoMensual, results.costoAnual, sinDatos]);

  const alertaTono =
    results.costoMensual >= 1_000_000
      ? "alta"
      : results.costoMensual >= 300_000
      ? "media"
      : "baja";

  const mensajeAlerta = sinDatos
    ? "Ingresa valores para ver tu estimación."
    : alertaTono === "alta"
    ? "Estás perdiendo más de un sueldo profesional al mes en trabajo manual. Hay margen claro para mejorar."
    : alertaTono === "media"
    ? "Hay un costo operativo significativo escondido en tareas repetitivas."
    : "Costo bajo en este indicador, pero suele haber otros (errores, reprocesos, oportunidades perdidas).";

  return (
    <section id="estimador" className="surface-warm py-20 lg:py-28">
      <div className="container-content">
        <MotionSection className="mb-10 max-w-2xl">
          <p className="text-xs font-mono font-semibold text-accent uppercase tracking-widest mb-3">
            Estimador de pérdida operativa
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Antes de pedir reunión, mira cuánto te está costando hoy.
          </h2>
          <p className="mt-4 text-base text-muted-foreground font-body leading-relaxed">
            3 datos. 10 segundos. Una estimación rápida del costo de las horas
            manuales que tu equipo gasta en tareas repetitivas.
          </p>
        </MotionSection>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Inputs */}
          <MotionSection delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-7 space-y-6">
              <SimpleField
                id="estimator-horas"
                label="Horas/semana por persona en tareas repetitivas"
                help="Correos repetidos, planillas, reportes manuales, copiar datos."
                value={inputs.horasSemana}
                min={0}
                max={40}
                step={1}
                suffix="hrs"
                onFocus={handleFocus}
                onChange={(v) => handleChange("horasSemana", v)}
              />
              <SimpleField
                id="estimator-valor"
                label="Valor hora estimado del equipo (CLP)"
                help="Sueldo bruto mensual ÷ 180 aprox. Considera leyes sociales."
                value={inputs.costoHora}
                min={0}
                step={500}
                onFocus={handleFocus}
                onChange={(v) => handleChange("costoHora", v)}
              />
              <SimpleField
                id="estimator-personas"
                label="Personas involucradas en estos procesos"
                help="Tu equipo administrativo, operativo o de soporte."
                value={inputs.personas}
                min={0}
                max={50}
                step={1}
                showSlider
                onFocus={handleFocus}
                onChange={(v) => handleChange("personas", v)}
              />
            </div>
          </MotionSection>

          {/* Results */}
          <MotionSection delay={0.2}>
            <div
              aria-live="polite"
              className="rounded-2xl border border-border bg-card p-6 md:p-7"
            >
              <div className="grid grid-cols-2 gap-4 mb-5">
                <ResultBox
                  label="Costo mensual estimado"
                  value={formatCLP(results.costoMensual)}
                />
                <ResultBox
                  label="Costo anual estimado"
                  value={formatCLP(results.costoAnual)}
                  highlight
                />
              </div>

              <div
                className={`rounded-xl border p-4 text-sm font-body leading-relaxed ${
                  alertaTono === "alta"
                    ? "bg-red-50 border-red-200 text-red-900"
                    : alertaTono === "media"
                    ? "bg-amber-50 border-amber-200 text-amber-900"
                    : "bg-muted/40 border-border text-muted-foreground"
                }`}
              >
                {mensajeAlerta}
              </div>

              <div className="mt-6 space-y-3">
                <OpenModalButton
                  location="estimador"
                  className="inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-semibold font-body text-sm hover:bg-primary/90 transition-colors"
                >
                  Quiero revisar este número →
                </OpenModalButton>
                <p className="text-xs text-muted-foreground font-body text-center">
                  Estimación referencial basada en tus datos. No reemplaza un
                  diagnóstico operativo. Sin guardar nada hasta que tú lo
                  decidas.
                </p>
              </div>
            </div>
          </MotionSection>
        </div>

        <MotionSection delay={0.3} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-body">
            ¿Quieres incluir errores, inversión y ROI a 12 meses?{" "}
            <Link
              href="/calculadora-roi"
              className="text-primary font-semibold hover:underline"
            >
              Ir a la calculadora completa →
            </Link>
          </p>
        </MotionSection>
      </div>
    </section>
  );
}

function SimpleField({
  id,
  label,
  help,
  value,
  min,
  max,
  step,
  suffix,
  showSlider = false,
  onChange,
  onFocus,
}: {
  id: string;
  label: string;
  help: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  showSlider?: boolean;
  onChange: (v: string) => void;
  onFocus: () => void;
}) {
  const helpId = `${id}-help`;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <label htmlFor={id} className="block text-sm font-medium text-foreground font-body">
          {label}
        </label>
        {suffix && (
          <span className="text-xs text-muted-foreground font-mono">
            {value} {suffix}
          </span>
        )}
      </div>
      <input
        id={id}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        step={step}
        value={value}
        aria-describedby={helpId}
        onFocus={onFocus}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-border rounded-md font-body text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
      />
      {showSlider && max !== undefined && min !== undefined && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onFocus={onFocus}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`${label} (slider)`}
          className="w-full mt-2 accent-primary"
        />
      )}
      <p id={helpId} className="mt-1.5 text-xs text-muted-foreground font-body">
        {help}
      </p>
    </div>
  );
}

function ResultBox({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight
          ? "bg-primary/5 border-primary/20"
          : "bg-muted/30 border-border"
      }`}
    >
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body mb-1.5">
        {label}
      </p>
      <p
        className={`font-heading text-xl md:text-2xl font-bold ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
