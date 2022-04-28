const http = require("http");
const { Worker } = require("worker_threads");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/pricing") {
    const worker = new Worker("./worker.js");
    worker.on("message", (data) => {
      res.end(`Pricing Page, ${data}`);
    });
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
