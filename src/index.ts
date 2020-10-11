import Koa from 'koa';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import bodyParser from 'koa-bodyparser';

import { createRouter } from './router';

const app = new Koa();
const router = createRouter();

const port = process.env.PORT || 3000;

app
  .use(logger())
  .use(helmet())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => {
    console.log(`[HTTP] listening on http://localhost:${port}`);
  });
