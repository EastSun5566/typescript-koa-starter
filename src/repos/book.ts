/* eslint-disable class-methods-use-this */
import type { BookEntity } from '../entities';

export class BookRepo {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected UserModel?: any,
  ) {}

  async find(): Promise<BookEntity[]> {
    return Array.from(
      { length: 3 },
      (_, index) => ({ id: index + 1, name: 'good book' }),
    );
  }

  async findByID(id: BookEntity['id']): Promise<BookEntity> {
    return { id, name: 'good book' };
  }

  async create(book: Omit<BookEntity, 'id'>): Promise<BookEntity> {
    return { id: Math.floor(Math.random() * 10), ...book };
  }
}

export default BookRepo;
