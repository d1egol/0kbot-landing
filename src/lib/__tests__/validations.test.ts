import { describe, it, expect } from "vitest";
import {
  leadSchema,
  diagnosticoSchema,
  onboardingSchema,
} from "@/lib/validations";

describe("leadSchema", () => {
  const validBase = {
    nombre: "Diego López",
    email: "diego@empresa.cl",
    consent: true,
  };

  it("acepta lead minimo válido (consent obligatorio)", () => {
    const r = leadSchema.safeParse(validBase);
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.tamano_empresa).toBe("<20"); // default aplicado
      expect(r.data.estado).toBe("nuevo"); // default aplicado
    }
  });

  it("rechaza si falta consent", () => {
    const r = leadSchema.safeParse({
      nombre: "Diego López",
      email: "diego@empresa.cl",
    });
    expect(r.success).toBe(false);
    if (!r.success) {
      expect(r.error.issues.some((i) => i.path.includes("consent"))).toBe(true);
    }
  });

  it("rechaza consent === false", () => {
    const r = leadSchema.safeParse({ ...validBase, consent: false });
    expect(r.success).toBe(false);
  });

  it("rechaza email inválido", () => {
    const r = leadSchema.safeParse({ ...validBase, email: "no-es-email" });
    expect(r.success).toBe(false);
  });

  it("normaliza email a lowercase + trim", () => {
    const r = leadSchema.safeParse({
      ...validBase,
      email: "  Diego@Empresa.CL  ",
    });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.email).toBe("diego@empresa.cl");
  });

  it("rechaza nombre con < 2 caracteres", () => {
    const r = leadSchema.safeParse({ ...validBase, nombre: "D" });
    expect(r.success).toBe(false);
  });

  it("acepta tamano_empresa explícito y lo conserva", () => {
    const r = leadSchema.safeParse({ ...validBase, tamano_empresa: "50-100" });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.tamano_empresa).toBe("50-100");
  });

  it("rechaza tamano_empresa fuera del enum", () => {
    const r = leadSchema.safeParse({ ...validBase, tamano_empresa: "1000+" });
    expect(r.success).toBe(false);
  });
});

describe("diagnosticoSchema", () => {
  const validBase = {
    nombre: "Diego",
    email: "diego@empresa.cl",
    tamano: "20-50" as const,
    industria: "Distribución",
    dolor: "Errores en picking",
    timeline: "Lo antes posible",
    consent: true,
  };

  it("acepta diagnóstico mínimo válido", () => {
    const r = diagnosticoSchema.safeParse(validBase);
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.intentadoAntes).toBe(false); // default
  });

  it("rechaza si falta consent", () => {
    const { consent: _consent, ...without } = validBase;
    void _consent;
    const r = diagnosticoSchema.safeParse(without);
    expect(r.success).toBe(false);
  });

  it("rechaza tamano fuera del enum", () => {
    const r = diagnosticoSchema.safeParse({ ...validBase, tamano: "raro" });
    expect(r.success).toBe(false);
  });

  it("rechaza dolor vacío (min 1)", () => {
    const r = diagnosticoSchema.safeParse({ ...validBase, dolor: "" });
    expect(r.success).toBe(false);
  });

  it("preserva intentadoAntes cuando se pasa true", () => {
    const r = diagnosticoSchema.safeParse({
      ...validBase,
      intentadoAntes: true,
    });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.intentadoAntes).toBe(true);
  });
});

describe("onboardingSchema", () => {
  const validBase = {
    nombre: "Diego",
    email: "diego@empresa.cl",
    empresa: "Empresa SpA",
    rubro: "Servicios profesionales" as const,
    tamano: "21-50" as const,
    proceso_principal:
      "Coordinación de pedidos por WhatsApp se duplica con planilla.",
    intentado_antes: "Excel / hojas de cálculo" as const,
    resultado_ideal: "Cerrar el día sin reclamos por pedidos perdidos.",
    plazo: "1-3 meses" as const,
    presupuesto: "$500.000 – $1.500.000 CLP" as const,
    consent: true,
  };

  it("acepta onboarding válido", () => {
    const r = onboardingSchema.safeParse(validBase);
    expect(r.success).toBe(true);
  });

  it("rechaza si falta consent", () => {
    const { consent: _consent, ...without } = validBase;
    void _consent;
    const r = onboardingSchema.safeParse(without);
    expect(r.success).toBe(false);
  });

  it("rechaza proceso_principal demasiado corto (< 10 chars)", () => {
    const r = onboardingSchema.safeParse({
      ...validBase,
      proceso_principal: "corto",
    });
    expect(r.success).toBe(false);
  });

  it("rechaza presupuesto fuera del enum", () => {
    const r = onboardingSchema.safeParse({
      ...validBase,
      presupuesto: "Más de 100M",
    });
    expect(r.success).toBe(false);
  });

  it("rechaza empresa con < 2 caracteres", () => {
    const r = onboardingSchema.safeParse({ ...validBase, empresa: "X" });
    expect(r.success).toBe(false);
  });
});
