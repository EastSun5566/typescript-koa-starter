/* eslint-disable class-methods-use-this */
import { Book } from '../domains';

export interface IBookModel {
  find(): Promise<Book[]>;
  findByID(id: Book['id']): Promise<Book>;
  create(id: Book): Promise<Book>;
}

export class BookModel implements IBookModel {
  async find(): Promise<Book[]> {
    return Array.from({ length: 3 }, (_, index) => new Book({ id: index + 1, name: 'good book' }));
  }

  async findByID(id: Book['id']): Promise<Book> {
    return new Book({ id, name: 'good book' });
  }

  async create(book: Book): Promise<Book> {
    return book;
  }
}
