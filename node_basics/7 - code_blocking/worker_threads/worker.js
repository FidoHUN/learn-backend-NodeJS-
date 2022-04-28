const { parentPort } = require("worker_threads");

//! BLOCKING CODE THAT NO LONGER BLOCKS EVERY USER

let total = 0;
for (let i = 0; i < 10000000000; i++) {
  total++;
}

parentPort.postMessage(total);
