/**
 * Logger minimal para los API routes.
 *
 * En `dev` imprime legible (multi-línea, fácil de leer en `npm run dev`).
 * En `prod` imprime una sola línea JSON estructurada (parseable por Vercel Logs Drain o Datadog
 * cuando se agregue un sink externo en una iteración futura).
 *
 * Cada log incluye un `requestId` que se genera con `newRequestId()` al inicio de cada handler.
 * Esto permite correlacionar logs del mismo request en producción.
 */

type Level = "info" | "warn" | "error";

interface LogFields {
  flow: string;
  endpoint: string;
  result?: "ok" | "fail" | "in_progress";
  errorCode?: string;
  requestId?: string;
  [key: string]: unknown;
}

function formatPretty(level: Level, msg: string, fields: LogFields): string {
  const tag = `[${fields.flow}:${fields.endpoint}]`;
  const id = fields.requestId ? ` (${fields.requestId})` : "";
  const extra = Object.entries(fields)
    .filter(([k]) => !["flow", "endpoint", "requestId"].includes(k))
    .map(([k, v]) => `${k}=${JSON.stringify(v)}`)
    .join(" ");
  return `${tag}${id} ${level.toUpperCase()} ${msg}${extra ? " · " + extra : ""}`;
}

function emit(level: Level, msg: string, fields: LogFields): void {
  const isProd = process.env.NODE_ENV === "production";
  if (isProd) {
    const payload = {
      ts: new Date().toISOString(),
      level,
      msg,
      ...fields,
    };
    const out = JSON.stringify(payload);
    if (level === "error") console.error(out);
    else if (level === "warn") console.warn(out);
    else console.log(out);
    return;
  }
  const pretty = formatPretty(level, msg, fields);
  if (level === "error") console.error(pretty);
  else if (level === "warn") console.warn(pretty);
  else console.log(pretty);
}

export function logInfo(msg: string, fields: LogFields): void {
  emit("info", msg, fields);
}

export function logWarn(msg: string, fields: LogFields): void {
  emit("warn", msg, fields);
}

export function logError(msg: string, fields: LogFields): void {
  emit("error", msg, fields);
}

/**
 * Genera un id corto (8 chars hex) único por request. Se incluye en cada log del handler para
 * correlación en producción. En dev también ayuda a distinguir requests concurrentes.
 */
export function newRequestId(): string {
  // crypto.randomUUID está disponible en Edge runtime y Node 19+ (Vercel).
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID().slice(0, 8);
  }
  // Fallback para entornos antiguos.
  return Math.random().toString(36).slice(2, 10);
}
