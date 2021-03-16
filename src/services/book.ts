import { Book, BookModel } from '../models';

export interface IBookService {
  find(): Promise<Book[]>;
  findByID(id: Book['id']): Promise<Book>;
  create(id: Book): Promise<Book>;
}

export class BookService implements IBookService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private models: { Book: typeof BookModel },
  ) {}

  find(): Promise<Book[]> {
    return this.models.Book.find();
  }

  findByID(id: Book['id']): Promise<Book> {
    return this.models.Book.findByID(id);
  }

  create(book: Book): Promise<Book> {
    return this.models.Book.create(book);
  }
}

export default BookService;
