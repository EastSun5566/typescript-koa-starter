import Router from 'koa-router';

import {
  homeController,
  bookController,
} from '../controllers';
import { registerRoute, Route } from './utils';

export const createRouter = (router: Router): Router => {
  const routes: Route[] = [
    {
      path: '/',
      method: 'get',
      handler: (...params) => homeController.index(...params),
    },
    {
      path: '/books',
      method: 'get',
      handler: (...params) => bookController.index(...params),
      children: [
        {
          path: '/:id',
          method: 'get',
          handler: (...params) => bookController.show(...params),
        },
        {
          path: '/',
          method: 'post',
          handler: (...params) => bookController.store(...params),
        },
      ],
    },
  ];
  routes.forEach((route) => registerRoute({ router, route }));

  return router;
};

export default createRouter;
