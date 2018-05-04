// Utils
const Utils = require(`../helpers/Utils`);

// models
const UserReview = require(`../models/UserReview`);

module.exports = {
  addReview: async (ctx, next) => {
    const data = {
      order_id: ctx.request.body.order_id,
      product_id: ctx.request.body.product_id,
      user_id: ctx.request.body.user_id,
      rating: ctx.request.body.rating,
      review: ctx.request.body.review,
    };
    const insert = await UserReview.create(data);
    ctx.res.ok(insert);
  },

  updateReview: async (ctx, next) => {
    const data = await UserReview.findOne({
      where: {
        id: ctx.params.id,
      },
    });
    if (!data) {
      return ctx.res.notFound();
    }

    data.order_id = ctx.request.body.order_id;
    data.product_id = ctx.request.body.product_id;
    data.user_id = ctx.request.body.user_id;
    data.rating = ctx.request.body.rating;
    data.review = ctx.request.body.review;

    const update = await data.save();

    ctx.res.ok(update);
  },

  deleteReview: async (ctx, next) => {
    const data = {
      where: {
        id: ctx.params.id,
      },
    };
    const delData = await UserReview.destroy(data);
    if (delData === 0) {
      ctx.res.notFound();
    } else {
      ctx.res.noContent();
    }
  },

  listReview: async (ctx, next) => {
    const offset = ctx.query.offset || 0;
    const limit = ctx.query.limit || 10;
    const order = ctx.query.order === `asc` ? `ASC` : `DESC` || `DESC`;
    const data = await UserReview.findAll({
      order: [[`id`, order]],
      offset: offset * limit,
      limit,
    });
    ctx.res.ok(data);
  },

  bilanganPrima: async (ctx, next) => {
    const bilangan = ctx.request.body.bilangan;
    let data = null;
    for (let i = 1; i < bilangan; i++) {
      let counter = 0;
      for (let j = 1; j < i; j++) {
        if (i % j === 0) {
          counter += 1;
        }
      }
      if (counter === 2) {
        console.log(`${i} adalah bilangan prima`);
        data = i;
      }
    }
    ctx.res.ok(data);
  },

  fibonacci: async (ctx, next) => {
    let a = 1,
      b = 0,
      temp;

    while (ctx.request.body.number >= 0) {
      temp = a;
      a += b;
      b = temp;
      ctx.request.body.number--;
    }

    ctx.res.ok(b);
  },
};
