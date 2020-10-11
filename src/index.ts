import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';

import { createRouter } from './router';

const app = new Koa();
const router = createRouter();

const port = process.env.PORT || 3000;

app
  .use(helmet())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port);
