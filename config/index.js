const _ = require('lodash');
const path = require('path');

// import .env variables
require('dotenv-safe').load({
  allowEmptyValues: true,
  path: path.join(__dirname, '../config/.env'),
  sample: path.join(__dirname, '../config/.env.example'),
});

module.exports = _.merge(require('./'), {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  appDir: path.join(__dirname, '..'),
  uploadDir: path.join(__dirname, '..', '/assets/upload'),
  uploadDirImages: path.join(__dirname, '..', '/assets/upload/images'),
});
