"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react";

const RUBROS = [
  "Retail / Comercio",
  "Servicios profesionales",
  "Construcción / Inmobiliaria",
  "Logística / Transporte",
  "Manufactura",
  "Otro",
] as const;

const TAMANOS = [
  { value: "1-5", label: "1 a 5 personas" },
  { value: "6-20", label: "6 a 20 personas" },
  { value: "21-50", label: "21 a 50 personas" },
  { value: "51-100", label: "51 a 100 personas" },
  { value: "100+", label: "Más de 100" },
] as const;

const PLAZOS = ["1-3 meses", "3-6 meses", "Más de 6 meses"] as const;

const PRESUPUESTOS = [
  "Menos de $500.000 CLP",
  "$500.000 – $1.500.000 CLP",
  "$1.500.000 – $3.000.000 CLP",
  "Abierto / a definir",
] as const;

const INTENTADOS = [
  "Nada todavía",
  "Excel / hojas de cálculo",
  "Software específico",
  "Contratamos más personas",
  "Otra cosa",
] as const;

type Field = {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  rubro: string;
  tamano: string;
  proceso_principal: string;
  intentado_antes: string;
  resultado_ideal: string;
  plazo: string;
  presupuesto: string;
};

const EMPTY: Field = {
  nombre: "",
  email: "",
  empresa: "",
  telefono: "",
  rubro: "",
  tamano: "",
  proceso_principal: "",
  intentado_antes: "",
  resultado_ideal: "",
  plazo: "",
  presupuesto: "",
};

export default function OnboardingPage() {
  const [form, setForm] = useState<Field>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof Field) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <main className="min-h-screen bg-[#F7F5F0] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-[#1A1A1A] mb-3">
            ¡Listo, nos vemos pronto!
          </h1>
          <p className="text-[#666] mb-8 leading-relaxed">
            Recibí tu formulario. Voy a revisar los detalles de{" "}
            <strong>{form.empresa}</strong> antes de nuestra reunión para
            que aprovechemos bien el tiempo.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#1B5FA6] font-medium hover:underline text-sm"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E2DB]">
        <div className="container-content py-6">
          <Link href="/" className="text-[#1B5FA6] font-bold text-lg">
            0kbot
          </Link>
        </div>
      </div>

      <div className="container-content py-12 max-w-2xl">
        {/* Intro */}
        <div className="mb-10">
          <span className="inline-block bg-[#1B5FA6]/10 text-[#1B5FA6] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Pre-reunión
          </span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
            Cuéntanos sobre tu empresa
          </h1>
          <p className="text-[#666] text-lg leading-relaxed">
            Con esta información voy a preparar la reunión con foco en tu caso específico.
            Son 5 minutos y hace que el diagnóstico sea mucho más útil.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Bloque 1: Datos básicos */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E2DB] space-y-5">
            <h2 className="font-heading font-bold text-[#1A1A1A] text-lg">
              Datos básicos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.nombre}
                  onChange={set("nombre")}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Empresa <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.empresa}
                  onChange={set("empresa")}
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  value={form.telefono}
                  onChange={set("telefono")}
                  placeholder="+56 9 1234 5678"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white"
                />
              </div>
            </div>
          </div>

          {/* Bloque 2: Tu empresa */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E2DB] space-y-5">
            <h2 className="font-heading font-bold text-[#1A1A1A] text-lg">
              Tu empresa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Rubro <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.rubro}
                    onChange={set("rubro")}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white appearance-none pr-10"
                  >
                    <option value="">Seleccionar...</option>
                    {RUBROS.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Tamaño del equipo <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={form.tamano}
                    onChange={set("tamano")}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white appearance-none pr-10"
                  >
                    <option value="">Seleccionar...</option>
                    {TAMANOS.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Bloque 3: El problema */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E2DB] space-y-5">
            <h2 className="font-heading font-bold text-[#1A1A1A] text-lg">
              El proceso que queremos mejorar
            </h2>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                ¿Cuál es el proceso que más tiempo consume en tu empresa hoy?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={form.proceso_principal}
                onChange={set("proceso_principal")}
                rows={4}
                placeholder="Ej: Responder consultas de clientes por WhatsApp, coordinar pedidos, generar informes semanales..."
                className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                ¿Qué han intentado antes para resolverlo?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  required
                  value={form.intentado_antes}
                  onChange={set("intentado_antes")}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white appearance-none pr-10"
                >
                  <option value="">Seleccionar...</option>
                  {INTENTADOS.map((i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999] pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                ¿Cuál sería el resultado ideal para ti en los próximos meses?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                value={form.resultado_ideal}
                onChange={set("resultado_ideal")}
                rows={3}
                placeholder="Ej: Que el equipo no tenga que estar respondiendo WhatsApp todo el día, que los informes se generen solos..."
                className="w-full px-4 py-3 rounded-xl border border-[#E5E2DB] text-sm focus:outline-none focus:border-[#1B5FA6] focus:ring-1 focus:ring-[#1B5FA6] bg-white resize-none"
              />
            </div>
          </div>

          {/* Bloque 4: Expectativas */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E5E2DB] space-y-5">
            <h2 className="font-heading font-bold text-[#1A1A1A] text-lg">
              Expectativas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  ¿En qué plazo quieres ver resultados?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-2">
                  {PLAZOS.map((p) => (
                    <label key={p} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="plazo"
                        value={p}
                        required
                        checked={form.plazo === p}
                        onChange={set("plazo")}
                        className="w-4 h-4 accent-[#1B5FA6]"
                      />
                      <span className="text-sm text-[#444] group-hover:text-[#1A1A1A]">{p}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-1.5">
                  Presupuesto aproximado{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col gap-2">
                  {PRESUPUESTOS.map((p) => (
                    <label key={p} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="presupuesto"
                        value={p}
                        required
                        checked={form.presupuesto === p}
                        onChange={set("presupuesto")}
                        className="w-4 h-4 accent-[#1B5FA6]"
                      />
                      <span className="text-sm text-[#444] group-hover:text-[#1A1A1A]">{p}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Consentimiento Ley 21.719 */}
          <div className="bg-white rounded-2xl p-5 md:p-6 border border-[#E5E2DB]">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                disabled={status === "loading"}
                className="mt-0.5 w-4 h-4 accent-[#1B5FA6] shrink-0 cursor-pointer"
                aria-describedby="onboarding-consent-help"
              />
              <span className="text-sm text-[#444] leading-relaxed">
                He leído y acepto la{" "}
                <Link
                  href="/privacidad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B5FA6] underline hover:no-underline font-medium"
                >
                  política de privacidad
                </Link>
                .
              </span>
            </label>
            <p id="onboarding-consent-help" className="text-xs text-[#999] mt-2 leading-relaxed pl-7">
              Usamos esta información solo para preparar tu diagnóstico operativo y la reunión. No la compartimos con terceros.
            </p>
          </div>

          {status === "error" && (
            <p className="text-red-600 text-sm text-center">
              {consent
                ? "Hubo un error al enviar. Intenta de nuevo o escríbenos a hola@0kbot.com."
                : "Debes aceptar la política de privacidad para continuar."}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full flex items-center justify-center gap-2 bg-[#1B5FA6] text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-[#154d8a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              "Enviando..."
            ) : (
              <>
                Enviar y confirmar reunión
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </main>
  );
}
