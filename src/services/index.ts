import { HomeService } from './home';
import { BookService } from './book';

import { BookModel } from '../models';

export * from './home';
export * from './book';

export const homeService = new HomeService();
export const bookService = new BookService({ Book: BookModel });
