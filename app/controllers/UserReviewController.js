// models
const Question = require(`../models/UserReview`);

module.exports = {
  addQuestion: async (ctx, next) => {
    const data = {
      question: ctx.request.body.question,
      testId: ctx.request.body.testId,
    };
    const insert = await Question.create(data);
    ctx.res.ok(insert);
  },

  updateQuestion: async (ctx, next) => {
    const data = await Question.findOne({
      where: {
        id: ctx.params.id,
      },
    });
    if (!data) {
      return ctx.res.notFound();
    }

    data.question = ctx.request.body.question;
    data.testId = ctx.request.body.testId;

    const update = await data.save();

    ctx.res.ok(update);
  },

  deleteQuestion: async (ctx, next) => {
    const data = {
      where: {
        id: ctx.params.id,
      },
    };
    const delData = await Question.destroy(data);
    if (delData === 0) {
      ctx.res.notFound();
    } else {
      ctx.res.noContent();
    }
  },

  listQuestion: async (ctx, next) => {
    const offset = ctx.query.offset || 0;
    const limit = ctx.query.limit || 10;
    const order = ctx.query.order === `asc` ? `ASC` : `DESC` || `DESC`;
    const data = await Question.findAll({
      order: [[`id`, order]],
      offset: offset * limit,
      limit,
    });
    ctx.res.ok(data);
  },
};
