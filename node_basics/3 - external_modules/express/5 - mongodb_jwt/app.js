const { connectDB } = require('./db/connect')
const express = require('express')
require('dotenv').config()
const { router } = require('./routers/users')

const app = express()

app.use(express.json())
app.use(express.static('./public'))
app.use(router)

connectDB(process.env.MONGODB_URI)
  .then(() => {
    console.log('Application connected to MongoDB Cloud Database!')
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}!`)
    })
  })
  .catch((err) => console.log(err))
