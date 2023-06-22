require("dotenv").config();

module.exports = {
  development: {
    host: "localhost",
    username: "postgres",
    password: "root",
    database: "hire_job",
    dialect: "postgres",
  },
  development_2: {
    username: process.env.DB_USER_2,
    password: process.env.DB_PASS_2,
    database: process.env.DB_NAME_2,
    host: process.env.DB_HOST_2,
    dialect: process.env.DB_TYPE_2,
  },
};
