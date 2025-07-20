# Use a imagem oficial do Node.js
FROM node:18-alpine AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependências baseado no gerenciador de pacotes preferido
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild o código fonte apenas quando necessário
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js coleta dados de telemetria completamente anônimos sobre uso geral.
# Saiba mais aqui: https://nextjs.org/telemetry
# Descomente a linha seguinte caso queira desabilitar a telemetria durante o build.
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Imagem de produção, copiar todos os arquivos e executar next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Descomente a linha seguinte caso queira desabilitar a telemetria durante runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Definir as permissões corretas para prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar automaticamente arquivos de saída baseado no trace
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]