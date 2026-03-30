/**
 * Simple in-memory rate limiter for Next.js API routes.
 * The module-level Map persists across warm lambda invocations on the same instance.
 * Resets on cold start — acceptable for landing page traffic.
 *
 * For higher traffic needs, swap the store for Upstash Redis
 * using @upstash/ratelimit without touching the API routes.
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
