import { HomeController } from './home';
import { BookController } from './books';

import { bookService, homeService } from '../services';

export * from './home';
export * from './books';

export const homeController = new HomeController(homeService);
export const bookController = new BookController(bookService);
