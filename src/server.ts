/* eslint-disable no-console */
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

  const app = new Koa()
    .use(helmet())
    .use(bodyParser())
    .use(errorHandler())
    .use(router.routes())
    .use(router.allowedMethods());

  const port = options.port || process.env.PORT || 8080;
  const server = app.listen(port, () => {
    console.info(`[HTTP] Listening on http://localhost:${port}${options.prefix || ''}`);
  });

  process.on('uncaughtException', (err) => {
    console.error('UncaughtException', err);
    process.exit(1);
  });

  const handleSignals = (signals: NodeJS.Signals) => {
    console.error(`Exit process in responding to ${signals}`);

    console.info('Starting graceful shutdown');
    server.close();

    process.exit(0);
  };

  process.on('SIGTERM', handleSignals);
  process.on('SIGINT', handleSignals);

  return server;
};
export default createServer;
