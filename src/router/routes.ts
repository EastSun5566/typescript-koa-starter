import { Context } from 'koa';

import { HomeController } from '../controllers/home';
import { HomeService } from '../services/home';

interface Route {
  path: string;
  method: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  handler: (ctx: Context) => any;
}

export const routes: Route[] = [
  {
    path: '/',
    method: 'get',
    handler: new HomeController({ homeService: new HomeService() }).get,
  },
];

export default routes;
