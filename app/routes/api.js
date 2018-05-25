const Router = require('koa-router');

const UserReviewController = require('../controllers/UserReviewController');
const AuthController = require('../controllers/AuthController');
const NewsController = require('../controllers/NewsController');

module.exports = (app) => {
  const router = new Router({
    prefix: '/api/v1',
  });

  // CRUD Question
  router.get('/', (ctx) => {
    ctx.res.ok({
      wellcome: 'Selamat Datang Kawan',
    });
  });

  router.get('/news1', NewsController.fromSdk);
  router.get('/news2', NewsController.fromUrl);

  router.get('/review', UserReviewController.listReview);
  router.post('/review', UserReviewController.addReview);
  router.put('/review/:id', UserReviewController.updateReview);
  router.delete('/review/:id', UserReviewController.deleteReview);

  router.post('/prima', UserReviewController.bilanganPrima);
  router.get('/fibonacci', UserReviewController.fibonacci);

  router.post('/user', AuthController.createUser);
  router.post('/login', AuthController.siginUser);
  router.get('/user', AuthController.cekAuthState);

  app.use(router.routes()).use(router.allowedMethods());
};
