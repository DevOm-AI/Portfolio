import http from 'http';

const hostname = '127.0.0.1';
const port = 5001; // Using a different port just for testing

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.on('error', (e) => {
  console.error(`Server error: ${e.code}`, e);
});