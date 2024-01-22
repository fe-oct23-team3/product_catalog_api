'use strict';

const initialProductsDetails = require('./20240122161605-add-product-details.json');

const TABLE_NAME = 'products_details';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      TABLE_NAME,
      initialProductsDetails,
      {},
      { description: { type: new Sequelize.JSON() } },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(TABLE_NAME, {
      name: initialProductsDetails.map((product) => product.name),
    });
  },
};
