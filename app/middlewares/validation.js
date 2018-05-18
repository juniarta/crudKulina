const bouncer = require('koa-bouncer');

exports.handleBouncerValidationError = () => async (ctx, next) => {
  try {
    await next();

    // Handle 404 upstream.
    const status = ctx.status;
    if (status === 404) {
      ctx.status = 404;
      ctx.body = {
        meta: {
          code: 404,
          status: false,
          messages: 'Not Found',
        },
      };
    }
  } catch (err) {
    if (err instanceof bouncer.ValidationError) {
      err.message = err.message || 'Validation error';
    } else if (err.name === 'SequelizeValidationError') {
      err.message = err.errors[0].message || 'Validation error';
    }

    // Set our response.
    ctx.status = err.status || 400;
    ctx.body = {
      meta: {
        code: ctx.status,
        status: false,
        messages: err.message,
      },
    };

    // return ctx.app.emit(`error`, err, this);
  }
};
