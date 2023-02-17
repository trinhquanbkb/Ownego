const express = require('express')
const productRouter = express.Router()
const { getAllProduct } = require('../controller/product.controller')

productRouter.get('/getAllProduct', getAllProduct)

module.exports = {
    productRouter
}