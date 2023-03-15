const { Sequelize } = require('sequelize');
const dotenv = require('dotenv'); // import dotenv

dotenv.config(); // load environment variables from .env file

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT
});

module.exports = sequelize;
