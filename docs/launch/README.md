# Checklist de Lanzamiento — 0kbot Consultora

Estado actual de los pasos para el lanzamiento oficial.
Actualiza el estado de cada ítem a medida que los completes.

---

## BLOQUE 1 — Legal y operacional

| # | Tarea | Estado | Referencia |
|---|---|---|---|
| 1 | Constituir SpA en Chile (Empresa en un Día) | ⬜ Pendiente (esperando firma digital tuempresa.cl) | `FORMALIZACION-LEGAL.md` |
| 2 | Inicio de actividades en SII (Primera categoría) | ⬜ Pendiente (requiere paso 1) | `FORMALIZACION-LEGAL.md` |
| 3 | Abrir cuenta bancaria empresa | ⬜ Pendiente (requiere paso 1) | `FORMALIZACION-LEGAL.md` |
| 4 | Configurar Calendly (evento "Diagnóstico 30 min") | ✅ Listo | `https://calendly.com/hola-0kbot/diagnostico-gratuito-0kbot` |
| 5 | Conectar Calendly con Google Calendar de hola@0kbot.com | ⬜ Pendiente | Calendly → Account → Calendar connections |
| 6 | Link de Calendly actualizado en todos los CTAs del sitio | ✅ Listo | Todos los CTAs → ContactModal → Calendly |
| 7 | Definir precio del programa de 12 semanas | ⬜ Pendiente | `PRICING.md` |
| 8 | Configurar método de cobro | ⬜ Pendiente | `COBRO.md` |

## BLOQUE 2 — Contenido y caso de estudio

| # | Tarea | Estado | Referencia |
|---|---|---|---|
| 9 | Documentar caso Dos Huertos (frutas y verduras) | ⬜ Pendiente (esperando métricas del cliente vía WhatsApp) | `CASO-ESTUDIO-TEMPLATE.md` |
| 10 | Agregar caso real con métricas a CasosSection | ⬜ Pendiente (requiere paso 9) | `src/components/home/CasosSection.tsx` |
| 11 | Publicar primeros 3 posts en RRSS vía Metricool | ⬜ Pendiente | `docs/social-media/` |
| 12 | Actualizar bio de Instagram con link a 0kbot.com | ⬜ Pendiente | — |

## BLOQUE 3 — Primer cliente

| # | Tarea | Estado | Referencia |
|---|---|---|---|
| 13 | Identificar 10 prospectos por rubro | ⬜ Pendiente | `docs/email-templates/README.md` |
| 14 | Enviar primeros 5 cold emails con template correspondiente | ⬜ Pendiente | `docs/email-templates/` |
| 15 | Primera conexión de LinkedIn por rubro | ⬜ Pendiente | `docs/email-templates/linkedin-dm.md` |
| 16 | Tener primera reunión de diagnóstico agendada | ⬜ Pendiente | — |

## BLOQUE 4 — Ya listo ✅

| Tarea | Detalle |
|---|---|
| Sitio web en producción | `0kbot.com` con todas las secciones optimizadas |
| Blog con 10 artículos | `/blog` + SEO configurado |
| Hero reescrito con copy claro | H1: "Automatizamos procesos para pymes en Chile" + "No vendemos IA. Vendemos lunes tranquilos." |
| SEO on-page optimizado | Keywords distribuidas en metadata, hero, secciones |
| Flujo de conversión Calendly | ContactModal (2 campos) → lead en Supabase → redirect a Calendly con prefill |
| Captura de leads en Supabase | Verificado: leads se guardan correctamente con fuente `cta_calendly` |
| Emails transaccionales | Resend configurado — notificaciones al registrar lead |
| FAQs actualizadas | 6 preguntas con respuestas alineadas a la marca |
| CTAs optimizados | Todos orientados a pérdidas/números, no genéricos |
| SolucionSection reescrita | 3 columnas: Qué/Cómo/Qué obtienes |
| DiagnosticoSection simplificada | CTA directo sin wizard de 6 pasos |
| Formulario de onboarding | `/onboarding` — cuestionario pre-reunión |
| Email `hola@0kbot.com` | Google Workspace activo |
| Redes sociales | LinkedIn empresa, Instagram, Facebook creados |
| Templates cold email | 4 rubros en `docs/email-templates/` |
| Posts RRSS | 15 posts listos (5 artículos × 3 redes) en `docs/social-media/` |
| LinkedIn DMs | Templates en `docs/email-templates/linkedin-dm.md` |
| Follow-up sequence | 2 emails en `docs/email-templates/followup-sequences.md` |
| Propuesta template | `docs/launch/PROPUESTA-TEMPLATE.md` |

---

## Próximos pasos sugeridos (orden de prioridad)

1. **Inmediato:** Conectar Calendly con Google Calendar de hola@0kbot.com para que las citas aparezcan automáticamente
2. **Esta semana:** Finalizar constitución SpA en tuempresa.cl (esperando firma digital)
3. **Esta semana:** Documentar caso Dos Huertos con métricas reales (preguntar al cliente por WhatsApp)
4. **Próxima semana:** Primer lote de 10 cold emails + LinkedIn DMs
5. **Próxima semana:** Publicar primeros posts en RRSS (programar semana completa en Metricool)
