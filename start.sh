#!/bin/bash
echo "Iniciando servidor de teste..."
echo "Porta: ${PORT:-3000}"
echo "Hostname: 0.0.0.0"
exec node test-server.js