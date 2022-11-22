import { IMiddleware } from 'koa-router';

import { BookService } from '../services';

interface GetBookDTO {
  id?: number
}

interface CreateBookDTO {
  name: string;
}

interface IBookController {
  index(...param: Parameters<IMiddleware>): ReturnType<IMiddleware>;
  show(...param: Parameters<IMiddleware>): ReturnType<IMiddleware>;
  store(...param: Parameters<IMiddleware>): ReturnType<IMiddleware>;
}

export class BookController implements IBookController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly bookService: InstanceType<typeof BookService>,
  ) {}

  async index(...[ctx]: Parameters<IMiddleware>): Promise<void> {
    ctx.body = await this.bookService.find();
  }

  async show(...[ctx]: Parameters<IMiddleware>): Promise<void> {
    const { params }: { params: GetBookDTO } = ctx;
    if (!params.id) throw new Error();

    ctx.body = await this.bookService.findByID(params.id);
  }

  async store(...[ctx]: Parameters<IMiddleware>): Promise<void> {
    const { body }: { body?: CreateBookDTO } = ctx.request;
    if (!body) throw new Error();

    ctx.body = await this.bookService.create(body);
  }
}

export default BookController;
