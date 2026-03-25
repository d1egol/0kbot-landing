"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import type { ContactFormData, SubmitStatus } from "@/types";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TAMANO_OPTIONS = [
  { value: "<20", label: "Menos de 20 personas" },
  { value: "20-50", label: "20 a 50 personas" },
  { value: "50-100", label: "50 a 100 personas" },
  { value: "100-200", label: "100 a 200 personas" },
  { value: ">200", label: "Más de 200 personas" },
] as const;

const EMPTY_FORM: ContactFormData = {
  nombre: "",
  email: "",
  empresa: "",
  cargo: "",
  tamano_empresa: "",
  problema: "",
};

interface FieldErrors {
  nombre?: string;
  email?: string;
  empresa?: string;
  tamano_empresa?: string;
}

function validateClient(data: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.nombre || data.nombre.trim().length < 2)
    errors.nombre = "Ingresa tu nombre completo";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Ingresa un email válido";
  if (!data.empresa || data.empresa.trim().length < 2)
    errors.empresa = "Ingresa el nombre de tu empresa";
  if (!data.tamano_empresa)
    errors.tamano_empresa = "Selecciona el tamaño de tu empresa";
  return errors;
}

function ModalContent({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm(EMPTY_FORM);
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen]);

  // Close on ESC
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validateClient(form);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Error al enviar");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: keyof FieldErrors) =>
    `w-full px-4 py-3 rounded-md border text-sm font-sans bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors ${
      errors[field]
        ? "border-destructive focus:ring-destructive/30"
        : "border-input focus:border-primary"
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-lg shadow-metric w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-muted">
          <div>
            <h2
              id="modal-title"
              className="font-display text-xl font-bold text-foreground"
            >
              Diagnóstico gratuito
            </h2>
            <p className="text-sm text-muted-foreground font-sans mt-1">
              Te contactamos en menos de 24 horas hábiles.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors ml-4 mt-0.5"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-8 space-y-3">
              <div className="text-4xl">✓</div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                ¡Listo!
              </h3>
              <p className="text-muted-foreground font-sans text-sm">
                Te contactamos en menos de 24 horas.
              </p>
              <button
                onClick={onClose}
                className="mt-4 text-sm text-primary hover:underline font-sans"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                  Nombre completo <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  className={inputClass("nombre")}
                  disabled={status === "submitting"}
                />
                {errors.nombre && (
                  <p className="text-xs text-destructive mt-1 font-sans">
                    {errors.nombre}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="juan@empresa.cl"
                  className={inputClass("email")}
                  disabled={status === "submitting"}
                />
                {errors.email && (
                  <p className="text-xs text-destructive mt-1 font-sans">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Empresa + Cargo en grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                    Empresa <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Mi Empresa S.A."
                    className={inputClass("empresa")}
                    disabled={status === "submitting"}
                  />
                  {errors.empresa && (
                    <p className="text-xs text-destructive mt-1 font-sans">
                      {errors.empresa}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    value={form.cargo}
                    onChange={handleChange}
                    placeholder="Gerente General"
                    className="w-full px-4 py-3 rounded-md border border-input text-sm font-sans bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              {/* Tamaño empresa */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                  Tamaño de tu empresa{" "}
                  <span className="text-destructive">*</span>
                </label>
                <select
                  name="tamano_empresa"
                  value={form.tamano_empresa}
                  onChange={handleChange}
                  className={`${inputClass("tamano_empresa")} cursor-pointer`}
                  disabled={status === "submitting"}
                >
                  <option value="">Selecciona una opción</option>
                  {TAMANO_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.tamano_empresa && (
                  <p className="text-xs text-destructive mt-1 font-sans">
                    {errors.tamano_empresa}
                  </p>
                )}
              </div>

              {/* Problema */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                  ¿Cuál es tu mayor problema operacional?{" "}
                  <span className="text-muted-foreground text-xs font-normal">
                    (opcional)
                  </span>
                </label>
                <textarea
                  name="problema"
                  value={form.problema}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ej: Los reportes tardan demasiado, hay reprocesos frecuentes en..."
                  className="w-full px-4 py-3 rounded-md border border-input text-sm font-sans bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                  disabled={status === "submitting"}
                />
              </div>

              {/* Error global */}
              {status === "error" && (
                <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20">
                  <p className="text-sm text-destructive font-sans">
                    Hubo un error. Intenta de nuevo o escríbenos a{" "}
                    <a
                      href="mailto:hola@0kbot.com"
                      className="underline"
                    >
                      hola@0kbot.com
                    </a>
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 px-6 rounded-md bg-primary text-primary-foreground font-medium font-sans text-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Enviando..." : "Solicitar diagnóstico gratuito →"}
              </button>

              <p className="text-xs text-muted-foreground text-center font-sans">
                Sin compromiso. Sin spam. Te llamamos, conversamos, y si no hay
                fit, te damos una recomendación igual.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <ModalContent isOpen={isOpen} onClose={onClose} />,
    document.body
  );
}
