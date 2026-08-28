#!/usr/bin/env bash
# Arranca el servidor local de Nyla's Workshop y lo abre a la red local.
set -euo pipefail
cd "$(dirname "$0")"

PORT=4321
URL="http://localhost:${PORT}/"
LAN_IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || true)"
LAN_URL=""
if [[ -n "${LAN_IP}" ]]; then
  LAN_URL="http://${LAN_IP}:${PORT}/"
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "No encuentro npm. Instala Node.js: https://nodejs.org"
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Instalando dependencias…"
  npm install
fi

if lsof -iTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "El servidor ya está en marcha en ${URL}"
  if [[ -n "${LAN_URL}" ]]; then
    echo "Red local → ${LAN_URL}"
  fi
  open "$URL" >/dev/null 2>&1 || true
  exit 0
fi

echo "Arrancando Nyla's Workshop"
echo "Local     → ${URL}"
if [[ -n "${LAN_URL}" ]]; then
  echo "Red local → ${LAN_URL}"
fi
(sleep 2 && open "$URL" >/dev/null 2>&1) &

exec npm run dev -- --host --port "$PORT"
