module.exports = {
  development: {
    username: `root`,
    password: ``,
    database: `kulina`,
    host: `localhost`,
    dialect: `mysql`,
  },
  test: {
    username: process.env.DB_T_USERNAME,
    password: process.env.DB_T_PASSWORD,
    database: process.env.DB_T_DBNAME,
    host: process.env.DB_T_HOST,
    dialect: process.env.DB_T_DRIVER,
    logging: true,
  },
  production: process.env.DATABASE_URL,
};
