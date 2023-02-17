const express = require('express')
const rootRouter = express.Router()
const { storeRouter } = require('../router/StoreRoute')
const { productRouter } = require('../router/ProductRoute')
const { storeProductRouter } = require('../router/StoreProductRoute')


rootRouter.use('/store', storeRouter)
rootRouter.use('/product', productRouter)
rootRouter.use('/storeProduct', storeProductRouter)

module.exports = {
    rootRouter
}