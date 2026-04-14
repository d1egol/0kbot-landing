/**
 * Simple in-memory rate limiter for Next.js API routes.
 *
 * LIMITACIÓN SERVERLESS: En Vercel/serverless, cada instancia mantiene su propio
 * Map en memoria. El store se resetea en cada cold start y no se comparte entre
 * instancias concurrentes. Esto significa que el rate limiting es best-effort:
 * protege contra ráfagas dentro de una misma instancia warm, pero no garantiza
 * un límite global estricto bajo alta concurrencia.
 *
 * Para un rate limiter global y persistente, reemplazar el Map por Upstash Redis
 * (@upstash/ratelimit) sin cambiar la interfaz de checkRateLimit().
 */

interface RateEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateEntry>();

// Cleanup stale entries every 5 minutes to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store) {
    if (entry.resetAt < now) store.delete(key);
  }
}, 5 * 60 * 1000);

/**
 * @param ip       - Client IP (IPv4 or IPv6)
 * @param limit    - Max requests allowed per window (default: 5)
 * @param windowMs - Window duration in ms (default: 60 000)
 */
export function checkRateLimit(
  ip: string,
  limit = 5,
  windowMs = 60_000
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || entry.resetAt < now) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, resetAt: now + windowMs };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  return { allowed: true, remaining: limit - entry.count, resetAt: entry.resetAt };
}
