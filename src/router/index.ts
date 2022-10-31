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
      handler: homeController.index,
    },
    {
      path: '/books',
      method: 'get',
      handler: bookController.index,
      children: [
        {
          path: '/:id',
          method: 'get',
          handler: bookController.show,
        },
        {
          path: '/',
          method: 'post',
          handler: bookController.store,
        },
      ],
    },
  ];

  routes.forEach((route) => registerRoute({ router, route }));

  return router;
};

export default createRouter;
