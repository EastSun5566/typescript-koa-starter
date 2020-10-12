import { RouterContext as Context } from 'koa-router';

import {
  HomeController,
  BookController,
} from '../controllers';
import {
  HomeService,
  BookService,
} from '../services';

interface Route {
  path: string;
  method: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  handler: (ctx: Context) => any;
}

const homeController = new HomeController(new HomeService());
const bookController = new BookController(new BookService({}));

export const routes: Route[] = [
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

export default routes;
