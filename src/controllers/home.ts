import { Context } from 'koa';

import { IHomeService } from '../services/home';

interface IHomeController {
  get(ctx: Context): void;
}

export class HomeController implements IHomeController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly homeService: IHomeService,
  ) {}

  get = (ctx: Context): void => {
    ctx.body = this.homeService.greet();
  }
}

export default HomeController;
