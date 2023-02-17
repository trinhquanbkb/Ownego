'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: "Royal Milk Tea",
        price: 4.8,
        toppings: "Milk foam,white pearl",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 2,
        name: "Green Milk Tea",
        price: 4.6,
        toppings: "pearl",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 3,
        name: "Oolong Milk Tea",
        price: 5.1,
        toppings: "Pearl, milk foam",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 4,
        name: "Blueberry Milk Tea",
        price: 5.1,
        toppings: "Pearl, milk foam",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 5,
        name: "Mango Milk Tea",
        price: 5.1,
        toppings: "Aloe, Pearl",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
