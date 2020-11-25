import { Server } from 'http';

import Koa from 'koa';
import Router, { IRouterOptions } from 'koa-router';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createRouter } from './router';
import { errorHandler } from './middlewares';

interface ServerOptions extends IRouterOptions {
  port?: number;
}

export const createServer = (options: ServerOptions = {}): Server => {
  const router = createRouter(new Router(options));

  const port = options.port || process.env.PORT || 8080;

  const server = new Koa()
    .use(helmet())
    .use(bodyParser())
    .use(errorHandler())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(port);

  console.info(`[HTTP] listening on http://localhost:${port}${options.prefix || ''}`);

  return server;
};
export default createServer;
