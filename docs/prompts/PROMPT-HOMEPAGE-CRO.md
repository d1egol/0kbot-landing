# Guía de CRO y arquitectura del Homepage — 0kbot

> Este documento describe el **estado actual implementado** del homepage tras las mejoras CRO identificadas en auditoría.
> Úsalo como referencia antes de proponer cambios en `src/app/page.tsx` o cualquier sección del homepage.

---

## Estado actual (actualizado marzo 2026)

El homepage tiene **8 secciones** (reducidas de 13 originales). Cada sección tiene una función específica en el funnel.

---

## Estructura actual del homepage

```tsx
// src/app/page.tsx
<HeroSection />         // 1 — H1 + propuesta de valor + visual diagnóstico + credenciales
<PainPointsSection />   // 2 — Dolores del cliente (mejor copy del sitio)
<CredencialesSection /> // 3 — ¿Por qué confiar? — antes de explicar el proceso
<ComoFuncionaSection /> // 4 — Metodología 12 semanas (4 fases)
<CasosSection />        // 5 — Escenarios con métricas
<FAQSection />          // 6 — Preguntas frecuentes (incluye precio en UF)
<DiagnosticoSection />  // 7 — DiagnosticoWizard (calificación)
<CTAFinalSection />     // 8 — CTA final de urgencia
<FloatingCTA />         // Mobile only — botón flotante
```

### Por qué este orden

El orden sigue el arco de credibilidad del buyer:
1. **Hero**: ¿De qué va esto? (H1 + subhead + visual tangible)
2. **PainPoints**: ¿Ese es mi problema? (espejo del cliente)
3. **Credenciales**: ¿Por qué Diego? (antes de explicar el proceso, el cliente necesita saber con quién trata)
4. **ComoFunciona**: ¿Cómo lo hacen? (proceso, duración, garantía último tramo)
5. **Casos**: ¿Funciona en mi industria? (escenarios realistas)
6. **FAQ**: ¿Cuánto cuesta? ¿Qué pasa con mi gente? (objeciones)
7. **Diagnóstico**: ¿Cómo empiezo? (acción cualificada)
8. **CTAFinal**: Último impulso para quienes leyeron todo

---

## Secciones eliminadas del homepage (no borrar los componentes)

| Componente | Por qué se eliminó | Dónde vive ahora |
|---|---|---|
| `TestimoniosSection` | No son testimonios reales — son principios de trabajo. Confunde. | `/nosotros` o `/como-trabajamos` |
| `SolucionSection` | Redundante con ComoFuncionaSection | `/servicios` |
| `ComparacionSection` | Redundante con CasosSection | `/servicios` |
| `BlogPreviewSection` | No es sección de conversión | Footer o Navbar |

> **IMPORTANTE:** No re-agregar estas secciones al homepage. Si el cliente las pide, primero discutir el trade-off de atención dividida.

---

## Jerarquía de CTAs

Hay dos flujos paralelos. Cada uno tiene su rol:

| Flujo | Dónde | Trigger | Destino |
|---|---|---|---|
| **ContactModal** (fast-track) | Navbar, Hero, FloatingCTA, CTAFinal | Clic en "Agendar diagnóstico" | Formulario 2 campos → Calendly prefilled |
| **DiagnosticoWizard** (calificación) | DiagnosticoSection (sección 7) | Scroll a #diagnostico | Formulario 5 pasos → éxito + link Calendly |

**Regla:** Un solo CTA visible por pantalla. ContactModal para leads calientes. DiagnosticoWizard para leads que quieren más contexto antes de agendar.

---

## HeroSection — visual de diagnóstico

El visual del hero (lado derecho, 2/5 del grid) es una **tarjeta de resultados típicos de diagnóstico**, no un chatbot.

```tsx
// Tres filas: Proceso | Hoy | Con 0kbot
"Coordinación de pedidos"  | "12 hrs/semana manual" | "2 hrs/semana"
"Visitas fallidas"         | "33% requieren segunda" | "12%"
"Reporte gerencial"        | "4 hrs armarlo"         | "Automático"
```

**Por qué:** el chat widget anterior ("0kbot Assistant / Operando 24/7") contradecía "No vendemos IA." La tarjeta de diagnóstico muestra el entregable real y es coherente con la propuesta de valor.

**Nota disclaimer:** "Resultados típicos basados en benchmarks de industria" — se mantiene para honestidad.

---

## Barra de credenciales en Hero

Aparece debajo del H1, antes del body copy:

```tsx
["Ing. Industrial UDD", "MSc Data Science PUC", "Lean Six Sigma", "8+ años en operaciones"]
```

**Por qué:** Las credenciales deben resolver "¿con quién trato?" antes de que el lector llegue al CTA. Al subirlas al hero, no dependen de que el usuario haga scroll.

---

## Precio en FAQ

La respuesta a "¿Cuánto cuesta esto?" incluye rangos orientativos en UF:

- Pymes 10–50 personas: **30–50 UF**
- Operaciones 50–200 personas: **60–120 UF**
- Diagnóstico inicial: **siempre gratuito**

**Por qué:** El B2B chileno abandona si no hay señal de precio. El rango en UF filtra clientes no calificados y genera más confianza que "depende".

Este dato también está en `faqJsonLd` en `src/app/page.tsx` para Google Rich Results (FAQPage schema).

---

## DiagnosticoWizard — 5 pasos

El wizard se redujo de 6 a 5 pasos. Se eliminó el paso "¿Has intentado resolver esto antes?" porque:
- Añadía fricción sin cambiar el outcome de la llamada
- El dato era de baja utilidad para pre-calificación

**Pasos actuales:**
1. Tamaño de empresa
2. Industria
3. Principal dolor
4. Timeline
5. Datos de contacto

**Pantalla de éxito:** incluye link directo a Calendly prefilled con nombre + email. Esto convierte el wizard de "te llamo yo" a "agenda tú".

---

## Personalización de /contacto con parámetro ?dolor=

La página de contacto lee el parámetro `dolor` de la URL y muestra un mensaje personalizado:

```
URL: /contacto?dolor=Errores+y+reprocesos+frecuentes
Muestra: "Diagnóstico enfocado en: Errores y reprocesos frecuentes"
```

Esto se activa cuando el usuario llega desde `/soluciones` o `/casos` haciendo clic en un CTA específico.

**Archivo:** `src/app/contacto/ContactoClient.tsx` — lee con `useSearchParams()`.

---

## Navegación (Navbar)

El Navbar tiene **5 items** (reducido de 7):

```tsx
["Servicios", "Cómo trabajamos", "Casos", "Blog", "Nosotros"]
```

- Se eliminó "Inicio" (el logo ya va a /)
- Se eliminó "Soluciones" (su contenido vive en /servicios)
- "Escenarios" → renombrado a "Casos"

---

## Footer

El footer tiene **5 columnas**: Brand + Servicios + Empresa + Blog + Recursos SEO.

- Se eliminó la newsletter strip falsa (botón "Suscribirme" que iba a /contacto)
- Se reemplazó por strip de contacto directo: "¿Tienes una pregunta? hola@0kbot.com + CTA Calendly"
- Se agregó columna **Recursos SEO** con links a las 4 landing pages:
  - `/mejora-de-procesos`
  - `/ia-para-pymes`
  - `/automatizacion-procesos-chile`
  - `/transformacion-digital-pymes`

---

## Copy guidelines

### Línea editorial sobre IA

**No somos anti-IA.** Somos pragmáticos. El copy correcto:
- ✅ "Usamos IA cuando reduce trabajo manual, errores o tiempo de respuesta"
- ✅ "Si una planilla bien hecha resuelve el problema, no necesitas un sistema complejo"
- ❌ "Automatizamos procesos repetitivos con IA" (suena a producto SaaS)
- ❌ "Operando 24/7" (implica chatbot, contradice posicionamiento)

### H1 del homepage

```
Mejora de procesos para pymes en Chile.
No vendemos IA. Vendemos lunes tranquilos.
```

No cambiar. El primer H1 tiene el keyword primario exacto. El subhead es el hook diferenciador.

### Credencial de Diego

- Ingeniería: **Universidad del Desarrollo (UDD)** — NO PUC
- MSc: **Pontificia Universidad Católica (PUC)** — para Data Science
- Lean Six Sigma Green Belt

---

## Lo que NO se cambia

- Copy de PainPointsSection — es el mejor del sitio
- ComoFuncionaSection — proceso 12 semanas y garantía del último tramo
- Copy personal de CredencialesSection ("He estado del otro lado")
- ContactModal — mantener como fast-track (2 campos)
- Todos los JSON-LD schemas
- Blog system y posts existentes

---

## Verificación post-cambios al homepage

1. Confirmar que `src/app/page.tsx` tiene exactamente 8 secciones renderizadas
2. Confirmar que no hay más de 1 CTA visible simultáneamente en cualquier viewport
3. Correr `npm run build` — no debe haber errores TypeScript
4. Google Rich Results Test en `/` → debe detectar FAQPage con la respuesta de precio en UF
5. Grep por "0kBot" → debe retornar cero resultados (todo en minúscula)
