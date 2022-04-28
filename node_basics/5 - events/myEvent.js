const EventEmitter = require('events')

const event = new EventEmitter()

event.on('testEvent', () => {
  console.log('test event occured')
})

event.emit('testEvent')
