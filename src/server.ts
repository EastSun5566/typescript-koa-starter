/* eslint-disable no-console */
import { Server } from 'http';
import Koa from 'koa';
import Router, { IRouterOptions as RouterOptions } from 'koa-router';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createRouter } from './router';
import { errorHandler } from './middlewares';
import { registerProcessEvents } from './utils';

interface ServerOptions {
  port?: number;
  route?: RouterOptions;
}

export const createServer = (options: ServerOptions = {}): Server => {
  const { route: routeOptions } = options;
  const router = createRouter(new Router(routeOptions));

  const app = new Koa()
    .use(helmet())
    .use(bodyParser())
    .use(errorHandler())
    .use(router.routes())
    .use(router.allowedMethods());

  const port = options.port || process.env.PORT || 8080;
  const server = app.listen(port, () => {
    console.info(`[HTTP] Listening on http://localhost:${port}${routeOptions?.prefix || ''}`);
  });

  registerProcessEvents(server);

  return server;
};
export default createServer;
