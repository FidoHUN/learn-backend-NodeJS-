const http = require('http')

const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.end('Home Page')
 } else if (req.url === '/about') {
  //! BLOCKING CODE BLOCKS EVERY USER
  for (let i = 0; i < 100; i++) {
   for (let j = 0; j < 1000; j++) {
    console.log(`${i} ${j}`)
   }
  }
  res.end('About Page')
 } else if (req.url === '/pricing') {
  res.end('Pricing Page')
 } else {
  res.end('Error Page')
 }
})

server.listen(5000, () => {
 console.log('Server is listening on port 5000...')
})
