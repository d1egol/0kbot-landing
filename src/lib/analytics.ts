/**
 * Analytics helpers — GA4 + Meta Pixel
 *
 * All functions are non-blocking: they check for the global existence of
 * gtag/fbq before calling them, so they degrade silently in dev or when
 * the env vars are not configured.
 */

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number>
): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }
  } catch {
    // never block the user flow
  }
}

export function trackLeadCapture(
  source: "modal" | "diagnostico" | "contacto"
): void {
  try {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "conversion",
          source,
        });
      }
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: source });
      }
    }
  } catch {
    // never block the user flow
  }
}

/**
 * Evento por paso del DiagnosticoWizard — permite ver tasas de abandono
 * por paso en GA4 para identificar dónde se pierden leads.
 */
export function trackDiagnosticoStep(step: number, totalSteps: number): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "diagnostico_step", {
        event_category: "engagement",
        step,
        total_steps: totalSteps,
      });
    }
  } catch {
    // never block the user flow
  }
}

export function trackDiagnosticoCompleted(): void {
  try {
    if (typeof window !== "undefined") {
      if (typeof window.gtag === "function") {
        window.gtag("event", "diagnostico_completed", {
          event_category: "conversion",
        });
      }
      if (typeof window.fbq === "function") {
        window.fbq("track", "CompleteRegistration");
      }
    }
  } catch {
    // never block the user flow
  }
}

export function trackCTAClick(ctaName: string, location: string): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cta_click", {
        cta_name: ctaName,
        location,
      });
    }
  } catch {
    // never block the user flow
  }
}
