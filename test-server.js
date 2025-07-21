const http = require('http');

const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

console.log(`Tentando iniciar servidor em ${hostname}:${port}`);

const server = http.createServer((req, res) => {
  console.log(`Requisição recebida: ${req.method} ${req.url}`);
  
  res.writeHead(200, { 
    'Content-Type': 'text/html',
    'Access-Control-Allow-Origin': '*'
  });
  
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Teste EasyPanel - Funcionando!</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .success { color: green; }
          .info { background: #f0f0f0; padding: 10px; margin: 10px 0; }
        </style>
      </head>
      <body>
        <h1 class="success">✅ Servidor funcionando!</h1>
        <div class="info">
          <p><strong>Porta:</strong> ${port}</p>
          <p><strong>Host:</strong> ${hostname}</p>
          <p><strong>URL:</strong> ${req.url}</p>
          <p><strong>Método:</strong> ${req.method}</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        </div>
        <p>Se você está vendo esta página, a conectividade está funcionando!</p>
      </body>
    </html>
  `);
});

server.on('error', (err) => {
  console.error('❌ Erro no servidor:', err);
  process.exit(1);
});

server.listen(port, hostname, () => {
  console.log(`✅ Servidor rodando em http://${hostname}:${port}`);
  console.log(`✅ Pronto para receber conexões!`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Recebido SIGTERM, fechando servidor...');
  server.close(() => {
    console.log('Servidor fechado.');
    process.exit(0);
  });
});