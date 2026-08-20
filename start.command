#!/usr/bin/env bash
# Arranca el servidor local de Nyla's Workshop.
set -euo pipefail
cd "$(dirname "$0")"

PORT=4321
URL="http://localhost:${PORT}/"

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
  open "$URL" >/dev/null 2>&1 || true
  exit 0
fi

echo "Arrancando Nyla's Workshop → ${URL}"
(sleep 2 && open "$URL" >/dev/null 2>&1) &

exec npm run dev
