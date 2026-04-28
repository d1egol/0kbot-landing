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

/**
 * Falla al guardar el lead en /api/leads (timeout, 5xx, network error).
 * Se dispara desde el cliente antes de redirigir a Calendly, para poder
 * monitorear drift entre leads reportados por Calendly vs Supabase.
 */
export function trackLeadSaveFailed(
  source: "modal" | "diagnostico" | "contacto",
  reason: "timeout" | "network" | "server_error" | "unknown"
): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "lead_save_failed", {
        event_category: "error",
        source,
        reason,
      });
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

export function trackMobileMenuOpen(): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "mobile_menu_open", {
        event_category: "engagement",
      });
    }
  } catch {
    // never block the user flow
  }
}

export function trackROIEstimatorStarted(): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "roi_estimator_started", {
        event_category: "engagement",
      });
    }
  } catch {
    // never block the user flow
  }
}

/**
 * Uso pasivo de la calculadora ROI — se dispara una vez por sesion despues
 * de que el usuario termino de ajustar inputs (debounce). Sirve para medir
 * engagement de la herramienta aunque no hagan click en el CTA final.
 */
export function trackCalculatorComputed(params: {
  equipo: number;
  ahorro_anual: number;
  payback_meses: number | null;
  roi_12m: number;
}): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "calculator_computed", {
        event_category: "engagement",
        equipo: params.equipo,
        ahorro_anual: Math.round(params.ahorro_anual),
        payback_meses: params.payback_meses ?? 0,
        roi_12m: Math.round(params.roi_12m),
      });
    }
  } catch {
    // never block the user flow
  }
}
