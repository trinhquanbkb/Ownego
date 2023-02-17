'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('storeProducts', [
      {
        id: 1,
        shop: 1,
        product: 1,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 2,
        shop: 1,
        product: 2,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 3,
        shop: 2,
        product: 2,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 4,
        shop: 1,
        product: 3,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 5,
        shop: 3,
        product: 3,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 6,
        shop: 1,
        product: 1,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 7,
        shop: 3,
        product: 1,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 8,
        shop: 3,
        product: 5,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 9,
        shop: 1,
        product: 4,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 10,
        shop: 2,
        product: 5,
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('storeProducts', null, {});
  }
};
