/* eslint-disable no-console */
import { Server } from 'http';
import App from 'koa';
import Router, { IRouterOptions as RouterOptions } from 'koa-router';
import createHelmet from 'koa-helmet';
import createBodyParser from 'koa-bodyparser';
import createLogger from 'koa-logger';

import { createRouter } from './router';
import { createErrorHandler } from './middlewares';
import { registerProcessEvents } from './utils';

interface ServerOptions {
  port?: number;
  route?: RouterOptions;
}

export const createServer = (options: ServerOptions = {}): Server => {
  const { route: routeOptions } = options;
  const router = createRouter(new Router(routeOptions));

  const app = new App()
    .use(createLogger())
    .use(createHelmet())
    .use(createBodyParser())
    .use(createErrorHandler())
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
