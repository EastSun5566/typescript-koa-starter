import { BookEntity, BookModel } from '../models';

export interface IBookService {
  find(): Promise<BookEntity[]>;
  findByID(id: BookEntity['id']): Promise<BookEntity>;
  create(id: Omit<BookEntity, 'id'>): Promise<BookEntity>;
}

export class BookService implements IBookService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private models: { Book: typeof BookModel },
  ) {}

  find(): Promise<BookEntity[]> {
    return this.models.Book.find();
  }

  findByID(id: BookEntity['id']): Promise<BookEntity> {
    return this.models.Book.findByID(id);
  }

  create(book: BookEntity): Promise<BookEntity> {
    return this.models.Book.create(book);
  }
}

export default BookService;
