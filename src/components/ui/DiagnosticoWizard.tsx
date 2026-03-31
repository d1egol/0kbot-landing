"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { trackDiagnosticoCompleted } from "@/lib/analytics";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

type TamanoOption = "<20" | "20-50" | "50-100" | "100-200" | ">200";

interface WizardData {
  tamano: TamanoOption | "";
  industria: string;
  dolor: string;
  dolorOtro: string;
  intentadoAntes: boolean | null;
  timeline: string;
  nombre: string;
  email: string;
  telefono: string;
  empresa: string;
}

const TAMANOS: { value: TamanoOption; label: string }[] = [
  { value: "<20", label: "Menos de 20 personas" },
  { value: "20-50", label: "20 a 50 personas" },
  { value: "50-100", label: "50 a 100 personas" },
  { value: "100-200", label: "100 a 200 personas" },
  { value: ">200", label: "Más de 200 personas" },
];

const INDUSTRIAS = [
  "Distribución y logística",
  "Manufactura e industria",
  "Construcción",
  "Servicios profesionales",
  "Retail y comercio",
  "Salud y clínicas",
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

const TOTAL_STEPS = 6;

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
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<WizardData>({
    tamano: "",
    industria: "",
    dolor: "",
    dolorOtro: "",
    intentadoAntes: null,
    timeline: "",
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle");
  const [apiError, setApiError] = useState("");

  const [awaitingOtro, setAwaitingOtro] = useState(false);
  const [tempText, setTempText] = useState("");

  function advance() {
    setStep((s) => s + 1);
    setAwaitingOtro(false);
    setTempText("");
  }

  function back() {
    if (awaitingOtro) {
      setAwaitingOtro(false);
      setTempText("");
      return;
    }
    setStep((s) => Math.max(0, s - 1));
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

  // Paso 5 — Contacto
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
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
        }),
      });
      if (!res.ok) throw new Error("Error");
      trackDiagnosticoCompleted();
      setSuccess(true);
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

    return (
      <div className="max-w-lg mx-auto text-center py-12 px-8 bg-card border border-muted rounded-lg shadow-card">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-5"
          style={{ backgroundColor: "#1B5FA6" }}
        >
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
          Recibimos tu diagnóstico. Para agendar tu llamada ahora mismo:
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
    );
  }

  const progressPct = (step / (TOTAL_STEPS - 1)) * 100;

  return (
    <div className="max-w-lg mx-auto">
      {/* Barra de progreso */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-muted-foreground font-sans mb-2">
          <span>
            Paso {step + 1} de {TOTAL_STEPS}
          </span>
          <span>{Math.round(progressPct)}%</span>
        </div>
        <div className="h-1 bg-muted rounded-full overflow-hidden">
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

        {/* Paso 6 — Contacto */}
        {step === 5 && (
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
            className="mt-6 text-sm text-muted-foreground hover:text-foreground font-sans transition-colors"
          >
            ← Anterior
          </button>
        )}
      </div>
    </div>
  );
}
