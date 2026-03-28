"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FieldErrors {
  nombre?: string;
  email?: string;
}

function validate(nombre: string, email: string): FieldErrors {
  const errors: FieldErrors = {};
  if (!nombre || nombre.trim().length < 2)
    errors.nombre = "Ingresa tu nombre completo";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Ingresa un email válido";
  return errors;
}

function ModalContent({ isOpen, onClose }: ContactModalProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNombre("");
      setEmail("");
      setErrors({});
      setSubmitting(false);
    }
  }, [isOpen]);

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

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validate(nombre, email);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setSubmitting(true);

    // Fire-and-forget: save lead to DB, don't block redirect
    fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre,
        email,
        fuente: "cta_calendly",
      }),
    }).catch(() => {});

    // Redirect to Calendly with prefilled data
    const params = new URLSearchParams({
      name: nombre,
      email: email,
    });
    window.location.href = `${CALENDLY_URL}?${params.toString()}`;
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
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-lg shadow-metric w-full max-w-md">
        <div className="flex items-start justify-between p-6 pb-4 border-b border-muted">
          <div>
            <h2
              id="modal-title"
              className="font-display text-xl font-bold text-foreground"
            >
              Agenda tu diagnóstico gratis
            </h2>
            <p className="text-sm text-muted-foreground font-sans mt-1">
              Tu nombre y email para reservar. En 30 segundos estás agendando.
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

        <div className="p-6">
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                Nombre completo <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                  if (errors.nombre) setErrors((p) => ({ ...p, nombre: undefined }));
                }}
                placeholder="Juan Pérez"
                className={inputClass("nombre")}
                disabled={submitting}
              />
              {errors.nombre && (
                <p className="text-xs text-destructive mt-1 font-sans">
                  {errors.nombre}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5 font-sans">
                Email <span className="text-destructive">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
                placeholder="juan@empresa.cl"
                className={inputClass("email")}
                disabled={submitting}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1 font-sans">
                  {errors.email}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-6 rounded-md bg-primary text-primary-foreground font-medium font-sans text-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Redirigiendo a Calendly..." : "Ir a agendar ahora →"}
            </button>

            <p className="text-xs text-muted-foreground text-center font-sans">
              30 minutos · Sin costo · Sin compromiso
            </p>
          </form>
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
