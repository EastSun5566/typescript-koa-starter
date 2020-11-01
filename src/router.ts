import Router, { RouterContext as Context } from 'koa-router';

import {
  HomeController,
  BookController,
} from './controllers';
import {
  HomeService,
  BookService,
} from './services';

export interface Route {
  path: string;
  method: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  handler: (ctx: Context) => any;
}

export const createRouter = (router: Router): Router => {
  const homeController = new HomeController(new HomeService());
  const bookController = new BookController(new BookService({}));

  const routes: Route[] = [
    {
      path: '/',
      method: 'get',
      handler: homeController.get,
    },
    {
      path: '/books/:id',
      method: 'get',
      handler: bookController.get,
    },
    {
      path: '/books',
      method: 'post',
      handler: bookController.create,
    },
  ];

  routes.forEach(({ path, method, handler }) => {
    router[method](path, handler);
  });

  return router;
};

export default createRouter;
