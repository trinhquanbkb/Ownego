const { Op } = require("sequelize");
const { store, Product, storeProduct } = require('../models/index')

const getAllStoreAndProduct = async (req, res) => {
    try {
        const storeProductId = await storeProduct.findAll()
        let arr = []
        storeProductId.map(async (item) => {
            let t = await Product.findOne({
                where: {
                    id: item.dataValues.product
                }
            })
            arr.push({
                idShop: item.shop,
                product: t.dataValues
            })
        })
        if (storeProductId) {
            setTimeout(() => {
                res.status(200).send(arr)
            }, 100)
        } else {
            throw new Error('Cannot get all store with product')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getAllStore = async(req, res) => {
    try{
        const stores = await store.findAll()
        if(stores){
            res.status(200).send(stores)
        }else{
            throw new Error('Cannot get all store')
        }
    }catch(err){
        res.status(500).send(err)
    }
}

module.exports = {
    getAllStore,
    getAllStoreAndProduct

}