const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')

const app = express()

const port = 4040

app.get('/api/products', getProducts)
app.get('api/product/:id', getProducts)


app.listen(port, () => console.log('server running on 4040'))