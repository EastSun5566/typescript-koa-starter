import { RouterContext as Context } from 'koa-router';

import { Book } from '../domains/Book';
import { IBookService } from '../services/book';

interface getBookDTO {
  id: number
}
interface createBookDTO {
  name: string;
}

interface IBookController {
  list(ctx: Context): Promise<void>;
  get(ctx: Context): Promise<void>;
  create(ctx: Context): Promise<void>;
}

export class BookController implements IBookController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly BookService: IBookService,
  ) {}

  list = async (ctx: Context): Promise<void> => {
    ctx.body = await this.BookService.find();
  }

  get = async (ctx: Context): Promise<void> => {
    const { params }: { params: getBookDTO } = ctx;

    ctx.body = await this.BookService.findByID(params.id);
  }

  create = async (ctx: Context): Promise<void> => {
    const { body }: { body?: createBookDTO } = ctx.request;
    if (!body) throw new Error();

    const book = new Book({ name: body.name });

    ctx.body = await this.BookService.create(book);
  }
}

export default BookController;
