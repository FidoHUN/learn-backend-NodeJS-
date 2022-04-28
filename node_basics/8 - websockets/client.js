const WebSocket = require("ws");

const serverAdress = "ws://127.0.0.1:8080";

const ws = new WebSocket(serverAdress);

ws.on("open", function () {
  ws.send("Hello SERVER!!");
});

ws.on("message", function (msg) {
  console.log("Received message from the server" + msg);
});
