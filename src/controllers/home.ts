import { IMiddleware } from 'koa-router';

import { HomeService } from '../services';

interface IHomeController {
  index(...param: Parameters<IMiddleware>): ReturnType<IMiddleware>;
}

export class HomeController implements IHomeController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly homeService: InstanceType<typeof HomeService>,
  ) {}

  index(...[ctx]: Parameters<IMiddleware>): void {
    ctx.body = this.homeService.greet();
  }
}

export default HomeController;
