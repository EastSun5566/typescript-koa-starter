import Router from 'koa-router';

import {
  HomeController,
  BookController,
} from '../controllers';
import {
  HomeService,
  BookService,
} from '../services';
import { BookModel } from '../models';
import { registerRoute, Route } from './utils';

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
          path: ':id',
          method: 'get',
          handler: bookController.get,
        },
        {
          path: '',
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
