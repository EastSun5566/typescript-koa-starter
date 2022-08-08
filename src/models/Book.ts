import { BaseEntity } from './Base';

export interface BookEntity extends BaseEntity {
  name?: string;
}

export class BookModel implements BookEntity {
  id: number;

  name?: string;

  constructor({ id, name }: BookEntity) {
    this.id = id;
    this.name = name;
  }

  static async find(): Promise<BookEntity[]> {
    return Array.from(
      { length: 3 },
      (_, index) => new BookModel({ id: index + 1, name: 'good book' }),
    );
  }

  static async findByID(id: BookModel['id']): Promise<BookEntity> {
    return new BookModel({ id, name: 'good book' });
  }

  static async create(book: BookEntity): Promise<BookModel> {
    return new BookModel(book);
  }
}

export default BookModel;
