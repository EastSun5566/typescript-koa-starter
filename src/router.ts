import Router, { RouterContext as Context } from 'koa-router';

import {
  HomeController,
  BookController,
} from './controllers';
import {
  HomeService,
  BookService,
} from './services';
import { BookModel } from './models';

export interface Route {
  path: string;
  method?: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  handler?: (ctx: Context) => any;
  children?: Route[];
}

const registerRoute = ({
  router,
  route,
  prefixPath = '',
}: {
  router: Router,
  route: Route,
  prefixPath?: string,
}): void => {
  const {
    path,
    method,
    handler,
    children,
  } = route;

  if (children?.length) {
    if (method && handler) router[method](`${prefixPath}${path}`, handler);

    children.forEach((nestRoute) => registerRoute({
      router,
      route: nestRoute,
      prefixPath: `${prefixPath}${nestRoute.path}`,
    }));
    return;
  }

  if (!method) throw new Error('No method');
  if (!handler) throw new Error('No handler');

  router[method](`${prefixPath}${path}`, handler);
};

export const createRouter = (router: Router): Router => {
  const homeController = new HomeController(new HomeService());
  const bookController = new BookController(new BookService({ book: new BookModel() }));

  const routes: Route[] = [
    {
      path: '/',
      method: 'get',
      handler: homeController.get,
    },
    {
      path: '/books',
      method: 'get',
      handler: bookController.list,
      children: [
        {
          path: '/:id',
          method: 'get',
          handler: bookController.get,
        },
        {
          path: '/',
          method: 'post',
          handler: bookController.create,
        },
      ],
    },
  ];

  routes.forEach((route) => registerRoute({ router, route }));

  return router;
};

export default createRouter;
