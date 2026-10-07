"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },

  async down(queryInterface, Sequelize) {
    throw new Error("Migration này không thể hoàn tác");
  },
};
