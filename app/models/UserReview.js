const Sequelize = require('sequelize');

const Database = require('../database');
const Utils = require('../helpers/Utils');

const UserReview = Database.define(
  'user_review',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    order_id: {
      type: Sequelize.INTEGER,
    },
    product_id: {
      type: Sequelize.INTEGER,
    },
    user_id: {
      type: Sequelize.INTEGER,
    },
    rating: {
      type: Sequelize.STRING,
    },
    review: { type: Sequelize.STRING },
    created_at: { type: Sequelize.INTEGER, defaultValue: Utils.getTimeEpoch() },
    updated_at: { type: Sequelize.INTEGER, defaultValue: Utils.getTimeEpoch() },
  },
  {
    timestamps: false,
    freezeTableName: true,
  },
);
module.exports = UserReview;
