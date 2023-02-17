'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stores', [
      {
        id: 1,
        name: "Ding Tea",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 2,
        name: "Tocotoco",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 3,
        name: "Gongcha",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      },
      {
        id: 4,
        name: "LeeTee",
        updatedAt: "2023-01-17 15:55:09",
        createdAt: "2023-01-13 00:22:25",
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stores', null, {});
  }
};
