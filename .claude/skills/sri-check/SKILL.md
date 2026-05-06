---
name: sri-check
description: Use this skill whenever a PR adds or modifies `<script integrity="...">` or `<link integrity="...">` tags in 0kbot-landing. Validates that SRI hashes match the actual blob bytes Vercel will serve, NOT the working-tree bytes — this is the lesson registered in lesson_sri_crlf_lf_vercel.md. Trigger on "SRI", "integrity hash", "subresource integrity", "verifica hash", before merging deps that pin SRI, or after editing layout.tsx/head.tsx with new external scripts.
---

# sri-check

Verificación de Subresource Integrity hashes correctos antes de merge. La lección crítica: en repos Windows con `core.autocrlf=true`, el blob git en main difiere del archivo en working tree por LF/CRLF. SRI calculado desde disco rompe en producción Vercel/Linux.

Memoria de referencia: `~/.claude/projects/c--Users-dilop/memory/lesson_sri_crlf_lf_vercel.md`.

## Cuándo usarme

- PR agrega `<script>` o `<link>` con atributo `integrity`.
- PR modifica un asset cuyo SRI hash está hardcoded en el HTML/JSX.
- PR cambia `package.json` deps que se inyectan inline o vía Subresource (raro pero existe).
- Migración Next.js que toca cómo se generan los assets.
- Sospecha de "el hash funciona local pero rompe en deploy" — ese es exactamente el patrón.

## Cuándo NO usarme

- No hay `integrity=` en ningún archivo del PR. Glob primero, si vacío, no apliques.
- El asset es referenciado vía `<Script>` de Next.js sin SRI manual — Next maneja el hashing.

## Pre-flight

1. Confirma `.gitattributes` tiene `* text=auto eol=lf` o equivalente que normaliza a LF en repo. Si no, escala — el problema es upstream.
2. Confirma `core.autocrlf` en config Windows local de Diego (espera `true`, ahí está la trampa).
3. Identifica los assets con SRI: `grep -rn 'integrity=' src/ public/ app/`.

## Workflow

Para cada par `<script src="X" integrity="Y">`:

1. **Resolver el path real del asset X**:
   - Si es URL externa (CDN), no aplica esta skill — el hash se confía al CDN.
   - Si es path local (`/static/...`, `./assets/...`), localiza el archivo fuente.

2. **Calcular hash desde el blob git, no desde el archivo en disco**:

   ```bash
   # Hash del archivo TAL COMO ESTÁ EN GIT (lo que sirve Vercel):
   git show HEAD:path/to/asset.js | openssl dgst -sha384 -binary | openssl base64 -A
   ```

   NO uses esto (rompe por CRLF/LF):

   ```bash
   # MAL — calcula desde working tree, no desde blob:
   openssl dgst -sha384 -binary path/to/asset.js | openssl base64 -A
   ```

3. **Comparar**:
   - Hash del blob git debe ser **idéntico** al `integrity="..."` declarado.
   - Si difieren, el SRI está mal — necesita actualizarse o el archivo tiene EOL inconsistente.

4. **Si difieren, diagnosticar**:

   ```bash
   # ¿El working tree tiene CRLF?
   file path/to/asset.js  # busca "with CRLF line terminators"

   # ¿Git está normalizando a LF?
   git ls-files --eol path/to/asset.js  # debería mostrar "i/lf  w/crlf  text=auto"
   ```

   Si ves `w/crlf  i/lf`, ahí está la trampa. Calcula el hash correcto con `git show HEAD:` y actualiza el `integrity=`.

5. **Verificación final post-fix**:

   Despliega un preview Vercel y haz fetch del HTML servido + verifica que el SRI coincide:

   ```bash
   curl -s https://<preview-url>/ | grep integrity
   curl -s https://<preview-url>/path/to/asset.js | openssl dgst -sha384 -binary | openssl base64 -A
   ```

   Si coinciden, la página carga. Si no, el browser bloquea el script con `Failed to find a valid digest in the 'integrity' attribute`.

## Output format

```markdown
## SRI check — <branch> — <fecha>

### Tags `integrity=` detectados
- `src/app/layout.tsx:42` → script `https://cdn.example.com/lib.js` integrity sha384-XXX

### Verificación
| Tag | Path/URL | Hash declarado | Hash blob git | Match |
|---|---|---|---|---|
| Tag 1 | ... | sha384-XXX | sha384-YYY | FAIL |

### Diagnóstico (si FAIL)
- Causa: working tree tiene CRLF, blob git tiene LF (autocrlf=true).
- Fix: actualizar integrity= con el hash del blob (calculado vía `git show HEAD:`).
- Comando exacto:
  ```bash
  git show HEAD:public/asset.js | openssl dgst -sha384 -binary | openssl base64 -A
  ```

### Veredicto
- [ ] Todos los SRI hashes coinciden con blob git → mergeable
- [ ] Si fallan, NO mergear hasta corregir
```

## Reglas duras

1. **Nunca calcules SRI desde el archivo en disco**. Siempre desde blob git.
2. **No suprimas el integrity attribute** para "que funcione". Si el SRI es problema, hay un asunto de pipeline a resolver, no un atributo a borrar.
3. **Verifica en preview Vercel real**, no solo local. La diferencia LF/CRLF aparece en el render real de Vercel/Linux, no en `npm run dev` Windows.
4. **Si la lección se repite**, propón hook `PostToolUse` que invoque esta skill automático cuando `Edit` toque archivos con `integrity=`.
