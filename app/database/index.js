const Sequelize = require(`sequelize`);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DRIVER,
  port: process.env.DB_PORT,

  pool: {
    max: 5,
    min: 1,
    idle: 10000,
  },

  logging: false,
});

module.exports = sequelize;
