import { Server } from 'http';

import Koa from 'koa';
import Router, { IRouterOptions } from 'koa-router';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createRouter } from './router';
import { errorHandler } from './middlewares';

type ServerOptions = IRouterOptions

export const createServer = (options: ServerOptions = {}): Server => {
  const router = createRouter(new Router(options));

  const port = process.env.PORT || 8080;

  const app = new Koa()
    .use(logger())
    .use(helmet())
    .use(bodyParser())
    .use(errorHandler)
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port);

  console.info(`[HTTP] listening on http://localhost:${port}${routesPrefix}`);

  return app;
};
export default createServer;
