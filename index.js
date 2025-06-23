const http = require("http");

http
  .createServer((req, res) => {
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (method === "GET" && pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home");
    } else if (method === "GET" && pathname === "/about") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("about");
    } else if (method === "GET" && pathname === "/contact-me") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("contact-me");
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  })
  .listen(8080);
