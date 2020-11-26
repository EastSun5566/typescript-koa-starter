import { IMiddleware } from 'koa-router';

import { Book } from '../domains';
import { IBookService } from '../services';

interface getBookDTO {
  id: number
}
interface createBookDTO {
  name: string;
}

interface IBookController {
  list: IMiddleware;
  get: IMiddleware;
  create: IMiddleware;
}

export class BookController implements IBookController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly BookService: IBookService,
  ) {}

  list: IMiddleware = async (ctx): Promise<void> => {
    ctx.body = await this.BookService.find();
  }

  get: IMiddleware = async (ctx): Promise<void> => {
    const { params }: { params: getBookDTO } = ctx;

    ctx.body = await this.BookService.findByID(params.id);
  }

  create: IMiddleware = async (ctx): Promise<void> => {
    const { body }: { body?: createBookDTO } = ctx.request;
    if (!body) throw new Error();

    const book = new Book({ name: body.name });
    ctx.body = await this.BookService.create(book);
  }
}

export default BookController;
