"use client";

import { useState } from "react";
import { Send, Mail, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const initialForm: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  mensaje: "",
};

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          empresa: form.empresa || undefined,
          email: form.email,
          telefono: form.telefono || undefined,
          problema: form.mensaje,
          fuente: "contacto_page",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Error al enviar el formulario.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Error inesperado. Intenta nuevamente."
      );
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container-wide">
          <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
            Contacto
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4 max-w-3xl">
            Solicita tu diagnóstico inicial
          </h1>
          <p className="text-lg text-primary-foreground/75 max-w-2xl font-body">
            Cuéntanos sobre tu pyme y los desafíos que enfrentas. Te
            responderemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <div className="bg-card border border-accent/30 rounded-xl p-10 text-center space-y-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                    style={{ backgroundColor: "#D4A853", opacity: 0.15 }}
                  />
                  <h2 className="font-heading text-xl font-bold text-foreground">
                    ¡Mensaje recibido!
                  </h2>
                  <p className="text-muted-foreground font-body">
                    Gracias por contactarnos. Revisaremos tu solicitud y te
                    responderemos en menos de 24 horas hábiles.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-sm text-accent hover:underline font-body"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="font-body">
                        Nombre *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa" className="font-body">
                        Empresa
                      </Label>
                      <Input
                        id="empresa"
                        name="empresa"
                        placeholder="Nombre de tu empresa"
                        value={form.empresa}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="font-body">
                        Teléfono (opcional)
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        placeholder="+56 9 1234 5678"
                        value={form.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje" className="font-body">
                      ¿Cuál es tu principal desafío operativo? *
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      placeholder="Cuéntanos brevemente qué problemas enfrentas en tu operación, qué te gustaría mejorar o cualquier contexto relevante."
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive font-body">
                      {errorMsg}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-md font-semibold font-body text-sm hover:bg-accent/90 transition-colors disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    {status === "loading" ? "Enviando…" : "Enviar solicitud"}
                  </Button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg mb-3">
                  ¿Qué pasa después?
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground font-body">
                  {[
                    "Recibimos tu solicitud y la revisamos.",
                    "Te contactamos para agendar una reunión de diagnóstico.",
                    "Conversamos sobre tu operación y tus desafíos.",
                    "Te enviamos una propuesta personalizada.",
                  ].map((step, i) => (
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

              <div className="bg-muted rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-body">
                      Email
                    </p>
                    <p className="text-sm font-medium text-foreground font-body">
                      hola@0kbot.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-body">
                      Respuesta
                    </p>
                    <p className="text-sm font-medium text-foreground font-body">
                      Menos de 24 horas hábiles
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
