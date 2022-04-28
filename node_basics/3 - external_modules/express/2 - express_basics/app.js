const express = require('express')
const path = require('path')
const { products } = require('./data')

const app = express()

app.use(express.static('./webpage'))

app.listen(5000, () => {
  console.log('Server is listening on port 5000...')
})

//routes
app.get('/', (req, res) => {
  return res
    .status(200)
    .header({ 'content-type': 'text/html' })
    .send('<h1>Home Page</h1>')
})

app.get('/about', (req, res) => {
  return res
    .status(200)
    .header({ 'content-type': 'text/html' })
    .send('<h1>About Page</h1>')
})

// SSR
app.get('/webpage', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '/webpage/index.html'))
})

// API
app.get('/api/products/', (req, res) => {
  return res.status(200).json(products)
})

app.get('/api/products/preview', (req, res) => {
  const preview = products.map((product) => {
    // in a map each product represent the next JSON object in the products array
    const { id, name, image, price } = product
    return { id, name, image, price }
  })
  return res.status(200).json(preview)
})

// route parameters, get all information of single product by id
app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id)
  //! CAN'T USE {}
  //! find() is used for get one record, filter() is used for get multiple records
  const product = products.find((product) => product.id === id)

  if (!product) {
    return res.status(404).json({ message: 'id not found' })
  }

  return res.status(200).json(product)
})

//search querys
app.get('/api/query', (req, res) => {
  let filteredProducts = [...products]
  if (req.query.search) {
    const searchString = req.query.search
    filteredProducts = filteredProducts.filter((product) =>
      product.name.includes(searchString)
    )
  }
  if (req.query.limit) {
    const limit = Number(req.query.limit)
    filteredProducts = filteredProducts.slice(0, limit)
  }
  if (filteredProducts.length < 1) {
    return res.status(200).json({
      success: true,
      data: [],
    })
  }
  return res.status(200).json(filteredProducts)
})

// app.all() for 404 cases
app.all('*', (req, res) => {
  return res
    .status(404)
    .header({ 'content-type': 'text/html' })
    .send('<h1>Oops...</h1>')
})
