const http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(`Servidor rodando na porta ${PORT}`);
}).listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

