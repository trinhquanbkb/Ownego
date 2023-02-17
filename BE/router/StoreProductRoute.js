const express = require('express')
const storeProductRouter = express.Router()
const { getAllStoreProduct } = require('../controller/storeProduct.controller')

storeProductRouter.get('/getAllStoreProduct', getAllStoreProduct)

module.exports = {
    storeProductRouter
}