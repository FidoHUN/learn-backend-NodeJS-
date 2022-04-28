const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const router = require('./routes/user')

const app = express()

app.use(express.static('./webpage'))
app.use(express.json())
app.use(router)

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log('Connected')
}).catch((err)=>console.log(err))

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})

//Routes
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/webpage/index.html'))
})

app.get('/images', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/webpage/images.html'))
})