"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Shield, ArrowUpRight } from "lucide-react";
import {
  trackCentinelaCtaClick,
  trackCrossDomainReferral,
  trackDiagnosticoCompleted,
  trackDiagnosticoStep,
  trackRegulatedSectorDetected,
} from "@/lib/analytics";
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  REGULATED_SECTORS,
  SEGURIDAD_URL,
  SERVICIO_SLUGS,
  TAMANO_OPTIONS,
  type TamanoValue,
} from "@/lib/constants";

type TamanoOption = TamanoValue;

interface WizardData {
  tamano: TamanoOption | "";
  industria: string;
  dolor: string;
  dolorOtro: string;
  intentadoAntes: boolean | null;
  timeline: string;
  servicioInteres: string;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
  consent: boolean;
}

const TAMANOS = TAMANO_OPTIONS;

const INDUSTRIAS = [
  "Distribución y logística",
  "Manufactura e industria",
  "Construcción",
  "Servicios profesionales",
  "Retail y comercio",
  "Salud y clínicas",
  "Servicios financieros / Fintech",
  "Energía / Utilities",
  "Telecomunicaciones",
  "Infraestructura digital",
  "Transporte y logística crítica",
  "Gastronomía y hotelería",
  "Educación",
  "Otro",
];

const DOLORES = [
  "Errores y reprocesos frecuentes",
  "Demasiado tiempo en tareas administrativas",
  "Información desactualizada para tomar decisiones",
  "Dificultad para coordinar equipos o turnos",
  "Clientes que reclaman por fallas en el servicio",
  "Costos que suben sin saber exactamente por qué",
  "Otro",
];

const TIMELINES = [
  "Lo antes posible — tengo un problema urgente",
  "En los próximos 3 meses",
  "En el segundo semestre",
  "Estoy explorando opciones",
];

const SERVICIOS_OPCIONES: Array<{ value: string; meta?: string }> = [
  { value: "No estoy seguro, quiero conversar", meta: "Lo definimos en la llamada" },
  { value: "Radiografía Operacional (mapeo de procesos)", meta: "5 días · desde 12 UF" },
  { value: "Primer Paso Digital (auditoría de herramientas)", meta: "7 días · desde 18 UF" },
  { value: "SOP Express (documentar 3 procesos)", meta: "4 días · desde 10 UF" },
  { value: "Diagnóstico de Costos Ocultos", meta: "5 días · desde 12 UF" },
  { value: "Plan de Acción Priorizado", meta: "5 días · desde 12 UF" },
];

// Mapping slug del URL (?servicio=X) → label largo que se persiste en
// data.servicioInteres. Mantiene consistencia con lo que guarda paso 5 cuando
// el usuario elige a mano. Si un slug no está en el map, no se hidrata.
const SERVICIO_SLUG_TO_LABEL: Record<string, string> = {
  "radiografia-operacional": "Radiografía Operacional (mapeo de procesos)",
  "primer-paso-digital": "Primer Paso Digital (auditoría de herramientas)",
  "sop-express": "SOP Express (documentar 3 procesos)",
  "diagnostico-costos": "Diagnóstico de Costos Ocultos",
  "plan-accion-priorizado": "Plan de Acción Priorizado",
};

const SERVICIO_STEP_INDEX = 5; // 0-indexed: el paso 5 del wizard es "servicio de interés"
const TOTAL_STEPS_DEFAULT = 7;

const OPTION_CLASS =
  "w-full text-left px-4 py-3.5 rounded-md border border-muted hover:border-primary hover:bg-primary/5 text-foreground font-sans text-sm transition-colors cursor-pointer";

function StepWrapper({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold text-foreground mb-1">
        {title}
      </h3>
      {subtitle ? (
        <p className="text-sm text-muted-foreground font-sans mb-6">
          {subtitle}
        </p>
      ) : (
        <div className="mb-6" />
      )}
      {children}
    </div>
  );
}

export default function DiagnosticoWizard() {
  // Pre-poblar servicioInteres si el usuario llegó vía CTA de ServiciosSection
  // (ej: /?servicio=radiografia-operacional#cta-diagnostico). Valida contra
  // SERVICIO_SLUGS — un slug desconocido se descarta. El componente vive
  // dentro de un Suspense boundary en DiagnosticoSection (requerido por Next).
  const searchParams = useSearchParams();
  const servicioFromUrl = searchParams.get("servicio");
  const servicioPreseleccionado =
    servicioFromUrl && servicioFromUrl in SERVICIO_SLUGS ? servicioFromUrl : null;
  // Label largo que se persiste y se manda al API — consistente con lo que
  // guarda el paso 5 del wizard cuando el usuario elige a mano.
  const servicioInteresInicial = servicioPreseleccionado
    ? SERVICIO_SLUG_TO_LABEL[servicioPreseleccionado] ?? ""
    : "";
  const skipServicioStep = !!servicioPreseleccionado;
  const totalSteps = skipServicioStep ? TOTAL_STEPS_DEFAULT - 1 : TOTAL_STEPS_DEFAULT;

  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<WizardData>({
    tamano: "",
    industria: "",
    dolor: "",
    dolorOtro: "",
    intentadoAntes: null,
    timeline: "",
    servicioInteres: servicioInteresInicial,
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    consent: false,
  });
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle");
  const [apiError, setApiError] = useState("");

  const [awaitingOtro, setAwaitingOtro] = useState(false);
  const [tempText, setTempText] = useState("");

  // Sincroniza data.servicioInteres con el query param cuando cambia post-mount
  // (soft navigation, p.ej. usuario carga `/`, scrollea, click en CTA de
  // ServiciosSection con `?servicio=X#cta-diagnostico`). El useState initializer
  // sólo corre 1 vez al montar — sin este effect, `skipServicioStep` se activa
  // pero `data.servicioInteres` queda `""` y el POST manda servicio vacío.
  useEffect(() => {
    if (servicioPreseleccionado) {
      const label = SERVICIO_SLUG_TO_LABEL[servicioPreseleccionado];
      if (label) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- sync con sistema externo (URL searchParams) tras soft-nav, no triggereable de otra forma.
        setData((d) => (d.servicioInteres === label ? d : { ...d, servicioInteres: label }));
      }
    }
  }, [servicioPreseleccionado]);

  // Calcula el paso visible al usuario (1-indexed) ignorando el paso interno
  // saltado. Usado en progress bar Y en analytics — antes el track se calculaba
  // sobre el índice interno, lo que producía eventos "Paso 7 de 6" cuando se
  // saltaba el paso 5.
  function toDisplayStep(internalStep: number): number {
    if (skipServicioStep && internalStep > SERVICIO_STEP_INDEX) return internalStep;
    return internalStep + 1;
  }

  function advance() {
    setStep((s) => {
      let next = s + 1;
      // Skip paso 5 (servicio) si ya viene pre-seleccionado desde el URL.
      if (next === SERVICIO_STEP_INDEX && skipServicioStep) next = SERVICIO_STEP_INDEX + 1;
      // Trackea el paso visible al usuario, no el índice interno.
      trackDiagnosticoStep(toDisplayStep(next), totalSteps);
      return next;
    });
    setAwaitingOtro(false);
    setTempText("");
  }

  function back() {
    if (awaitingOtro) {
      setAwaitingOtro(false);
      setTempText("");
      return;
    }
    setStep((s) => {
      let prev = s - 1;
      // Mismo skip al volver atrás — el paso 5 no es visible.
      if (prev === SERVICIO_STEP_INDEX && skipServicioStep) prev = SERVICIO_STEP_INDEX - 1;
      return Math.max(0, prev);
    });
  }

  // Paso 1 — Tamaño
  function selectTamano(value: TamanoOption) {
    setData((d) => ({ ...d, tamano: value }));
    advance();
  }

  // Paso 2 — Industria
  function selectIndustria(value: string) {
    if (value === "Otro") {
      setData((d) => ({ ...d, industria: "" }));
      setAwaitingOtro(true);
      setTempText("");
    } else {
      setData((d) => ({ ...d, industria: value }));
      if (REGULATED_SECTORS.includes(value)) {
        trackRegulatedSectorDetected(value);
      }
      advance();
    }
  }

  function confirmOtroIndustria() {
    setData((d) => ({ ...d, industria: tempText.trim() || "Otro" }));
    advance();
  }

  // Paso 3 — Dolor
  function selectDolor(value: string) {
    if (value === "Otro") {
      setData((d) => ({ ...d, dolor: "Otro", dolorOtro: "" }));
      setAwaitingOtro(true);
      setTempText("");
    } else {
      setData((d) => ({ ...d, dolor: value, dolorOtro: "" }));
      advance();
    }
  }

  function confirmOtroDolor() {
    setData((d) => ({ ...d, dolorOtro: tempText.trim() }));
    advance();
  }

  // Paso 4 — Intentado antes
  function selectIntentado(value: boolean) {
    setData((d) => ({ ...d, intentadoAntes: value }));
    advance();
  }

  // Paso 5 — Timeline
  function selectTimeline(value: string) {
    setData((d) => ({ ...d, timeline: value }));
    advance();
  }

  // Paso 6 — Servicio de interés
  function selectServicio(value: string) {
    setData((d) => ({ ...d, servicioInteres: value }));
    advance();
  }

  // Paso 7 — Contacto
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!data.consent) {
      setSubmitState("error");
      setApiError("Debes aceptar la política de privacidad para continuar");
      return;
    }
    setSubmitState("submitting");
    setApiError("");

    const dolorFinal =
      data.dolor === "Otro" ? data.dolorOtro || "Otro" : data.dolor;

    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          telefono: data.telefono,
          empresa: data.empresa,
          tamano: data.tamano,
          industria: data.industria,
          dolor: dolorFinal,
          intentadoAntes: data.intentadoAntes ?? false,
          timeline: data.timeline,
          servicioInteres: data.servicioInteres,
          consent: data.consent,
        }),
      });
      if (!res.ok) throw new Error("Error");
      trackDiagnosticoCompleted();
      setSuccess(true);
      // Auto-redirect a Calendly si NO es sector regulado.
      // Sectores regulados ven panel adicional de seguridad antes de decidir.
      if (!REGULATED_SECTORS.includes(data.industria)) {
        const calendlyUrl = `${CALENDLY_URL}?name=${encodeURIComponent(data.nombre)}&email=${encodeURIComponent(data.email)}`;
        setTimeout(() => {
          window.open(calendlyUrl, "_blank", "noopener,noreferrer");
        }, 1800);
      }
    } catch {
      setSubmitState("error");
      setApiError(
        `Algo salió mal. Intenta nuevamente o escríbenos a ${CONTACT_EMAIL}`
      );
    }
  }

  // Pantalla de éxito
  if (success) {
    const calendlyUrl = `${CALENDLY_URL}?name=${encodeURIComponent(data.nombre)}&email=${encodeURIComponent(data.email)}`;
    const isRegulatedSector = REGULATED_SECTORS.includes(data.industria);

    return (
      <div className="max-w-lg mx-auto">
        <div className="text-center py-12 px-8 bg-card border border-muted rounded-lg shadow-card">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5 bg-primary">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10l4 4 8-8"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            ¡Listo, {data.nombre.split(" ")[0]}!
          </h3>
          <p className="text-muted-foreground font-sans leading-relaxed mb-2">
            Recibimos tu diagnóstico.{" "}
            {!isRegulatedSector && (
              <span>Te estamos abriendo Calendly para agendar la llamada ahora.</span>
            )}
            {isRegulatedSector && <span>Para agendar tu llamada ahora mismo:</span>}
          </p>
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3.5 bg-primary text-primary-foreground rounded-md font-semibold font-sans text-sm hover:bg-primary/90 transition-colors"
          >
            Agendar diagnóstico gratuito →
          </Link>
          <p className="text-xs text-muted-foreground font-sans mt-4">
            O si prefieres, te contactamos en{" "}
            <strong className="text-foreground">menos de 24 horas</strong> al email{" "}
            <span className="text-foreground font-medium">{data.email}</span>
          </p>
        </div>

        {isRegulatedSector && (
          <div className="mt-6 p-6 bg-foreground text-background rounded-lg border border-foreground/10">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-glow/15 border border-accent-glow/30 shrink-0">
                <Shield className="w-4 h-4 text-accent-glow" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-semibold text-base leading-snug">
                  Tu sector tiene exigencias regulatorias específicas
                </p>
                <p className="text-xs text-background/60 font-sans mt-0.5">
                  {data.industria}
                </p>
              </div>
            </div>
            <p className="text-sm font-sans leading-relaxed text-background/85 mb-4">
              Para empresas en {data.industria.toLowerCase()}, además del
              diagnóstico operativo tenemos una vertical dedicada a
              ciberseguridad y cumplimiento normativo.
            </p>
            <a
              href={SEGURIDAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackCentinelaCtaClick("wizard_post_completion");
                trackCrossDomainReferral(
                  "seguridad.0kbot.com",
                  "wizard_post_completion"
                );
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent-glow text-foreground rounded-md font-semibold font-sans text-sm hover:bg-accent-glow/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-glow"
              aria-label="Ir a seguridad.0kbot.com — abre en nueva pestaña"
            >
              Solicitar diagnóstico de seguridad
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    );
  }

  const displayStep = toDisplayStep(step);
  const progressPct = (displayStep / totalSteps) * 100;

  return (
    <div className="max-w-lg mx-auto">
      {/* Badge servicio pre-seleccionado — visible solo si el usuario llegó
          desde un CTA de ServiciosSection con ?servicio=<slug> válido. */}
      {servicioPreseleccionado && !success && (
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-primary/8 border border-primary/20 rounded-full text-xs font-medium font-sans text-primary">
          <span aria-hidden="true">→</span>
          <span>Te interesó: <strong>{SERVICIO_SLUGS[servicioPreseleccionado]}</strong></span>
        </div>
      )}

      {/* Barra de progreso */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground font-sans mb-2">
          <span>
            Paso {displayStep} de {totalSteps}
          </span>
          <span>{Math.round(progressPct)}%</span>
        </div>
        <div
          className="h-1 bg-muted rounded-full overflow-hidden"
          role="progressbar"
          aria-label={`Progreso del diagnóstico: paso ${displayStep} de ${totalSteps}`}
          aria-valuenow={Math.round(progressPct)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      <div className="bg-card border border-muted rounded-lg p-6 lg:p-8 shadow-card">
        {/* Paso 1 — Tamaño */}
        {step === 0 && (
          <StepWrapper
            title="¿Cuántas personas trabajan en tu empresa?"
            subtitle="Incluyendo todos los empleados."
          >
            <div className="space-y-2">
              {TAMANOS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectTamano(opt.value)}
                  className={OPTION_CLASS}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Paso 2 — Industria (selección) */}
        {step === 1 && !awaitingOtro && (
          <StepWrapper title="¿En qué industria opera tu empresa?">
            <div className="space-y-2">
              {INDUSTRIAS.map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectIndustria(opt)}
                  className={OPTION_CLASS}
                >
                  {opt}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Paso 2 — Industria (texto libre) */}
        {step === 1 && awaitingOtro && (
          <StepWrapper title="¿Cuál es tu industria?">
            <input
              autoFocus
              type="text"
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && tempText.trim() && confirmOtroIndustria()}
              placeholder="Ej: Agricultura, tecnología, pesca..."
              className="w-full px-4 py-3 border border-muted rounded-md font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
            />
            <button
              onClick={confirmOtroIndustria}
              disabled={!tempText.trim()}
              className="mt-3 w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-medium font-sans text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              Continuar →
            </button>
          </StepWrapper>
        )}

        {/* Paso 3 — Dolor (selección) */}
        {step === 2 && !awaitingOtro && (
          <StepWrapper title="¿Cuál es tu principal problema hoy?">
            <div className="space-y-2">
              {DOLORES.map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectDolor(opt)}
                  className={OPTION_CLASS}
                >
                  {opt}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Paso 3 — Dolor (texto libre) */}
        {step === 2 && awaitingOtro && (
          <StepWrapper title="Cuéntanos cuál es tu problema">
            <textarea
              autoFocus
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              placeholder="Describe brevemente el problema que más te preocupa..."
              rows={4}
              className="w-full px-4 py-3 border border-muted rounded-md font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground resize-none"
            />
            <button
              onClick={confirmOtroDolor}
              disabled={!tempText.trim()}
              className="mt-3 w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-medium font-sans text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
            >
              Continuar →
            </button>
          </StepWrapper>
        )}

        {/* Paso 4 — Intentado antes */}
        {step === 3 && (
          <StepWrapper
            title="¿Han intentado resolver esto antes?"
            subtitle="Nos ayuda a entender desde dónde partir."
          >
            <div className="space-y-3">
              <button
                onClick={() => selectIntentado(true)}
                className={OPTION_CLASS}
              >
                Sí, hemos probado algo (Excel, contratar más gente, otro software...)
              </button>
              <button
                onClick={() => selectIntentado(false)}
                className={OPTION_CLASS}
              >
                No, es la primera vez que buscamos una solución
              </button>
            </div>
          </StepWrapper>
        )}

        {/* Paso 5 — Timeline */}
        {step === 4 && (
          <StepWrapper title="¿Cuándo te gustaría empezar?">
            <div className="space-y-2">
              {TIMELINES.map((opt) => (
                <button
                  key={opt}
                  onClick={() => selectTimeline(opt)}
                  className={OPTION_CLASS}
                >
                  {opt}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Paso 6 — Servicio de interés */}
        {step === 5 && (
          <StepWrapper
            title="¿Qué tipo de ayuda buscas?"
            subtitle="Si no lo tienes claro, marca la última opción y lo definimos en la llamada."
          >
            <div className="space-y-2">
              {SERVICIOS_OPCIONES.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectServicio(opt.value)}
                  className={`${OPTION_CLASS} flex items-center justify-between gap-3`}
                >
                  <span>{opt.value}</span>
                  {opt.meta && (
                    <span className="text-xs text-muted-foreground font-body whitespace-nowrap">
                      {opt.meta}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </StepWrapper>
        )}

        {/* Paso 7 — Contacto */}
        {step === 6 && (
          <StepWrapper
            title="Casi listo. ¿A quién le avisamos?"
            subtitle="Te contactamos para coordinar la llamada de diagnóstico (30 min, sin costo)."
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground font-sans mb-1.5">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={data.nombre}
                  onChange={(e) =>
                    setData((d) => ({ ...d, nombre: e.target.value }))
                  }
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-muted rounded-md font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground font-sans mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) =>
                    setData((d) => ({ ...d, email: e.target.value }))
                  }
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-3 border border-muted rounded-md font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground font-sans mb-1.5">
                  Teléfono{" "}
                  <span className="text-muted-foreground/60">(opcional)</span>
                </label>
                <input
                  type="tel"
                  value={data.telefono}
                  onChange={(e) =>
                    setData((d) => ({ ...d, telefono: e.target.value }))
                  }
                  placeholder="+56 9 1234 5678"
                  className="w-full px-4 py-3 border border-muted rounded-md font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground font-sans mb-1.5">
                  Empresa{" "}
                  <span className="text-muted-foreground/60">(opcional)</span>
                </label>
                <input
                  type="text"
                  value={data.empresa}
                  onChange={(e) =>
                    setData((d) => ({ ...d, empresa: e.target.value }))
                  }
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 border border-muted rounded-md font-sans text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground"
                />
              </div>

              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.consent}
                    onChange={(e) =>
                      setData((d) => ({ ...d, consent: e.target.checked }))
                    }
                    disabled={submitState === "submitting"}
                    className="mt-0.5 w-4 h-4 accent-primary shrink-0 cursor-pointer"
                    aria-describedby="wizard-consent-help"
                    required
                  />
                  <span className="text-xs text-muted-foreground font-sans leading-relaxed">
                    He leído y acepto la{" "}
                    <Link
                      href="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:no-underline"
                    >
                      política de privacidad
                    </Link>
                    .
                  </span>
                </label>
                <p id="wizard-consent-help" className="text-[11px] text-muted-foreground/80 font-sans mt-1.5 leading-relaxed">
                  Usamos los datos de este formulario solo para preparar tu diagnóstico operativo y contactarte. No los compartimos con terceros.
                </p>
              </div>

              {apiError && (
                <p className="text-sm font-sans" style={{ color: "#DC2626" }}>
                  {apiError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-md font-semibold font-sans text-sm hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitState === "submitting"
                  ? "Enviando..."
                  : "Agendar diagnóstico gratuito →"}
              </button>

              <p className="text-center text-xs text-muted-foreground font-sans">
                Sin compromiso · Sin spam · Respondemos en menos de 24 hrs
              </p>
            </form>
          </StepWrapper>
        )}

        {/* Botón volver */}
        {step > 0 && (
          <button
            onClick={back}
            aria-label="Volver al paso anterior"
            className="mt-6 text-sm text-muted-foreground hover:text-foreground font-sans transition-colors"
          >
            ← Anterior
          </button>
        )}
      </div>
    </div>
  );
}
