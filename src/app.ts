import { Server } from 'http';

import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createRouter } from './router';

interface AppOptions {
  routesPrefix?: string
}

export const createApp = ({ routesPrefix = '/' }: AppOptions = {}): Server => {
  const router = createRouter(new Router({ prefix: routesPrefix }));

  const port = process.env.PORT || 3000;

  const app = new Koa()
    .use(logger())
    .use(helmet())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port, () => {
      console.log(`[HTTP] listening on http://localhost:${port}`);
    });

  return app;
};
export default createApp;
