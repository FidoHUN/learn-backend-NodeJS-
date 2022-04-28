const express = require('express')
const { fuggveny, fuggveny2 } = require('./middlewares')

const app = express()

// app.use(fuggveny)
// app.use([fuggveny, fuggveny2])
app.use('/api', fuggveny2)

app.get('/', fuggveny, (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('Server started running on port 5000...')
})
