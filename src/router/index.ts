import Router from 'koa-router';

import { routes } from './routes';

export const createRouter = (): Router => {
  const router = new Router();

  routes.forEach(({ path, method, controller }) => {
    router[method](path, controller);
  });

  return router;
};

export default createRouter;
