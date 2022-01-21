//Basic event handling and calling

// const EventEmitter = require('events')

// const event = new EventEmitter()

// event.on('testEvent', () => {
//   console.log('test event occured')
// })

// event.emit('testEvent')

// Event handling looks easy but it is very important because there are tons of usefull built-in events in some modules

const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.end('Hello')
})

server.listen(5000)
