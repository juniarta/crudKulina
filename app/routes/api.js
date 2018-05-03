const Router = require(`koa-router`);
const koaBody = require(`koa-body`)({ multipart: true });

const QuestionController = require(`../controllers/QuestionController`);

module.exports = (app) => {
  const router = new Router({
    prefix: `/api/v1`,
  });

  // CRUD Question
  router.get(`/`, (ctx, next) => {
    ctx.res.ok({
      name: process.env.DB_DRIVER,
    });
  });
  router.get(`/question`, QuestionController.listQuestion);
  router.post(`/question`, QuestionController.addQuestion);
  router.put(`/question/:id`, QuestionController.updateQuestion);
  router.delete(`/question/:id`, QuestionController.deleteQuestion);

  app.use(router.routes()).use(router.allowedMethods());
};
