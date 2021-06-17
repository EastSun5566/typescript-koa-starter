import { IMiddleware } from 'koa-router';

class ServerError extends Error {
  status?: number;
}

export const createErrorHandler = (): IMiddleware => async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof ServerError) {
      ctx.status = err.status || 500;
      ctx.body = {
        message: err.message || 'Internal server error',
      };
    }
  }
};

export default createErrorHandler;
