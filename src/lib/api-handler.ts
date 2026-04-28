/**
 * Helpers compartidos para los API routes (`/api/leads`, `/api/diagnostico`, `/api/onboarding`).
 *
 * Concentran el patrón obligatorio de los handlers (rate limit → parseo JSON → validación Zod →
 * respuesta de error consistente) para evitar drift cuando un endpoint nuevo se agregue al sitio.
 *
 * Para reusar `enforceRateLimit` y `validateBody`, retorna `null` en éxito o un `NextResponse` ya
 * construido en error — el handler hace `if (resp) return resp;` y sigue de largo.
 */

import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

export function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

/**
 * Devuelve `null` si la request está dentro del límite, o un 429 con header Retry-After si no.
 * Default: 5 requests por 60 s por IP.
 */
export function enforceRateLimit(
  request: NextRequest,
  limit = 5,
  windowMs = 60_000
): NextResponse | null {
  const ip = getClientIp(request);
  const { allowed, resetAt } = checkRateLimit(ip, limit, windowMs);
  if (!allowed) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Intenta en unos minutos." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)),
        },
      }
    );
  }
  return null;
}

/**
 * Lee el body de la request como JSON. Devuelve `{ data }` en éxito o un `NextResponse` 400 si el
 * cuerpo no es JSON válido.
 */
export async function parseJsonOr400(
  request: NextRequest
): Promise<{ data: unknown } | NextResponse> {
  try {
    return { data: await request.json() };
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido" }, { status: 400 });
  }
}

/**
 * Valida el body parseado contra un schema Zod. Devuelve `{ data }` (con el tipo OUTPUT del schema,
 * incluyendo defaults aplicados) en éxito, o un 422 con los issues si falla.
 *
 * Usamos `z.output<S>` en la firma para que defaults y transforms del schema lleguen tipados
 * correctamente al handler.
 */
export function validateBody<S extends z.ZodTypeAny>(
  schema: S,
  body: unknown
): { data: z.output<S> } | NextResponse {
  const result = schema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: result.error.issues },
      { status: 422 }
    );
  }
  return { data: result.data };
}

/**
 * Helper combinado: rate limit + parseo JSON + validación Zod en una sola llamada.
 * Devuelve `{ data }` con el tipo OUTPUT del schema, o el `NextResponse` de error correspondiente.
 */
export async function rateLimitParseValidate<S extends z.ZodTypeAny>(
  request: NextRequest,
  schema: S,
  rateLimitOpts?: { limit?: number; windowMs?: number }
): Promise<{ data: z.output<S> } | NextResponse> {
  const rl = enforceRateLimit(
    request,
    rateLimitOpts?.limit,
    rateLimitOpts?.windowMs
  );
  if (rl) return rl;

  const body = await parseJsonOr400(request);
  if (body instanceof NextResponse) return body;

  const validated = validateBody(schema, body.data);
  if (validated instanceof NextResponse) return validated;

  return validated;
}
