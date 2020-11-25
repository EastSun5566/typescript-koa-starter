import { IMiddleware } from 'koa-router';

export const errorHandler = (): IMiddleware => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      message: err.message || 'Internal server error',
    };
  }
};

export default errorHandler;
