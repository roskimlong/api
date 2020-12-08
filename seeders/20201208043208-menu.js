'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Companies', [{
      name: 'Menu',
      description: 'Top menu',
      createdAt: new Date(),
      createdBy: 1,
      updatedAt: new Date(),
      updatedBy: 1
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
