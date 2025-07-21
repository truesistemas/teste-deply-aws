FROM node:18-alpine

# Instalar curl para health checks
RUN apk add --no-cache curl

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Criar usuário não-root
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Mudar ownership dos arquivos
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expor porta
EXPOSE 3000

# Variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/hello || exit 1

# Iniciar aplicação
CMD ["npm", "start"]