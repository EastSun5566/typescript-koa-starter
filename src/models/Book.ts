/* eslint-disable class-methods-use-this */
export interface Book {
  id?: number;
  name?: string;
}

export class BookModel implements Book {
  id?: number;

  name?: string;

  constructor({ id, name }: Book) {
    this.id = id;
    this.name = name;
  }

  static async find(): Promise<BookModel[]> {
    return Array.from(
      { length: 3 },
      (_, index) => new BookModel({ id: index + 1, name: 'good book' }),
    );
  }

  static async findByID(id: BookModel['id']): Promise<Book> {
    return new BookModel({ id, name: 'good book' });
  }

  static async create(book: Book): Promise<BookModel> {
    return new BookModel(book);
  }
}

export default BookModel;
