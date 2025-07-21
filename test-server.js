const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Teste EasyPanel</title></head>
      <body>
        <h1>Servidor funcionando!</h1>
        <p>Porta: ${process.env.PORT || 3000}</p>
        <p>Host: ${process.env.HOSTNAME || '0.0.0.0'}</p>
        <p>URL: ${req.url}</p>
        <p>Método: ${req.method}</p>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
const hostname = '0.0.0.0';

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}`);
});

server.on('error', (err) => {
  console.error('Erro no servidor:', err);
});