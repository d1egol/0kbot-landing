# LEARNINGS — Aprendizajes transversales del harness LLM (landing)

> Espejo del archivo gemelo en `0kbot-seguridad/docs/harness/LEARNINGS.md`. Aquí solo las lecciones específicas o relevantes para el repo landing. Las reglas universales (privacidad, secrets, frases prohibidas, BITACORA, etc.) viven canónicas en el repo de seguridad — replicar acá lo necesario sin duplicar todo.
>
> Última actualización: 2026-05-05.

## Reglas universales que aplican igual

Ver `0kbot-seguridad/docs/harness/LEARNINGS.md` para:

- Privacidad y secrets (NO `.env`, NO API keys en chat).
- Disciplina git (Diego pushea manual, sandbox bloquea).
- Verificación antes de afirmar.
- Frases prohibidas en español neutro (no aplicable a copy de marketing — ahí sí podemos usar lenguaje aspiracional, pero no en docs internos).

## Reglas específicas landing

### CRLF/LF en builds Vercel/Linux desde Windows

**Crítico para landing**: la lección original `lesson_sri_crlf_lf_vercel.md` se escribió a partir de un incidente en este mismo repo. Hoy el `.gitattributes` con `eol=lf` ya está aplicado preventivamente.

Si en algún momento agregas `<script integrity=...>` o `<link integrity=...>` manuales:

1. Calcular hash desde blob git, NO disco:

   ```bash
   git show HEAD:public/asset.js | openssl dgst -sha384 -binary | openssl base64 -A
   ```

2. Verificar con preview Vercel real (browser bloquea si difiere).
3. Skill `sri-check` (en `.claude/skills/sri-check/`) automatiza el check.

### Push directo a main permitido (excepción landing)

Memoria `project_0kbot_landing.md` declara que landing permite **commits directos a main** (modelo de operación: cambios de marketing rápidos sin overhead de PR).

- Hook `gate-git-push.ps1` (en `~/.claude/hooks/`) **deja pasar** push a main desde landing (a diferencia de seguridad post-Sprint-0 que sí bloquea).
- Pero: cambios estructurales (ej. upgrade Next.js, refactor harness, redesign) sí van por feature branch + PR review.
- La regla heurística: **¿toca >5 archivos o cambia comportamiento user-visible significativo?** → feature branch. Si no → main directo está OK.

### Lighthouse thresholds operativos

`lighthouserc.json` declara los gates mínimos:

| Categoría | Threshold | Severidad |
|---|---|---|
| Performance | ≥0.6 | error |
| Accessibility | ≥0.85 | error |
| SEO | ≥0.95 | error |
| Best Practices | ≥0.7 | error |
| LCP | ≤6000ms | error |
| CLS | ≤0.1 | error |
| TBT | ≤600ms | error |
| FCP | ≤3000ms | warn |

Notas:

- Performance ≥0.6 desktop es **tibio** para una landing de marketing. Considerar subir a 0.8 cuando se mejore el bundle.
- A11y ≥0.85 cubre Lighthouse a11y; pero Lighthouse a11y solo cubre ~30% de WCAG. Foco visible, contraste WCAG AA, labels en form requieren revisión manual o `axe-core`.
- Skill `lighthouse-gate` invoca estos thresholds antes de mergear cambios above-the-fold.

### Copy ES Chile — tono y estilo

Para landing público (cliente), copy debe ser:

- **Tuteo** (no usted).
- Frases ≤18 palabras.
- Verbos en presente activo, no condicional.
- Cifras concretas: "ahorra 12 horas/semana" gana a "ahorra horas".
- Sin anglicismos innecesarios: "engagement" → "compromiso", "growth" → "crecimiento". Excepción: ROI, KPI, SaaS.
- Sin storytelling personal de Diego sin chequear con él (memoria reference: Diego es fundador, ojo con cómo se le menciona).
- Si el copy toca el caso real Dos Huertos (`project_0kbot_dos_huertos.md` memoria), **consentimiento escrito requerido** antes de nombrar en público.

Agent `copy-writer-es` (haiku) aplica estas reglas. Agent `landing-conversion-reviewer` (sonnet) las verifica antes de aprobar merge.

### Audiencia y contexto

Lee `CLAUDE.md` del repo. Resumen:

- ICP: pymes chilenas 10-200 personas con operaciones desordenadas.
- Propuesta: metodología Lean 12 semanas, resultados medibles, sin cobro si no hay ROI.
- Fundador Diego López — Ing. Civil Industrial UDD, MSc Data Science PUC, Lean Six Sigma Green Belt.

## Cuándo agregar nuevas entradas aquí

Igual que en seguridad: regla operativa, transversal, sobreviva entre herramientas. Específico al stack landing (Next.js + Vercel + Tailwind + Vitest).

Para reglas específicas a tooling de marketing (analytics, A/B testing, performance budgets) — ir agregando aquí cuando aparezcan.
