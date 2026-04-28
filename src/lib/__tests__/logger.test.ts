import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { logInfo, logWarn, logError, newRequestId } from "@/lib/logger";

describe("newRequestId", () => {
  it("retorna 8 caracteres", () => {
    const id = newRequestId();
    expect(id).toHaveLength(8);
  });

  it("genera ids únicos en llamadas sucesivas", () => {
    const a = newRequestId();
    const b = newRequestId();
    expect(a).not.toBe(b);
  });
});

describe("logInfo / logWarn / logError — modo dev (legible)", () => {
  let logSpy: ReturnType<typeof vi.spyOn>;
  let warnSpy: ReturnType<typeof vi.spyOn>;
  let errorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "development");
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("logInfo escribe a console.log con formato legible incluyendo flow y endpoint", () => {
    logInfo("test message", { flow: "lead", endpoint: "/api/leads", requestId: "abc12345" });
    expect(logSpy).toHaveBeenCalledOnce();
    const arg = logSpy.mock.calls[0]?.[0];
    expect(typeof arg).toBe("string");
    expect(arg).toContain("[lead:/api/leads]");
    expect(arg).toContain("(abc12345)");
    expect(arg).toContain("INFO");
    expect(arg).toContain("test message");
  });

  it("logError escribe a console.error", () => {
    logError("oops", { flow: "lead", endpoint: "/api/leads", errorCode: "E1" });
    expect(errorSpy).toHaveBeenCalledOnce();
  });

  it("logWarn escribe a console.warn", () => {
    logWarn("careful", { flow: "lead", endpoint: "/api/leads" });
    expect(warnSpy).toHaveBeenCalledOnce();
  });
});

describe("log — modo prod (JSON)", () => {
  let logSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "production");
    logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("emite JSON parseable con todos los fields", () => {
    logInfo("evento", {
      flow: "lead",
      endpoint: "/api/leads",
      requestId: "abc12345",
      result: "ok",
    });
    const out = logSpy.mock.calls[0]?.[0] as string;
    const parsed = JSON.parse(out);
    expect(parsed).toMatchObject({
      level: "info",
      msg: "evento",
      flow: "lead",
      endpoint: "/api/leads",
      requestId: "abc12345",
      result: "ok",
    });
    expect(parsed.ts).toBeDefined();
  });
});
