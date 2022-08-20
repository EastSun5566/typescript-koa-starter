import { IMiddleware } from 'koa-router';

import { HomeService } from '../services';

export class HomeController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly homeService: InstanceType<typeof HomeService>,
  ) {}

  get: IMiddleware = (ctx): void => {
    ctx.body = this.homeService.greet();
  }
}

export default HomeController;
