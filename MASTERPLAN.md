# 0kbot Landing Page — Masterplan de Mejoras

> Análisis generado el 2026-03-28
> Rama: `claude/0kbot-analysis-masterplan-hsd76`

---

## 1. Estado Actual: Diagnóstico

### Fortalezas
- Stack sólido (Next.js 14, TypeScript, Tailwind, Framer Motion)
- Propuesta de valor clara: "Lunes tranquilos en 12 semanas"
- Wizard de diagnóstico bien estructurado (6 pasos)
- Integración backend completa (Supabase + Resend + Analytics)
- Tono auténtico, directo y sin jerga innecesaria
- Credencial del fundador bien construida (PUC, MSc, Lean Six Sigma)

### Brechas Críticas (Quick Wins vs Largo Plazo)
| Brecha | Impacto | Esfuerzo |
|--------|---------|----------|
| Sin imágenes reales / fotos del fundador | Alto | Bajo |
| Sin social proof numérico en hero | Alto | Bajo |
| Testimonios sin foto ni empresa real | Alto | Bajo |
| CTA primario no cuantifica el valor | Alto | Bajo |
| Sin video explicativo o demo | Alto | Medio |
| Páginas internas vacías o incompletas | Medio | Alto |
| Sin blog/recursos con SEO | Medio | Alto |
| Velocidad mobile no optimizada | Medio | Bajo |

---

## 2. Prioridades Estratégicas

### Prioridad 1 — Conversión (impacto inmediato en leads)
### Prioridad 2 — Confianza (aumentar tasa de cierre)
### Prioridad 3 — SEO y Tráfico Orgánico
### Prioridad 4 — Experiencia de Usuario
### Prioridad 5 — Infraestructura Técnica

---

## 3. Mejoras Detalladas por Sección

---

### 3.1 HeroSection

**Estado actual:**
- Headline: "Tu equipo trabaja los fines de semana sin darse cuenta"
- MetricCard animada mostrando costos
- Dos CTAs: "Descubrir pérdidas ocultas" + "Ver cómo lo hacemos"

**Problemas:**
- El MetricCard usa métricas genéricas (no personalizadas)
- Los CTAs no tienen urgencia ni beneficio concreto
- Sin social proof visible (nº de empresas, casos, años)
- Sin imagen del fundador o del equipo

**Mejoras propuestas:**

#### 3.1.1 Agregar barra de social proof debajo del hero
```
→ "+30 empresas chilenas con procesos medidos" | "12 semanas promedio" | "4.8/5 satisfacción"
```
- Usar datos reales si están disponibles; si no, usar indicadores cualitativos

#### 3.1.2 Personalizar el MetricCard con lógica por industria
- Añadir selector rápido (3 opciones: Distribución / Servicios / Construcción)
- Cambiar los números según la industria seleccionada para hacerlo más relevante

#### 3.1.3 Reescribir CTAs con beneficio explícito
- Primario: `"Calcula cuánto pierdes ahora →"` (lleva al wizard)
- Secundario: `"Ver un caso real"` (ancla a #casos)

#### 3.1.4 Añadir foto real del fundador (Diego) con firma
```
— Diego, Ing. Civil Industrial PUC · Ex-operaciones · Resuelvo el problema, no lo reporto
```

---

### 3.2 PainPointsSection

**Estado actual:**
- 4 tarjetas: Lunes de terror, WhatsApp corporativo, Persona indispensable, Costo invisible

**Mejoras propuestas:**

#### 3.2.1 Agregar micro-dato de impacto en cada tarjeta
Cada pain point debería tener una cifra que lo cuantifique:
- "Lunes de terror" → *"El 67% de los errores ocurre en traspaso de información"*
- "WhatsApp corporativo" → *"Recuperar contexto perdido en chats toma 2+ horas/semana/persona"*
- "Persona indispensable" → *"Una baja no planificada cuesta 3x su salario mensual"*
- "Costo invisible" → *"Las PyMEs pierden 20-30% de eficiencia en procesos no documentados"*

#### 3.2.2 Mejorar el diseño visual
- Añadir línea conectora entre tarjetas (storytelling de causa-efecto)
- Cambiar íconos a ilustraciones simples SVG que sean más memorables

---

### 3.3 SolucionSection

**Estado actual:**
- 3 columnas: Qué hacemos / Cómo lo resolvemos / Por qué nosotros

**Mejoras propuestas:**

#### 3.3.1 Reemplazar las 3 columnas por una comparación directa
Tabla `Sin 0kbot` vs `Con 0kbot`:
| Sin 0kbot | Con 0kbot |
|-----------|-----------|
| Procesos en cabezas de personas | Procesos documentados y medibles |
| "Creemos que..." | "Medimos que..." |
| Soluciones caras que nadie usa | Cambios que el equipo adopta |
| Meses de consultoría teórica | 12 semanas con entregables claros |

#### 3.3.2 Añadir badge de garantía
Caja destacada con:
```
✓ Si en la semana 12 no mostramos ROI medible, no cobramos el último tramo
```

---

### 3.4 ComoFuncionaSection (Timeline 12 semanas)

**Estado actual:**
- 4 pasos: Semana 1-2, 3-4, 5-10, 11-12

**Mejoras propuestas:**

#### 3.4.1 Añadir entregable concreto por fase
Cada paso debería mostrar *qué recibe el cliente*:
- Semana 1-2 → Entregable: *"Reporte de pérdidas con número en pesos"*
- Semana 3-4 → Entregable: *"Plan de acción con 3-5 cambios priorizados"*
- Semana 5-10 → Entregable: *"Cambios implementados + equipo capacitado"*
- Semana 11-12 → Entregable: *"Informe de ROI y métricas post-implementación"*

#### 3.4.2 Añadir FAQ inline en cada paso
Mini acordeón "¿Qué pasa si...?" dentro de cada tarjeta de fase para reducir objeciones en contexto.

---

### 3.5 CasosSection

**Estado actual:**
- 6 casos como tarjetas con: industria, problema, resultado
- Carousel en mobile, grid en desktop

**Problemas:**
- Sin logos de empresas (anónimas o ficticias)
- Sin cita del cliente
- Sin detalle del proceso que se cambió
- Resultados no tienen baseline claro (¿de qué a qué?)

**Mejoras propuestas:**

#### 3.5.1 Enriquecer cada caso con estructura Before/After
```
ANTES: "3 personas dedicadas 2 días/semana a conciliar inventario en Excel"
DESPUÉS: "Sistema automatizado, revisión en 15 min, 94% precisión"
TIEMPO: 6 semanas de implementación
```

#### 3.5.2 Añadir página de caso de estudio individual (`/casos/[slug]`)
- Historia completa con: contexto, diagnóstico, solución, resultados, aprendizajes
- Esto también beneficia enormemente al SEO

#### 3.5.3 Añadir CTA dentro de cada caso
Botón pequeño: *"¿Tienes un problema similar? Cuéntanos →"*

---

### 3.6 TestimoniosSection

**Estado actual:**
- 3 testimonios en tarjetas
- Sin fotos, sin nombres reales visibles, sin empresa real

**Mejoras propuestas:**

#### 3.6.1 Añadir foto del cliente (o avatar generado)
- Mínimo: avatar con inicial del nombre
- Óptimo: foto real + cargo + empresa (con permiso)

#### 3.6.2 Añadir resultado numérico encima de la cita
```
-40% tiempo en reportes
"Diego llegó, midió lo que nadie había medido, y en 8 semanas ya veíamos el cambio..."
— Carlos M., Gerente de Operaciones, Distribuidora de alimentos
```

#### 3.6.3 Agregar video-testimonios (si disponibles)
- Incluso un testimonio en video de 30s vale más que 10 escritos

---

### 3.7 CredencialesSection (Fundador)

**Estado actual:**
- Badges de credenciales académicas y profesionales
- Historia personal del fundador

**Mejoras propuestas:**

#### 3.7.1 Agregar foto real del fundador
- Es un error de conversión no tener imagen cuando la sección depende de confianza personal

#### 3.7.2 Incluir número concreto de empresas/proyectos
```
"He trabajado con más de 30 empresas en Chile, desde distribuidoras
de alimentos hasta clínicas, siempre con el mismo enfoque..."
```

#### 3.7.3 Añadir perfil de LinkedIn con enlace verificable
- Aumenta credibilidad de forma inmediata

---

### 3.8 FAQSection

**Estado actual:**
- 6 preguntas en acordeón

**Mejoras propuestas:**

#### 3.8.1 Agregar 2-3 FAQs sobre el proceso de contratación
- "¿Cómo empezamos?" — explicar el primer paso concreto
- "¿Cuánto tiempo me toma a mí como dueño?" — objeción no resuelta actualmente
- "¿Funciona si mi empresa es familiar?" — segmento importante en Chile

#### 3.8.2 Añadir schema markup `FAQPage` en JSON-LD
- Mejora visibilidad en Google con rich snippets

---

### 3.9 DiagnosticoSection (Wizard)

**Estado actual:**
- 6 pasos: tamaño, industria, problema, intentos previos, timeline, contacto

**Problemas:**
- Sin indicador de progreso visible en mobile
- Sin guardar progreso (si el usuario cierra, pierde todo)
- El paso 6 (contacto) pide demasiados campos de golpe
- Sin explicación de qué pasa después de enviar

**Mejoras propuestas:**

#### 3.9.1 Mejorar barra de progreso
- Mostrar "Paso 3 de 6" claramente con barra visual en todos los tamaños

#### 3.9.2 Persistir datos en localStorage
- Si el usuario abandona y vuelve, retomar donde dejó

#### 3.9.3 Split del paso de contacto
- Separar email (paso 6a) del resto (nombre, empresa, teléfono → paso 6b)
- El email solo permite calificar el lead más temprano

#### 3.9.4 Añadir mensaje de "qué pasa ahora" en confirmación
```
¿Qué sigue?
1. Recibirás un email de confirmación en los próximos minutos
2. Diego te contactará en menos de 24 horas hábiles
3. Agendaremos una llamada de 30 min sin costo
```

#### 3.9.5 Agregar opción de agendar directamente (Calendly/Cal.com)
- Para leads calificados, ofrecer agendar en el paso final en lugar de esperar contacto

---

### 3.10 CTAFinalSection

**Estado actual:**
- "Cada mes que esperas, el número crece"
- Un solo CTA en fondo azul

**Mejoras propuestas:**

#### 3.10.1 Agregar estimación de costo de inacción
Calculadora simple embebida:
```
Si tienes [X] personas y [Y] horas/semana en tareas manuales,
estás perdiendo aproximadamente [$ calculado] al mes.
```

#### 3.10.2 Añadir urgencia real sin ser forzado
- "Tomamos máximo 3 nuevos proyectos por mes para mantener calidad"
- Solo usar si es cierto — no crear falsa escasez

---

## 4. Nuevas Páginas / Secciones Propuestas

### 4.1 `/casos/[slug]` — Casos de Estudio Detallados
- SEO de long tail ("consultoría de procesos distribuidora Chile")
- Proof más persuasivo que tarjeta resumida
- Estructura: Contexto → Diagnóstico → Solución → Resultados → Aprendizajes

### 4.2 `/recursos` — Blog / Contenido de Valor
Artículos que atraigan tráfico orgánico:
- "Cómo calcular el costo real de un proceso manual en tu empresa"
- "Por qué WhatsApp destruye la eficiencia operacional"
- "Lean Six Sigma para PyMEs: ¿funciona o es para corporativos?"
- "Las 5 señales de que tu empresa necesita un diagnóstico de procesos"

### 4.3 `/calculadora` — Calculadora de ROI Interactiva
- Inputs: nº empleados, horas/semana en tareas manuales, sueldo promedio
- Output: costo mensual estimado de ineficiencias
- CTA embebido: "Validemos este número juntos →"

### 4.4 Sección de Proceso Post-Contratación
- Qué pasa en la semana 1 exactamente
- Quiénes participan del cliente
- Qué documentación se necesita

---

## 5. Mejoras de SEO

### 5.1 On-Page (Cambios inmediatos)

| Elemento | Estado Actual | Mejora Propuesta |
|----------|---------------|-----------------|
| `<title>` | Genérico | "0kbot | Consultoría de Procesos para PyMEs en Chile" |
| Meta description | Presente pero mejorable | Incluir ciudad, industria, resultado esperado |
| H1 único por página | ✓ | Mantener, mejorar keyword density |
| Alt text imágenes | Sin imágenes reales | Al agregar imágenes, usar alt descriptivo |
| FAQ JSON-LD | No implementado | Implementar `FAQPage` schema |
| Caso de estudio schema | No implementado | Implementar `Article` schema por caso |
| Canonical URLs | Verificar | Asegurar en todas las páginas |

### 5.2 Keywords Target

**Primarias:**
- "consultoría de procesos Chile"
- "optimización de procesos PyME"
- "mejora operacional empresas Chile"

**Long tail:**
- "cómo reducir errores en distribuidora de alimentos Chile"
- "automatizar procesos sin tecnología cara"
- "consultor lean six sigma PyME Santiago"

### 5.3 Link Building
- Publicar en plataformas gremiales chilenas (ASIVA, CChC, Cámara de Comercio)
- Guest posts en blogs de PYME Chile
- Apariciones en podcasts de emprendimiento/operaciones

---

## 6. Mejoras Técnicas

### 6.1 Performance

| Métrica | Estimado Actual | Objetivo |
|---------|----------------|----------|
| LCP (Largest Contentful Paint) | ~2.5s | < 1.8s |
| CLS (Cumulative Layout Shift) | ~0.12 | < 0.05 |
| FID/INP | ~150ms | < 100ms |

**Acciones:**
- [ ] Auditar y eliminar Radix UI components no usados (bundle size)
- [ ] Implementar `next/image` para todas las imágenes cuando se agreguen
- [ ] Lazy load del DiagnosticoWizard (es el componente más pesado)
- [ ] Preload fonts críticas (Space Grotesk, DM Sans)
- [ ] Revisar si Framer Motion puede reemplazarse con CSS animations en secciones simples

### 6.2 Analytics y Tracking

- [ ] Configurar eventos GA4 personalizados:
  - `wizard_step_complete` (por cada paso del wizard)
  - `wizard_abandoned` (con último paso completado)
  - `cta_click` (por sección y variante)
  - `case_study_viewed`
- [ ] Configurar Meta Pixel events:
  - `Lead` al completar wizard
  - `ViewContent` en páginas de casos
- [ ] Implementar heatmaps (Hotjar o Microsoft Clarity — gratis)

### 6.3 A/B Testing

Pruebas prioritarias:
1. **Headline del Hero:** "Tu equipo trabaja los fines de semana..." vs "¿Cuánto pierdes cada mes en procesos manuales?"
2. **CTA primario:** "Descubrir pérdidas ocultas" vs "Calcular mi costo ahora"
3. **Posición del Wizard:** Antes o después de Testimonios
4. **FloatingCTA mobile:** Texto actual vs "Hablar con Diego →"

### 6.4 Accesibilidad

- [ ] Auditar contraste de texto (especialmente en fondos azules)
- [ ] Asegurar `focus-visible` en todos los elementos interactivos
- [ ] Verificar que el wizard sea navegable con teclado
- [ ] Añadir `aria-live` regions en animaciones de MetricCard

---

## 7. Estrategia de Contenido y Copy

### 7.1 Ajustes de Tono

El copy actual es bueno. Ajustes finos:
- **Más específico en números:** Cambiar "muchas horas" → "2-4 horas/día/persona"
- **Más local:** Mencionar "Chile" y "PyME" explícitamente más veces
- **Más urgente sin ser agresivo:** Añadir contexto de estacionalidad ("antes del cierre de año")

### 7.2 Storytelling del Fundador

Ampliar la narrativa de Diego más allá de credenciales:
```
Propuesta actual: Credenciales académicas + "he estado del otro lado"
Propuesta mejorada: Historia específica de fracaso/frustración que lo llevó a crear 0kbot
```

Ejemplo de estructura:
> "En mi primer trabajo en una planta distribuidora, vi cómo un gerente de 20 años de experiencia
> perdía 3 horas cada lunes reconciliando hojas Excel que nadie entendía por qué existían.
> Nadie le decía nada porque 'así siempre se había hecho'. Ahí entendí que el problema
> no era tecnología — era visibilidad."

### 7.3 Microcopy

Revisar textos en botones y formularios:
- Placeholder del email: "tu@empresa.cl" → más local que "your@email.com"
- Botón de submit: "Enviar" → "Quiero mi diagnóstico →"
- Error messages: En español coloquial chileno
- Loading states: "Analizando..." en lugar de "Cargando..."

---

## 8. Roadmap de Implementación

### Sprint 1 — Quick Wins (1-2 semanas)
*Máximo impacto, mínimo esfuerzo*

- [ ] Agregar foto real de Diego en CredencialesSection
- [ ] Añadir barra de social proof numérica bajo el hero
- [ ] Reescribir CTAs con beneficio explícito
- [ ] Enriquecer testimonios con foto/avatar + resultado numérico
- [ ] Añadir datos de impacto en PainPoints cards
- [ ] Implementar FAQ JSON-LD schema
- [ ] Guardar progreso del wizard en localStorage
- [ ] Mejorar mensaje de confirmación post-wizard

### Sprint 2 — Conversión Avanzada (2-4 semanas)
*Mejoras estructurales de conversión*

- [ ] Rediseñar SolucionSection como tabla Before/After
- [ ] Enriquecer casos con estructura Before/After
- [ ] Añadir entregables concretos en ComoFuncionaSection
- [ ] Integrar opción de agendar (Calendly/Cal.com) en confirmación del wizard
- [ ] Configurar eventos GA4 y Meta Pixel completos
- [ ] Implementar heatmaps (Clarity)

### Sprint 3 — Contenido y SEO (4-8 semanas)
*Construir motor de tráfico orgánico*

- [ ] Crear páginas de caso de estudio individuales (`/casos/[slug]`)
- [ ] Publicar primeros 3-5 artículos de blog en `/recursos`
- [ ] Construir `/calculadora` de ROI interactiva
- [ ] Optimizar meta tags y structured data en todas las páginas
- [ ] Completar páginas internas incompletas (Servicios, Soluciones, Nosotros)

### Sprint 4 — Performance y Testing (4-6 semanas)
*Optimización continua*

- [ ] Auditar y optimizar bundle size
- [ ] Configurar A/B tests (headline, CTA, posición wizard)
- [ ] Auditar accesibilidad completa
- [ ] Revisar performance mobile (Core Web Vitals)
- [ ] Establecer dashboard de métricas de conversión

---

## 9. KPIs a Medir

| KPI | Línea Base | Objetivo 3 meses |
|-----|-----------|-----------------|
| Tasa de completitud del wizard | ? | > 25% |
| Tasa de conversión wizard → contacto | ? | > 60% |
| Bounce rate general | ? | < 55% |
| Tiempo en página (hero) | ? | > 90 segundos |
| Leads calificados/mes | ? | +50% respecto a hoy |
| Posición SEO "consultoría procesos PyME Chile" | ? | Top 10 |

---

## 10. Notas Adicionales

### Lo que NO cambiar
- El tono auténtico y directo del copy — es diferenciador real
- La estructura del wizard — está bien pensada
- La propuesta de "12 semanas y nos vamos" — es memorable y honesta
- El stack tecnológico — está sobredimensionado para las necesidades pero es mantenible

### Riesgo a monitorear
- La página tiene 25+ componentes Radix UI importados pero solo usa ~8.
  Considerar hacer un audit de imports para reducir el bundle size inicial.
- El MetricCard usa contadores animados — verificar que no cause CLS en mobile.

---

*Masterplan generado por análisis estático del codebase + principios de CRO y UX para B2B SaaS*
