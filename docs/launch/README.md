# Checklist de Lanzamiento — 0kbot Consultora

Estado actual de los pasos para el lanzamiento oficial.
Actualiza el estado de cada ítem a medida que los completes.

---

## BLOQUE 1 — Legal y operacional

| # | Tarea | Estado | Referencia |
|---|---|---|---|
| 1 | Constituir SpA en Chile (Empresa en un Día) | ✅ Listo | `FORMALIZACION-LEGAL.md` |
| 2 | Inicio de actividades en SII (Primera categoría) | ⬜ Pendiente | `FORMALIZACION-LEGAL.md` |
| 3 | Abrir cuenta bancaria empresa | ⬜ Pendiente | `FORMALIZACION-LEGAL.md` |
| 4 | Configurar Calendly (evento "Diagnóstico 30 min") | ✅ Listo | `https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot` |
| 5 | Conectar Calendly con Google Calendar de hola@0kbot.com | ✅ Listo | Calendly → Account → Calendar connections |
| 6 | Link de Calendly actualizado en todos los CTAs del sitio | ✅ Listo | Todos los CTAs → ContactModal → Calendly |
| 7 | Definir precio del programa de 12 semanas | ⏳ Caso a caso — cada proyecto es relativo. Ver `PRICING.md` para framework de rangos por tamaño | `PRICING.md` |
| 8 | Configurar método de cobro | ⏳ Caso a caso — definir con primer cliente concreto | `COBRO.md` |

## BLOQUE 2 — Contenido y caso de estudio

| # | Tarea | Estado | Referencia |
|---|---|---|---|
| 9 | Documentar caso Dos Huertos (frutas y verduras) | ⚠️ Cerrado — relación terminada. CRM construido vive en repo separado de Dos Huertos. Decidir si se usa como caso público o se reemplaza por el primer cliente nuevo | `CASO-ESTUDIO-TEMPLATE.md` |
| 10 | Agregar caso real con métricas a CasosSection | ⬜ Pendiente — depende de #9 (decisión Dos Huertos vs nuevo cliente) | `src/components/home/CasosSection.tsx` |
| 11 | Publicar primeros 3 posts en RRSS vía Metricool | ⬜ Pendiente | `docs/social-media/` |
| 12 | Actualizar bio de Instagram con link a 0kbot.com | ✅ Listo | — |

## BLOQUE 3 — Primer cliente

| # | Tarea | Estado | Referencia |
|---|---|---|---|
| 13 | Identificar 10 prospectos por rubro | ⬜ Pendiente — sin lista aún | `docs/email-templates/README.md` |
| 14 | Enviar primeros cold emails con template correspondiente | ⏳ Drafts genéricos por rubro listos en Gmail (`hola@0kbot.com` → Drafts), pendiente personalización por prospecto | `docs/email-templates/` |
| 15 | Primera conexión de LinkedIn por rubro | ⬜ Pendiente | `docs/email-templates/linkedin-dm.md` |
| 16 | Tener primera reunión de diagnóstico agendada | ⬜ Pendiente | — |

## BLOQUE 4 — Ya listo ✅

### Producto core
| Tarea | Detalle |
|---|---|
| Sitio web en producción | `0kbot.com` con todas las secciones optimizadas |
| Blog con **13 artículos** | `/blog` + SEO configurado |
| Hero v2 (2026-04-27) | H1: "No vendemos IA. Vendemos lunes tranquilos." con eyebrow "Mejora de procesos para pymes en Chile". CTA primario → `/#estimador` (sección embebida). Visual con flow del Método 0kbot OS. |
| SEO on-page optimizado | Keywords distribuidas en metadata, hero, secciones |
| Flujo de conversión Calendly | ContactModal (2 campos) → lead en Supabase → redirect a Calendly con prefill |
| Captura de leads en Supabase | Verificado: leads se guardan correctamente con fuente `cta_calendly` |
| Emails transaccionales | Resend configurado — `sendTransactionalEmail` dispatcher unificado (3 flows × 2 kinds) |
| FAQs actualizadas | 6 preguntas con respuestas alineadas a la marca |
| CTAs optimizados | Todos orientados a pérdidas/números, no genéricos |
| Homepage | 13 secciones + `FloatingCTA` (mobile). Rediseño v2 (2026-04-27): Método 0kbot OS, ROI estimator embebido, sección "No somos software caro", PainPoints en bento 2×3, navbar con anchors. Ver CLAUDE.md y PROMPT-HOMEPAGE-CRO.md |
| DiagnosticoSection con DiagnosticoWizard de 6 pasos | tamaño · industria · dolor · intentadoAntes · timeline · contacto |
| Formulario de onboarding | `/onboarding` — cuestionario pre-reunión calificado (presupuesto, plazo, rubro) |
| Email `hola@0kbot.com` | Google Workspace activo |
| Redes sociales | LinkedIn empresa, Instagram, Facebook creados |
| Templates cold email | 4 rubros en `docs/email-templates/` + LinkedIn DMs + follow-up sequence |
| Posts RRSS | 15 posts listos (5 artículos × 3 redes) en `docs/social-media/` |
| Propuesta template | `docs/launch/PROPUESTA-TEMPLATE.md` |

### Páginas SEO construidas (no listadas en versiones previas del checklist)
| Sección | Páginas | Sitemap priority |
|---|---|---|
| `/calculadora-roi` | Herramienta interactiva (lead magnet) con JSON-LD `WebApplication` | 0.85 |
| `/comparar/*` | 0kbot vs consultoras / vs contratar / ERP vs procesos / interno vs externa (4 sub + index) | 0.75–0.80 |
| `/herramientas/*` | n8n · Make · Airtable · Google Workspace (4 sub + index) | 0.75–0.80 |
| `/industria/*` | Retail · Manufactura · Servicios · Salud · Logística (5 sub + index) | 0.75–0.80 |
| `/casos/[industry]` | 6 escenarios dinámicos desde `src/lib/casos.ts` | 0.80 |
| Landings principales SEO | `/ia-para-pymes` · `/mejora-de-procesos` · `/automatizacion-procesos-chile` · `/transformacion-digital-pymes` | 0.90 |
| OG images | 16 archivos `opengraph-image.tsx` (12 vía helper `renderOgImage`, 4 con layout custom) | — |

### Performance e infraestructura
| Tarea | Detalle |
|---|---|
| Lighthouse CI bloqueante | thresholds en `lighthouserc.json`: perf 0.60 · a11y 0.85 · seo 0.95 · best-practices 0.70 |
| Headers de seguridad | CSP estricta, X-Frame-Options, Permissions-Policy en `next.config.mjs` |
| Bundle analyzer | configurado vía `ANALYZE=true npm run build` |
| Type checking | `npm run typecheck` (tsc --noEmit) sin errores |
| Linting dual | ESLint + Biome configurados |
| Sitemap dinámico | indexa blog y casos automáticamente desde `src/app/sitemap.ts` |
| Phase 4 (Magic UI + Lenis + GSAP) | **revertida tras review de Codex** — Lenis añadía +78ms TBT por gain cosmético, Magic UI/GSAP sin uso. Ver commit `1273f1b`. No reintentar como bundle |

---

## Próximos pasos sugeridos (orden de prioridad)

### Operacional (revenue-first)
1. **Inmediato:** Conectar Calendly con Google Calendar de hola@0kbot.com para que las citas aparezcan automáticamente (BLOQUE 1 #5)
2. **Esta semana:** Finalizar constitución SpA en tuempresa.cl (esperando firma digital) (BLOQUE 1 #1)
3. **Esta semana:** Documentar caso Dos Huertos con métricas reales (preguntar al cliente por WhatsApp) (BLOQUE 2 #9)
4. **Próxima semana:** Primer lote de 10 cold emails + LinkedIn DMs (BLOQUE 3 #13–15)
5. **Próxima semana:** Publicar primeros posts en RRSS (programar semana completa en Metricool) (BLOQUE 2 #11)

### Hygiene técnica (deuda priorizada)
1. **Decisión Navbar:** `/calculadora-roi` ya está enlazada en Footer pero no en Navbar primario. Evaluar si subirla (rompe regla "5 items" del CRO doc) o dejar solo en Footer.
2. **Lighthouse threshold**: subir `categories:performance` de `0.60` a `0.80` en `lighthouserc.json` para que el gate detecte regresiones reales (perf real ≈86 según commit `55f3573`).
3. **Tests automatizados**: agregar al menos 1 integration test por API route (`leads`, `diagnostico`, `onboarding`). Cero coverage hoy en las rutas críticas para conversión.
4. **Phase 4 cerrada como deuda resuelta**: NO reintentar el bundle Magic UI + Lenis + GSAP. Si se necesita una animación específica en el futuro, implementar à la carte.
