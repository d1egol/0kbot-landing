import { describe, it, expect } from "vitest";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  getClientIp,
  enforceRateLimit,
  parseJsonOr400,
  validateBody,
  rateLimitParseValidate,
} from "@/lib/api-handler";

function buildRequest(
  body: unknown,
  options: { ip?: string; jsonInvalid?: boolean } = {}
): NextRequest {
  const headers = new Headers();
  if (options.ip) headers.set("x-forwarded-for", options.ip);
  const req = new NextRequest(new URL("https://0kbot.com/api/test"), {
    method: "POST",
    headers,
    body: options.jsonInvalid
      ? "no-es-json"
      : body !== undefined
      ? JSON.stringify(body)
      : null,
  });
  return req;
}

describe("getClientIp", () => {
  it("extrae primer IP de x-forwarded-for separado por comas", () => {
    const req = buildRequest(undefined, { ip: "1.2.3.4, 5.6.7.8" });
    expect(getClientIp(req)).toBe("1.2.3.4");
  });

  it("retorna 'unknown' si no hay headers", () => {
    const req = buildRequest(undefined);
    expect(getClientIp(req)).toBe("unknown");
  });

  it("usa x-real-ip como fallback", () => {
    const req = new NextRequest(new URL("https://0kbot.com/api/test"), {
      method: "POST",
      headers: new Headers({ "x-real-ip": "9.9.9.9" }),
    });
    expect(getClientIp(req)).toBe("9.9.9.9");
  });
});

describe("enforceRateLimit", () => {
  it("permite primera request (null)", () => {
    const req = buildRequest(undefined, { ip: `rate-test-${Date.now()}` });
    expect(enforceRateLimit(req)).toBeNull();
  });

  it("retorna 429 después de exceder el límite", () => {
    const ip = `rate-burst-${Date.now()}-${Math.random()}`;
    // Default: 5 requests por 60s. Quemamos las 5 + 1 extra.
    for (let i = 0; i < 5; i++) {
      enforceRateLimit(buildRequest(undefined, { ip }));
    }
    const blocked = enforceRateLimit(buildRequest(undefined, { ip }));
    expect(blocked).toBeInstanceOf(NextResponse);
    expect(blocked?.status).toBe(429);
    expect(blocked?.headers.get("Retry-After")).toBeTruthy();
  });
});

describe("parseJsonOr400", () => {
  it("retorna { data } con body JSON válido", async () => {
    const req = buildRequest({ foo: "bar" });
    const result = await parseJsonOr400(req);
    expect(result).not.toBeInstanceOf(NextResponse);
    if (!(result instanceof NextResponse)) {
      expect(result.data).toEqual({ foo: "bar" });
    }
  });

  it("retorna 400 con body que no es JSON", async () => {
    const req = buildRequest(undefined, { jsonInvalid: true });
    const result = await parseJsonOr400(req);
    expect(result).toBeInstanceOf(NextResponse);
    if (result instanceof NextResponse) {
      expect(result.status).toBe(400);
    }
  });
});

describe("validateBody", () => {
  const schema = z.object({
    nombre: z.string().min(2),
    edad: z.number().int().nonnegative().default(0),
  });

  it("retorna { data } con datos válidos y aplica defaults", () => {
    const result = validateBody(schema, { nombre: "Diego" });
    expect(result).not.toBeInstanceOf(NextResponse);
    if (!(result instanceof NextResponse)) {
      expect(result.data).toEqual({ nombre: "Diego", edad: 0 });
    }
  });

  it("retorna 422 con datos inválidos", () => {
    const result = validateBody(schema, { nombre: "X" });
    expect(result).toBeInstanceOf(NextResponse);
    if (result instanceof NextResponse) {
      expect(result.status).toBe(422);
    }
  });
});

describe("rateLimitParseValidate", () => {
  const schema = z.object({
    nombre: z.string().min(2),
    consent: z.literal(true),
  });

  it("happy path completo: rate limit + JSON + Zod válidos", async () => {
    const req = buildRequest(
      { nombre: "Diego", consent: true },
      { ip: `combined-${Date.now()}` }
    );
    const result = await rateLimitParseValidate(req, schema);
    expect(result).not.toBeInstanceOf(NextResponse);
    if (!(result instanceof NextResponse)) {
      expect(result.data.nombre).toBe("Diego");
    }
  });

  it("falla 422 si Zod rechaza", async () => {
    const req = buildRequest(
      { nombre: "X", consent: true },
      { ip: `combined-fail-${Date.now()}` }
    );
    const result = await rateLimitParseValidate(req, schema);
    expect(result).toBeInstanceOf(NextResponse);
    if (result instanceof NextResponse) expect(result.status).toBe(422);
  });

  it("falla 400 si body no es JSON", async () => {
    const req = buildRequest(undefined, {
      ip: `combined-bad-${Date.now()}`,
      jsonInvalid: true,
    });
    const result = await rateLimitParseValidate(req, schema);
    expect(result).toBeInstanceOf(NextResponse);
    if (result instanceof NextResponse) expect(result.status).toBe(400);
  });
});
