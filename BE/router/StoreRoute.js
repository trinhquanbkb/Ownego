const express = require('express')
const storeRouter = express.Router()
const { getAllStore, getAllStoreAndProduct } = require('../controller/store.controller')

storeRouter.get('/getAllStore', getAllStore)
storeRouter.get('/getAllStoreAndProduct', getAllStoreAndProduct)

module.exports = {
    storeRouter
}