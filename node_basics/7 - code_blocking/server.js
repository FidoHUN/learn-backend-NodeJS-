const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/pricing") {
    //! BLOCKING CODE BLOCKS EVERY USER
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
      total++;
    }
    res.end(`Pricing Page, ${total}`);
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("Error Page");
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
