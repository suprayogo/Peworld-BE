'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contacts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      created_by: {
        type: Sequelize.INTEGER,
      },
      attachment: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.JSON),
        defaultValue: [],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contacts');
  }
};