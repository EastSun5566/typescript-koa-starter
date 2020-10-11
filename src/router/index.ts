import Router from 'koa-router';

import { routes } from './routes';

export const createRouter = (): Router => {
  const router = new Router();

  routes.forEach(({ path, method, handler }) => {
    router[method](path, handler);
  });

  return router;
};

export default createRouter;
