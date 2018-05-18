const winston = require('winston');
require('winston-daily-rotate-file');
const pino = require('pino')();
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, '../log');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const logger = new winston.Logger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      colorize: true,
    }),
    new winston.transports.DailyRotateFile({
      filename: 'app-%DATE%.log',
      dirname: dir,
      datePattern: 'DD:MM:YYYY',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
});

module.exports = logger;
