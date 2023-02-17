'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class storeProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
    }
  }
  storeProduct.init({
    shop: DataTypes.INTEGER,
    product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'storeProduct',
  });
  return storeProduct;
};