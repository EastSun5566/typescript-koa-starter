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
