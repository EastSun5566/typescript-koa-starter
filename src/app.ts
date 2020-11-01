import { Server } from 'http';

import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createRouter } from './router';
import { handleErrors } from './middlewares';

interface AppOptions {
  routesPrefix?: string
}

export const createApp = ({ routesPrefix = '' }: AppOptions = {}): Server => {
  const router = createRouter(new Router({ prefix: routesPrefix }));

  const port = process.env.PORT || 8080;

  const app = new Koa()
    .use(logger())
    .use(helmet())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(handleErrors)
    .listen(port, () => {
      console.info(`[HTTP] listening on http://localhost:${port}${routesPrefix}`);
    });

  return app;
};
export default createApp;
