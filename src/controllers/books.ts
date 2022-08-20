import { IMiddleware } from 'koa-router';

import { BookService } from '../services';

interface GetBookDTO {
  id?: number
}

interface CreateBookDTO {
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
    private readonly bookService: InstanceType<typeof BookService>,
  ) {}

  list: IMiddleware = async (ctx): Promise<void> => {
    ctx.body = await this.bookService.find();
  }

  get: IMiddleware = async (ctx): Promise<void> => {
    const { params }: { params: GetBookDTO } = ctx;
    if (!params.id) throw new Error();

    ctx.body = await this.bookService.findByID(params.id);
  }

  create: IMiddleware = async (ctx): Promise<void> => {
    const { body }: { body?: CreateBookDTO } = ctx.request;
    if (!body) throw new Error();

    ctx.body = await this.bookService.create(body);
  }
}

export default BookController;
