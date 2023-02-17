const { Op } = require("sequelize");
const { Product } = require('../models/index')

const getAllProduct = async (req, res) => {
    try {
        const products = await Product.findAll()
        if(products){
            res.status(200).send(products)
        }else{
            throw new Error('Cannot get all product')
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    getAllProduct,

}