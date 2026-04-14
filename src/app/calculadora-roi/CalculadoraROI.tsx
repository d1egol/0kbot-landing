"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackCalculatorComputed, trackCTAClick } from "@/lib/analytics";

const UF_TO_CLP = 40000;
const TASA_AUTOMATIZACION = 0.6;
const TASA_REDUCCION_ERRORES = 0.7;
const SEMANAS_ANIO = 48;

const clpFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0,
});

function formatCLP(value: number): string {
  if (!Number.isFinite(value) || value < 0) return clpFormatter.format(0);
  return clpFormatter.format(Math.round(value));
}

function inversionUFPorEquipo(equipo: number): number {
  if (equipo < 20) return 180;
  if (equipo <= 50) return 350;
  return 600;
}

type Inputs = {
  equipo: number;
  horasSemana: number;
  costoHora: number;
  erroresMes: number;
  costoError: number;
};

type FieldKey = keyof Inputs;

const DEFAULTS: Inputs = {
  equipo: 10,
  horasSemana: 10,
  costoHora: 8000,
  erroresMes: 2,
  costoError: 150000,
};

export default function CalculadoraROI() {
  const [inputs, setInputs] = useState<Inputs>(DEFAULTS);

  const handleChange = (key: FieldKey, raw: string) => {
    const parsed = Number(raw);
    const safe = Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    setInputs((prev) => ({ ...prev, [key]: safe }));
  };

  const results = useMemo(() => {
    const { equipo, horasSemana, costoHora, erroresMes, costoError } = inputs;
    const horasSemanaTotal = equipo * horasSemana;
    const costoAnualHoras = horasSemanaTotal * SEMANAS_ANIO * costoHora;
    const costoAnualErrores = erroresMes * 12 * costoError;
    const costoActualAnual = costoAnualHoras + costoAnualErrores;

    const ahorroAnual =
      costoAnualHoras * TASA_AUTOMATIZACION +
      costoAnualErrores * TASA_REDUCCION_ERRORES;

    const inversionUF = inversionUFPorEquipo(equipo);
    const inversionEstimada = inversionUF * UF_TO_CLP;

    const paybackMeses =
      ahorroAnual > 0
        ? Math.max(1, Math.round(inversionEstimada / (ahorroAnual / 12)))
        : null;

    const roi12m =
      inversionEstimada > 0
        ? ((ahorroAnual - inversionEstimada) / inversionEstimada) * 100
        : 0;

    return {
      costoActualAnual,
      ahorroAnual,
      inversionEstimada,
      inversionUF,
      paybackMeses,
      roi12m,
    };
  }, [inputs]);

  const sinDatos = results.costoActualAnual === 0;

  // Dispara calculator_computed una sola vez por sesion (dos segundos despues
  // del ultimo ajuste) para medir engagement sin sesgar por cambios ruidosos.
  const hasTrackedRef = useRef(false);
  useEffect(() => {
    if (hasTrackedRef.current || sinDatos) return;
    const timeoutId = window.setTimeout(() => {
      if (hasTrackedRef.current) return;
      hasTrackedRef.current = true;
      trackCalculatorComputed({
        equipo: inputs.equipo,
        ahorro_anual: results.ahorroAnual,
        payback_meses: results.paybackMeses,
        roi_12m: results.roi12m,
      });
    }, 2000);
    return () => window.clearTimeout(timeoutId);
  }, [inputs.equipo, results.ahorroAnual, results.paybackMeses, results.roi12m, sinDatos]);

  const ctaHref = `/contacto?fuente=calculadora-roi&ahorro=${Math.round(
    results.ahorroAnual
  )}`;

  const handleCTAClick = () => {
    trackCTAClick("agendar_desde_calculadora", "calculadora_roi");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Formulario */}
      <div className="rounded-2xl border border-[#E5E2DB] bg-white p-6 md:p-8">
        <h2 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1">
          Tus números actuales
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-6">
          Estima lo mejor que puedas. Puedes ajustar en cualquier momento.
        </p>

        <div className="space-y-6">
          <NumericField
            id="equipo"
            label="Personas que ejecutan procesos manuales"
            help="Tu equipo administrativo, operativo o de soporte."
            value={inputs.equipo}
            min={1}
            max={200}
            step={1}
            onChange={(v) => handleChange("equipo", v)}
            showSlider
          />

          <NumericField
            id="horasSemana"
            label="Horas/semana por persona en tareas repetitivas"
            help="Correos, planillas, reportes, copiar datos entre sistemas..."
            value={inputs.horasSemana}
            min={1}
            max={40}
            step={1}
            onChange={(v) => handleChange("horasSemana", v)}
            showSlider
            suffix="hrs"
          />

          <NumericField
            id="costoHora"
            label="Costo hora promedio del equipo (CLP)"
            help="Sueldo bruto mensual / 180 aprox. Incluye leyes sociales si puedes."
            value={inputs.costoHora}
            min={0}
            step={500}
            onChange={(v) => handleChange("costoHora", v)}
          />

          <NumericField
            id="erroresMes"
            label="Errores operativos críticos al mes"
            help="Facturas mal emitidas, despachos perdidos, OC duplicadas, etc."
            value={inputs.erroresMes}
            min={0}
            step={1}
            onChange={(v) => handleChange("erroresMes", v)}
          />

          <NumericField
            id="costoError"
            label="Costo promedio por error (CLP)"
            help="Considera reproceso, pérdida de cliente, multas o descuentos."
            value={inputs.costoError}
            min={0}
            step={10000}
            onChange={(v) => handleChange("costoError", v)}
          />
        </div>

        <p className="mt-6 text-xs text-muted-foreground font-body leading-relaxed">
          Supuestos: asumimos <strong className="text-foreground">60%</strong> de las horas
          manuales son automatizables y se reduce un{" "}
          <strong className="text-foreground">70%</strong> de los errores. UF
          referencial = $40.000 CLP.
        </p>
      </div>

      {/* Resultados */}
      <div
        aria-live="polite"
        className="rounded-2xl border border-[#E5E2DB] bg-white p-6 md:p-8"
      >
        <h2 className="font-heading text-xl md:text-2xl font-bold text-[#1A1A1A] mb-1">
          Tu estimación
        </h2>
        <p className="text-sm text-muted-foreground font-body mb-6">
          Esta es una estimación. Números reales dependen de tu operación
          específica.
        </p>

        {sinDatos ? (
          <div className="rounded-xl bg-[#F7F5F0] border border-[#E5E2DB] p-6 text-center">
            <p className="text-sm text-muted-foreground font-body">
              Ingresa valores para ver tu estimación.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResultCard
                label="Costo anual actual"
                value={formatCLP(results.costoActualAnual)}
                tone="muted"
              />
              <ResultCard
                label="Ahorro potencial anual"
                value={formatCLP(results.ahorroAnual)}
                tone="primary"
              />
              <ResultCard
                label="Inversión estimada"
                value={formatCLP(results.inversionEstimada)}
                footnote={`${results.inversionUF} UF aprox.`}
                tone="muted"
              />
              <ResultCard
                label="Payback"
                value={
                  results.paybackMeses !== null
                    ? `${results.paybackMeses} ${
                        results.paybackMeses === 1 ? "mes" : "meses"
                      }`
                    : "—"
                }
                tone="muted"
              />
            </div>

            <div className="mt-4 rounded-xl border border-[#E5E2DB] bg-[#F7F5F0] p-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
                ROI a 12 meses
              </p>
              <p
                className="font-heading text-3xl md:text-4xl font-bold"
                style={{ color: "#D4AF37" }}
              >
                {results.roi12m >= 0 ? "+" : ""}
                {Math.round(results.roi12m)}%
              </p>
              <p className="text-xs text-muted-foreground font-body mt-2">
                Retorno sobre la inversión al cumplir 12 meses.
              </p>
            </div>

            <Link
              href={ctaHref}
              onClick={handleCTAClick}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-4 bg-[#1B5FA6] text-white rounded-md font-semibold font-body text-sm hover:bg-[#1B5FA6]/90 transition-colors"
            >
              Quiero un diagnóstico preciso para mi empresa{" "}
              <ArrowRight size={16} />
            </Link>

            <p className="mt-4 text-xs text-muted-foreground font-body text-center">
              Sin compromiso · Respondemos en menos de 24 hrs
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function NumericField({
  id,
  label,
  help,
  value,
  min,
  max,
  step,
  onChange,
  showSlider = false,
  suffix,
}: {
  id: string;
  label: string;
  help: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (v: string) => void;
  showSlider?: boolean;
  suffix?: string;
}) {
  const helpId = `${id}-help`;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-[#1A1A1A] font-body"
        >
          {label}
        </label>
        {suffix && (
          <span className="text-xs text-muted-foreground font-body">
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
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-[#E5E2DB] rounded-md font-body text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white text-[#1A1A1A]"
      />
      {showSlider && max !== undefined && min !== undefined && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={`${label} (slider)`}
          className="w-full mt-2 accent-[#1B5FA6]"
        />
      )}
      <p id={helpId} className="mt-1.5 text-xs text-muted-foreground font-body">
        {help}
      </p>
    </div>
  );
}

function ResultCard({
  label,
  value,
  footnote,
  tone,
}: {
  label: string;
  value: string;
  footnote?: string;
  tone: "primary" | "muted";
}) {
  const valueColor = tone === "primary" ? "#1B5FA6" : "#1A1A1A";
  return (
    <div className="rounded-xl border border-[#E5E2DB] bg-white p-5">
      <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
        {label}
      </p>
      <p
        className="font-heading text-xl md:text-2xl font-bold"
        style={{ color: valueColor }}
      >
        {value}
      </p>
      {footnote && (
        <p className="text-xs text-muted-foreground font-body mt-1">
          {footnote}
        </p>
      )}
    </div>
  );
}
