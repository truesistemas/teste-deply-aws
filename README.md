# Teste Deploy AWS

Uma aplicação Next.js 15 com TypeScript para teste de deploy na AWS.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **CSS Modules** - Estilos com escopo isolado

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd teste-depoly-aws

# Instale as dependências
npm install
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm run start

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx          # Layout raiz
├── page.tsx            # Página inicial
├── page.module.css     # Estilos da página inicial
├── globals.css         # Estilos globais
├── about/
│   ├── page.tsx        # Página sobre
│   └── about.module.css # Estilos da página sobre
└── api/
    └── hello/
        └── route.ts    # API endpoint
```

## 🌐 Páginas

- `/` - Página inicial com informações do projeto
- `/about` - Página sobre com detalhes técnicos
- `/api/hello` - Endpoint da API (GET/POST)

## ☁️ Deploy

Este projeto está configurado para deploy na AWS usando serviços como:
- AWS Amplify
- AWS Lambda + API Gateway
- AWS EC2 com Docker

## 📄 Licença

ISC