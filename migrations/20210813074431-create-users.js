"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      company: {
        type: Sequelize.STRING,
      },
      job_title: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      domicile: { allowNull: true, type: Sequelize.STRING, defaultValue: "-" },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: "-",
      },
      skills: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
      },
      job_history: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.JSON),
        defaultValue: [],
      },
      photo: {
        type: Sequelize.TEXT,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
