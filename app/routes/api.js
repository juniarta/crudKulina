const Router = require(`koa-router`);
const koaBody = require(`koa-body`)({ multipart: true });

const UserReviewController = require(`../controllers/UserReviewController`);

module.exports = (app) => {
  const router = new Router({
    prefix: `/api/v1`,
  });

  // CRUD Question
  router.get(`/`, (ctx, next) => {
    ctx.res.ok({
      wellcome: `Selamat Datang Kawan`,
    });
  });
  router.get(`/review`, UserReviewController.listReview);
  router.post(`/review`, UserReviewController.addReview);
  router.put(`/review/:id`, UserReviewController.updateReview);
  router.delete(`/review/:id`, UserReviewController.deleteReview);

  router.get(`/time`, UserReviewController.listDate);

  app.use(router.routes()).use(router.allowedMethods());
};
