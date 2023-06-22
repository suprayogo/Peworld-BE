"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      fullname: DataTypes.STRING,
      email: DataTypes.STRING,
      company: DataTypes.STRING,
      job_title: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      description: DataTypes.STRING,
      domicile: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      skills: DataTypes.ARRAY(DataTypes.STRING),
      job_history: {
        type: DataTypes.STRING,
        get: function () {
          return JSON.parse(this.getDataValue("job_history"));
        },
        set: function (val) {
          return this.setDataValue("job_history", JSON.stringify(val));
        },
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
