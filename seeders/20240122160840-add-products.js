'use strict';

const initialProducts = require('./20240122160840-add-products.json');

const TABLE_NAME = 'products';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(TABLE_NAME, initialProducts);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, {
      name: initialProducts.map((product) => product.name),
    });
  },
};
