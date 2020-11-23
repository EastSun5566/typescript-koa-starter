import { Book } from '../domains';
import { BookModel } from '../models';

export interface IBookService {
  find(): Promise<Book[]>;
  findByID(id: Book['id']): Promise<Book>;
  create(id: Book): Promise<Book>;
}

export class BookService implements IBookService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private models: { book: BookModel },
  ) {}

  find(): Promise<Book[]> {
    return this.models.book.find();
  }

  findByID(id: Book['id']): Promise<Book> {
    return this.models.book.findByID(id);
  }

  create(book: Book): Promise<Book> {
    return this.models.book.create(book);
  }
}

export default BookService;
