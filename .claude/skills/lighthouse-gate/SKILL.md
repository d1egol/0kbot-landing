---
name: lighthouse-gate
description: Use this skill before merging any PR that touches above-the-fold components, fonts, scripts, images, or CSS in 0kbot-landing. Runs `npm run build && npx lhci autorun` (or equivalent) and reports Performance/A11y/BP/SEO. Trigger on "lighthouse", "verifica perf", "before merge landing", "puedo mergear", or after edits to hero/CTA/form components.
---

# lighthouse-gate

Verificación determinística de performance + accesibilidad + best practices + SEO antes de mergear cambios visibles a usuarios. Complementa el agent `landing-conversion-reviewer` (la skill ejecuta + reporta números; el agent interpreta + decide veredicto).

## Cuándo usarme

- Cambio toca `src/app/page.tsx`, `src/app/layout.tsx`, hero/CTA/form components.
- Cambio agrega/quita scripts, fonts, imágenes en above-the-fold.
- Cambio toca CSS global o tailwind.config.ts.
- Cambio toca `next.config.mjs` (build output, image optimization, etc).
- Quiero baseline antes de un upgrade Next.js.

## Cuándo NO usarme

- Cambios sólo de copy o microcopy (sin shift de DOM).
- Cambios fuera de `src/app/` y `public/` que no afectan output (docs, README, scripts CI).
- Quieres lighthouse en preview Vercel: usa `lhci collect --url=<preview-url>` directamente, no esta skill local.

## Pre-requisitos

- Node + npm instalados.
- `lighthouserc.json` o `.lighthouserc.js` en raíz del repo (verificar; si no existe, crear baseline antes de gate).
- Build local funciona: `npm run build` debe completar sin errores.

## Workflow

1. **Baseline (si aplica)**: si vas a comparar, primero corre lighthouse contra `main` actualizado y guarda el snapshot.

   ```bash
   git stash
   git checkout main
   git pull
   npm install
   npm run build
   npx lhci autorun --collect.staticDistDir=.next --config=./lighthouserc.json > /tmp/lh-baseline.txt
   git checkout -
   git stash pop  # si stash creó algo
   ```

2. **Build de la branch**:

   ```bash
   npm install
   npm run build
   ```

   Si `npm run build` falla, NO sigas — reporta error y bloquea.

3. **Run lighthouse**:

   ```bash
   npx lhci autorun > /tmp/lh-current.txt
   ```

   O si el flujo es contra preview Vercel:

   ```bash
   vercel deploy --prebuilt
   # captura URL del output
   npx lhci collect --url=<preview-url> --numberOfRuns=3
   npx lhci assert
   ```

4. **Comparar contra umbrales**:
   - Performance mobile: ≥85 (warning <80, fail <70).
   - Performance desktop: ≥90 (warning <85, fail <80).
   - Accessibility: ≥95 (warning <90, fail <85).
   - Best Practices: ≥95 (warning <90, fail <85).
   - SEO: ≥95 (warning <90, fail <85).

5. **Reporte**:

   ```markdown
   ## Lighthouse gate — <branch> — <fecha>

   | Categoría | Mobile | Desktop | Δ vs main |
   |---|---|---|---|
   | Performance | 87 | 96 | -1 / 0 |
   | Accessibility | 96 | 96 | 0 |
   | Best Practices | 100 | 100 | 0 |
   | SEO | 100 | 100 | 0 |

   ### Veredicto
   PASS / WARNING / FAIL

   ### Causas si FAIL
   - <métrica específica> empeoró por <razón identificable: bundle size, LCP, CLS, etc>

   ### Próximo paso
   - Si PASS: confirmar que `landing-conversion-reviewer` agent también aprobó conversión + a11y → mergeable.
   - Si WARNING: documentar en PR body por qué se acepta el regression.
   - Si FAIL: bloquear merge, retornar al desarrollo.
   ```

## Reglas duras

1. **No bajar umbrales** para que pase. Si el cambio realmente requiere aceptar regression, Diego decide y queda explícito en PR body.
2. **3 runs mínimo** en variables como Performance — un solo run es ruidoso.
3. **Mobile manda**: la audiencia 0kbot-landing es móvil-primero. Si mobile pasa pero desktop falla, escalar; si desktop pasa pero mobile falla, bloquear.
4. **Lighthouse no detecta todo**: A11y de Lighthouse cubre ~30% de WCAG. Para a11y crítico (form labels, contrast, focus order) revisa manual o con `axe-core` en e2e.
