# GTM cross-domain linker — 0kbot.com ↔ seguridad.0kbot.com

> Configuración manual en la UI de Google Tag Manager. No hay MCP de GTM, por eso esto es paso a paso para Diego. Una vez configurado, los eventos del PR #16 (`centinela_cta_click`, `cross_domain_referral`, `regulated_sector_detected`) se podrán correlacionar con la sesión del visitante cuando cruza al subdominio.

## Pre-requisitos

- Acceso editor al contenedor GTM **`GTM-TKKTNXBS`** (el que ya está inyectado en `0kbot.com` vía `src/app/layout.tsx`).
- Acceso editor al contenedor GTM del subdominio **`seguridad.0kbot.com`** — verificar primero qué contenedor usa (probablemente el mismo `GTM-TKKTNXBS` si reusa o uno propio si es independiente).
- ID de la propiedad GA4 (la que recibe los eventos hoy).

## Paso 1 — Verificar contenedor GTM del subdominio

1. Abrir `https://seguridad.0kbot.com` en una pestaña.
2. Devtools → Network → buscar request a `googletagmanager.com/gtm.js?id=GTM-XXXXXX`.
3. Anotar el ID:
   - **Caso A:** mismo `GTM-TKKTNXBS` → un solo contenedor sirve ambos dominios. Más simple.
   - **Caso B:** contenedor distinto (ej. `GTM-YYYYYY`) → hay que configurar el linker en ambos contenedores.

## Paso 2 — Configurar Google tag (GA4 Configuration) con domain linking

En **GTM > Tags** del contenedor `GTM-TKKTNXBS`:

1. Abrir la tag de tipo **Google tag** o **GA4 Configuration** que dispara la inicialización GA4 (suele llamarse "GA4 Config" o "Google tag - GA4").
2. En la sección **Configuration settings** → **Add row** (o similar según versión de UI):
   - **Field name**: `linker`
   - **Value**:
     ```json
     {"domains":["0kbot.com","seguridad.0kbot.com"],"accept_incoming":true}
     ```
3. Guardar la tag.

> Si la UI muestra **Cross-domain measurement** como sección separada en lugar de campo `linker`:
> - Toggle **Auto-link domains**: ON
> - **Domains to auto-link**: agregar `0kbot.com,seguridad.0kbot.com` (separados por coma, sin espacios).
> - **Accept cross-domain linker parameters from referring domains**: ON

## Paso 3 — Configurar el segundo contenedor (solo si caso B del paso 1)

Si `seguridad.0kbot.com` usa un contenedor GTM distinto, repetir paso 2 en ese contenedor con la misma lista de dominios. El linker GA4 funciona bidireccional: ambos contenedores deben aceptar el parámetro `_gl` para que la sesión se preserve cruzando el dominio.

## Paso 4 — Publicar el contenedor

1. **Submit** en la esquina superior derecha del contenedor.
2. Version Name: `cross-domain-linker-0kbot-seguridad-2026-05-13`
3. Description: "Habilita Google tag linker entre 0kbot.com y seguridad.0kbot.com para sticheo de sesiones GA4 (PR #16 sección puente)."
4. **Publish**.

## Paso 5 — Validar

### En navegador

1. Modo incógnito → ir a `https://0kbot.com`.
2. Click en el CTA "Solicitar diagnóstico de seguridad" de la `VerticalesSection`.
3. En la nueva pestaña con `seguridad.0kbot.com`, mirar la URL: debe tener un parámetro `_gl=...` (cookie linker GA4). Si está, el linker funciona.

### En GA4 Realtime / Debug View

1. GA4 → Reports → Realtime.
2. Activar **DebugView** (instalar extension *GA Debug* o usar `gtag('config', GA_ID, {'debug_mode': true})`).
3. Generar tráfico: cruzar de `0kbot.com` a `seguridad.0kbot.com` haciendo click en el CTA.
4. En DebugView verificar:
   - Aparece evento `centinela_cta_click` con location=`verticales_section` en la sesión.
   - Aparece evento `cross_domain_referral` con destination=`seguridad.0kbot.com`.
   - **Misma `session_id`** persistente al cruzar (sin linker rompe; con linker se mantiene).
   - `regulated_sector_detected` cuando completés el wizard con un sector regulado.

### Diagnóstico de problemas

| Síntoma | Causa probable | Fix |
|---|---|---|
| URL al cruzar no tiene `_gl=...` | Auto-link domains apagado o tag no publicada | Volver al paso 2/4 |
| Eventos aparecen pero sesión nueva al cruzar | `accept_incoming` no activo en contenedor destino | Paso 3 — verificar contenedor de seguridad |
| Nada llega a GA4 | Bloqueador de ads/tracking en el navegador de prueba | Probar en otro navegador / sin extensiones |
| `centinela_cta_click` no aparece | Build de prod no llegó | Verificar que `https://0kbot.com` está sirviendo el commit `993e5a2` |

## Próximo paso después del setup

Una vez validado el linker:
- Esperar 48h de datos.
- Crear **Custom Conversion** en Meta Pixel: `centinela_cta_click` → audiencia de remarketing "Centinela Intent".
- Crear segmento en GA4: usuarios con `regulated_sector_detected` → audiencia para campañas dirigidas al subdominio.

---

**Referencias internas:**
- Eventos definidos en: `src/lib/analytics.ts` (3 helpers tipados nuevos)
- Constantes: `src/lib/constants.ts` (`ANALYTICS_EVENTS`, `SEGURIDAD_URL`)
- Componente que dispara: `src/components/home/VerticalesSection.tsx`
- Wizard sector-aware: `src/components/ui/DiagnosticoWizard.tsx`
- PR: `https://github.com/d1egol/0kbot-landing/pull/16` (mergeado 2026-05-13)
