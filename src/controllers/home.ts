import { Context } from 'koa';

import { HomeService } from '../services/home';

interface Options {
  homeService: HomeService
}

export class HomeController {
  service: { home: HomeService }

  constructor({ homeService }: Options) {
    this.service = { home: homeService };
  }

  // eslint-disable-next-line class-methods-use-this
  get(ctx: Context): void {
    ctx.body = this.service.home.get();
  }
}

export default HomeController;
