---
name: handoff-checkpoint
description: Use this skill BEFORE closing a session when the user mentions "se me acaba el plan", "voy a cerrar", "checkpoint", "guarda contexto", "handoff", "continuar después", or whenever Plan Max cap is approaching. Captures current work state into DAILY_LOG.md (créalo si no existe en landing) so the next session can resume without losing context.
---

# handoff-checkpoint (landing)

Mismo patrón que `0kbot-seguridad/.claude/skills/handoff-checkpoint/` — captura estado de trabajo a `DAILY_LOG.md` para que la próxima sesión retome sin perder contexto. Especialmente útil para work multi-sesión sobre upgrades Next.js, refactors estructurales, o cambios above-the-fold que requieren A/B testing.

## Diferencias respecto a la skill de seguridad

- En landing **NO existe `DAILY_LOG.md` por default** (es repo de marketing, no operación). Si invocas la skill y el archivo no existe, **pregunta a Diego** si quiere crearlo. Si dice sí, créalo con header simple:
  ```markdown
  # DAILY_LOG — 0kbot Landing

  Operativo de corto plazo. Append-only. Una entrada por sesión o tema.

  ---
  ```
- En landing los pendientes típicos son **conversión / performance / a11y / SEO**, no regulatorio. El checkpoint debe destacar:
  - Métricas Lighthouse pre-cierre.
  - Si hay preview Vercel deployment activo (URL).
  - Si tocaste hero/CTA/form (above-the-fold sensitive).

## Output: entrada a `DAILY_LOG.md`

```markdown
---
## YYYY-MM-DD HH:MM — [HANDOFF] Checkpoint para próxima sesión

### Quién cerró + por qué
- Tier actual: <Claude Opus / opencode build / etc>
- Razón cierre: <plan max cap / fin de día / cambio de tier>

### Estado git al cierre
- Branch: `<nombre>`
- HEAD: `<hash> <mensaje>`
- Working tree: <N archivos modificados / clean>

### Qué se estaba haciendo
<2-3 líneas>

### Last decisión / acción
<lo más reciente>

### Métricas pre-cierre (si tocaste UI)
- Lighthouse mobile / desktop (Performance/A11y/BP/SEO)
- Bundle size delta vs main
- Preview Vercel: URL si existe

### Pendiente para próxima sesión
1. <acción concreta>
2. <bloqueo si existe>

### Cómo retomar
**Plan Max disponible**:
```
cd C:\Users\dilop\Documents\0kbot\0kbot-landing
claude
"Lee última entrada [HANDOFF] del DAILY_LOG y continúa con pendiente #1"
```

**Plan Max al cap**:
```
opencode  # build (Sonnet via Zen) o build-gpt (GPT-5.4)
```

**Tarea es copy/microcopy ES**:
```
# Usa el agent copy-writer-es directamente con el contexto
```

### Archivos en juego
- <path>: <qué cambio quedó pendiente>

---
```

## Reglas duras

1. Append-only.
2. Sin secrets (no copies tokens, env vars, ni PII de leads del form).
3. Conciso (≤40 líneas).
4. Si tocaste el formulario, destaca: "verificar submit + email Resend tras retomar".
5. Si la branch toca SRI hashes (`integrity=`), invocar skill `sri-check` antes de mergear es obligatorio (lección CRLF/LF Vercel).

## Cuándo NO usarme

- Cambios menores de copy ya commiteados.
- Sesión completa sin pendientes (mejor cerrar limpio con commit + push).
- Refactor en progreso pero el código está roto (mejor stash + nota más explícita en chat con Diego).
