import { IMiddleware } from 'koa-router';

import { IBookService } from '../services';

interface GetBookDTO {
  id: number
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
    private readonly BookService: IBookService,
  ) {}

  list: IMiddleware = async (ctx): Promise<void> => {
    ctx.body = await this.BookService.find();
  }

  get: IMiddleware = async (ctx): Promise<void> => {
    const { params }: { params: GetBookDTO } = ctx;

    ctx.body = await this.BookService.findByID(params.id);
  }

  create: IMiddleware = async (ctx): Promise<void> => {
    const { body }: { body?: CreateBookDTO } = ctx.request;
    if (!body) throw new Error();

    ctx.body = await this.BookService.create(body);
  }
}

export default BookController;
