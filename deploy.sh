#!/bin/bash
set -e

echo "=== Iniciando deploy ==="
echo "Diretório atual: $(pwd)"
echo "Usuário: $(whoami)"

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "Erro: package.json não encontrado"
    exit 1
fi

echo "=== Instalando dependências ==="
npm install

echo "=== Fazendo build ==="
npm run build

echo "=== Iniciando aplicação ==="
exec npm run test-server