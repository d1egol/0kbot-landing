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
 * Click en CTA hacia la vertical de seguridad (seguridad.0kbot.com).
 * `location` permite distinguir si el click vino de la sección puente
 * de la home, del panel post-diagnóstico del wizard, o de futuros puntos
 * de derivación.
 *
 * NOTA: para ver el journey cross-dominio completo en GA4, el contenedor
 * GTM (GTM-TKKTNXBS) debe tener cross-domain linker configurado entre
 * 0kbot.com y seguridad.0kbot.com. Sin ese paso, el evento se registra
 * pero la sesión se rompe al cruzar el dominio.
 */
export function trackCentinelaCtaClick(location: string): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "centinela_cta_click", { location });
    }
  } catch {
    // never block the user flow
  }
}

/**
 * Navegación saliente hacia un dominio propio distinto (hoy: seguridad.0kbot.com).
 * Complementa `cta_click` con metadata específica del journey cross-vertical.
 */
export function trackCrossDomainReferral(
  destination: string,
  sourceSection: string
): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "cross_domain_referral", {
        destination,
        source_section: sourceSection,
      });
    }
  } catch {
    // never block the user flow
  }
}

/**
 * Sector regulado detectado en el DiagnosticoWizard. Se dispara al
 * seleccionar industria en paso 2 si la opción está en REGULATED_SECTORS
 * (ver constants.ts). Permite medir qué fracción del tráfico inbound
 * de la home generalista corresponde a verticales con obligaciones
 * regulatorias activas.
 */
export function trackRegulatedSectorDetected(sector: string): void {
  try {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "regulated_sector_detected", { sector });
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
