import {
  HomeController,
  BookController,
} from '../controllers';
import {
  HomeService,
  BookService,
} from '../services';
import { Route } from './types';

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
