const Koa = require(`koa`);
const app = new Koa();
const session = require(`koa-generic-session`);
const redisStore = require(`koa-redis`);
const convert = require(`koa-convert`);
const passport = require(`koa-passport`);
const debug = require(`debug`)(`app`);
const bodyParser = require(`koa-bodyparser`);
const bouncer = require(`koa-bouncer`);
const mw = require(`./app/middlewares/validation`);
const cors = require(`kcors`);
const responseHandler = require(`./app/middlewares/response`);
const views = require(`koa-views`);
const packages = require(`./package.json`);

// Must be used before any router is used
app.use(
  views(`${__dirname}/views`, {
    map: {
      html: `underscore`,
    },
  })
);

// Database
require(`./config`);
require(`./app/database`);

// Setup KOA
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser());
app.use(cors());
app.use(require(`koa-static`)(`${__dirname}/assets`));
app.keys = [`your-session-secret`];
app.use(
  convert(
    session({
      store: redisStore(),
    })
  )
);
app.proxy = true;

// Middleware
app.use(bouncer.middleware());
app.use(mw.handleBouncerValidationError());
app.use(responseHandler({ contentType: `application/json` }));

// Logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  debug(`${ctx.method} ${ctx.url} - ${ms}`);
});

// routes
require(`./app/routes/api`)(app);

app.listen(process.env.PORT, () => {
  console.log(`${packages.name} run on port ${JSON.stringify(process.env.PORT)}`);
});
