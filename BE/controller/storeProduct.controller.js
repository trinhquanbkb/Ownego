const { Op } = require("sequelize");
const { storeProduct } = require('../models/index')

const getAllStoreProduct = async (req, res) => {
    try {
        const storeProducts = await storeProduct.findAll()
        if(storeProducts){
            res.status(200).send(storeProducts)
        }else{
            throw new Error('Cannot get all store product')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    getAllStoreProduct,

}