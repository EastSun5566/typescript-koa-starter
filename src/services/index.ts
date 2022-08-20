import { HomeService } from './home';
import { BookService } from './book';

import { bookRepo } from '../repos';

export * from './home';
export * from './book';

export const homeService = new HomeService();
export const bookService = new BookService(bookRepo);
