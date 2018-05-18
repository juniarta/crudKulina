const Sequelize = require('sequelize');
const logger = require('../../config/logger');

const sequelize = new Sequelize(
  process.env.DB_DBNAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
    port: process.env.DB_PORT,

    pool: {
      max: 5,
      min: 1,
      idle: 10000,
    },

    logging: false,
  },
);
sequelize
  .authenticate()
  .then(() => {
    logger.info('The connection database is successful.');
  })
  .catch((err) => {
    logger.error('Error to connect database:', err);
  });

module.exports = sequelize;
