import type { BookEntity } from '../entities';
import { BookRepo } from '../repos';

export class BookService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private bookRepos: InstanceType<typeof BookRepo>,
  ) {}

  find(): Promise<BookEntity[]> {
    return this.bookRepos.find();
  }

  findByID(id: BookEntity['id']): Promise<BookEntity> {
    return this.bookRepos.findByID(id);
  }

  create(book: Omit<BookEntity, 'id'>): Promise<BookEntity> {
    return this.bookRepos.create(book);
  }
}

export default BookService;
