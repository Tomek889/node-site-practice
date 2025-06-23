const http = require("http");
const fs = require("fs");
const path = require("path");

const servePage = (res, fileName) => {
  const filePath = path.join(__dirname, fileName);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
};

http
  .createServer((req, res) => {
    const { method, url } = req;
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;

    if (method === "GET" && pathname === "/") {
      servePage(res, "index.html");
    } else if (method === "GET" && pathname === "/about") {
      servePage(res, "about.html");
    } else if (method === "GET" && pathname === "/contact-me") {
      servePage(res, "contact-me.html");
    } else {
      servePage(res, "404.html");
    }
  })
  .listen(8080);
