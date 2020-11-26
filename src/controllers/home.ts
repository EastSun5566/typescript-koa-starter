import { IMiddleware } from 'koa-router';

import { IHomeService } from '../services/home';

interface IHomeController {
  get: IMiddleware;
}

export class HomeController implements IHomeController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly homeService: IHomeService,
  ) {}

  get: IMiddleware = (ctx): void => {
    ctx.body = this.homeService.greet();
  }
}

export default HomeController;
