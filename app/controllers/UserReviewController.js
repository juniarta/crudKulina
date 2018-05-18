// Libs
const moment = require('moment-timezone');

// Utils
// const Utils = require('../helpers/Utils');
const logger = require('../../config/logger');

// models
const UserReview = require('../models/UserReview');

module.exports = {
  addReview: async (ctx) => {
    const data = {
      order_id: ctx.request.body.order_id,
      product_id: ctx.request.body.product_id,
      user_id: ctx.request.body.user_id,
      rating: ctx.request.body.rating,
      review: ctx.request.body.review,
    };
    try {
      const insert = await UserReview.create(data);
      ctx.res.ok(insert);
    } catch (error) {
      logger.error(error);
    }
  },

  updateReview: async (ctx) => {
    const data = await UserReview.findOne({
      where: {
        id: ctx.params.id,
      },
    });
    if (!data) {
      ctx.res.notFound();
    }

    try {
      data.order_id = ctx.request.body.order_id;
      data.product_id = ctx.request.body.product_id;
      data.user_id = ctx.request.body.user_id;
      data.rating = ctx.request.body.rating;
      data.review = ctx.request.body.review;

      const update = await data.save();

      ctx.res.ok(update);
    } catch (error) {
      console.log(error);
    }
  },

  deleteReview: async (ctx) => {
    const data = {
      where: {
        id: ctx.params.id,
      },
    };
    try {
      const delData = await UserReview.destroy(data);

      if (delData === 0) {
        ctx.res.notFound();
      } else {
        ctx.res.noContent();
      }
    } catch (error) {
      console.log(error);
    }
  },

  listReview: async (ctx) => {
    const offset = ctx.query.offset || 0;
    const limit = ctx.query.limit || 10;
    const order = ctx.query.order === 'asc' ? 'ASC' : 'DESC' || 'DESC';
    const data = await UserReview.findAll({
      order: [['id', order]],
      offset: offset * limit,
      limit,
    });
    ctx.res.ok(data);
  },

  bilanganPrima: async (ctx) => {
    const { bilangan } = ctx.request.body.bilangan;
    let data = null;
    for (let i = 1; i < bilangan; i += 1) {
      let counter = 0;
      for (let j = 1; j < i; j += 1) {
        if (i % j === 0) {
          counter += 1;
        }
      }
      if (counter === 2) {
        data = i;
      }
    }
    ctx.res.ok(data);
  },

  fibonacci: async (ctx) => {
    console.log(new Date().valueOf());
    console.log(new Date().getUTCMilliseconds());
    console.log(moment.tz('Asia/Jakarta').unix());
    logger.info('error with data ku');
    ctx.res.ok('shit');
  },
};
