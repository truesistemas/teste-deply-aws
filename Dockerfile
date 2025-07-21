FROM node:18-alpine

# Instalar bash para scripts
RUN apk add --no-cache bash

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código
COPY . .

# Copiar script de deploy
COPY deploy.sh ./
RUN chmod +x deploy.sh

# Build
RUN npm run build

# Expor porta
EXPOSE 3000

# Variáveis
ENV NODE_ENV=production
ENV PORT=3000

# Start
CMD ["./deploy.sh"]