const express = require('express')
const { router } = require('./routers/people')

const app = express()
app.use(express.json())
app.use(router)

app.listen(5000, (req, res) => {
  console.log('Server started on port 5000')
})
