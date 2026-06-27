const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello from Node backend</h1>");
}).listen(8080, () => {
  console.log("Backend running at http://localhost:3000");
});