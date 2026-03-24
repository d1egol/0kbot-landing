#!/usr/bin/env bash
# =============================================
# 0kbot — Script de verificación de entorno
# Uso: bash scripts/verify-setup.sh
# =============================================

set -euo pipefail

PASS=0
FAIL=0
ERRORS=()

ok()   { echo "  ✓ $1"; ((PASS++)); }
fail() { echo "  ✗ $1"; ((FAIL++)); ERRORS+=("$1"); }

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  0kbot — Verificación de entorno"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ── 1. Node.js version ────────────────────────
echo "[ 1/6 ] Node.js version"
NODE_VERSION=$(node -v 2>/dev/null | sed 's/v//' | cut -d. -f1)
if [[ "${NODE_VERSION:-0}" -ge 18 ]]; then
  ok "Node.js $(node -v) (>= 18 requerido)"
else
  fail "Node.js $(node -v) — se requiere >= v18"
fi

# ── 2. Variables de entorno ───────────────────
echo ""
echo "[ 2/6 ] Variables de entorno (.env.local)"

ENV_FILE=".env.local"
REQUIRED_VARS=(
  "NEXT_PUBLIC_SUPABASE_URL"
  "NEXT_PUBLIC_SUPABASE_ANON_KEY"
  "SUPABASE_SERVICE_ROLE_KEY"
  "RESEND_API_KEY"
  "NEXT_PUBLIC_APP_URL"
)

if [[ ! -f "$ENV_FILE" ]]; then
  fail ".env.local no existe — copia .env.example y complétalo"
else
  # Source the env file
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a

  for VAR in "${REQUIRED_VARS[@]}"; do
    VALUE="${!VAR:-}"
    if [[ -n "$VALUE" ]]; then
      ok "$VAR está definida"
    else
      fail "$VAR no está definida en .env.local"
    fi
  done
fi

# ── 3. Dependencias instaladas ────────────────
echo ""
echo "[ 3/6 ] Dependencias npm"
if [[ -d "node_modules" ]]; then
  ok "node_modules existe"
else
  fail "node_modules no existe — ejecuta 'npm install'"
fi

# ── 4. Build de Next.js ───────────────────────
echo ""
echo "[ 4/6 ] Build de Next.js"
if npm run build > /tmp/nextjs_build.log 2>&1; then
  ok "npm run build exitoso"
else
  fail "npm run build falló — revisa /tmp/nextjs_build.log"
  tail -20 /tmp/nextjs_build.log
fi

# ── 5. Conexión a Supabase ────────────────────
echo ""
echo "[ 5/6 ] Conexión a Supabase"

SUPABASE_URL="${NEXT_PUBLIC_SUPABASE_URL:-}"
SUPABASE_ANON_KEY="${NEXT_PUBLIC_SUPABASE_ANON_KEY:-}"

if [[ -z "$SUPABASE_URL" || -z "$SUPABASE_ANON_KEY" ]]; then
  fail "No se puede verificar Supabase — variables de entorno faltantes"
else
  HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" \
    -H "apikey: ${SUPABASE_ANON_KEY}" \
    -H "Authorization: Bearer ${SUPABASE_ANON_KEY}" \
    "${SUPABASE_URL}/rest/v1/" 2>/dev/null || echo "000")

  if [[ "$HTTP_STATUS" == "200" ]] || [[ "$HTTP_STATUS" == "401" ]]; then
    ok "Supabase responde (HTTP $HTTP_STATUS)"
  else
    fail "Supabase no responde — HTTP $HTTP_STATUS. Verifica NEXT_PUBLIC_SUPABASE_URL"
  fi
fi

# ── 6. Tabla leads existe ─────────────────────
echo ""
echo "[ 6/6 ] Tabla 'leads' en Supabase"

SERVICE_ROLE_KEY="${SUPABASE_SERVICE_ROLE_KEY:-}"

if [[ -z "$SUPABASE_URL" || -z "$SERVICE_ROLE_KEY" ]]; then
  fail "No se puede verificar tabla — variables de entorno faltantes"
else
  RESPONSE=$(curl -s \
    -H "apikey: ${SERVICE_ROLE_KEY}" \
    -H "Authorization: Bearer ${SERVICE_ROLE_KEY}" \
    -H "Accept: application/json" \
    "${SUPABASE_URL}/rest/v1/leads?limit=1" 2>/dev/null || echo "error")

  if echo "$RESPONSE" | grep -q '"id"' || echo "$RESPONSE" | grep -q '^\[\]'; then
    ok "Tabla 'leads' existe y es accesible"
  elif echo "$RESPONSE" | grep -q '"code"'; then
    fail "Tabla 'leads' no encontrada — ejecuta supabase/migrations/001_initial.sql"
  else
    fail "No se pudo verificar tabla 'leads' — respuesta inesperada"
  fi
fi

# ── Resumen ───────────────────────────────────
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  Resultado: ${PASS} pasados, ${FAIL} fallidos"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [[ "$FAIL" -eq 0 ]]; then
  echo ""
  echo "  ✅ Entorno verificado. Listo para continuar."
  echo ""
  exit 0
else
  echo ""
  echo "  ❌ Fallos detectados:"
  for ERR in "${ERRORS[@]}"; do
    echo "     - $ERR"
  done
  echo ""
  exit 1
fi
