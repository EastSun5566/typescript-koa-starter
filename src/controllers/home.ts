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

  async get(ctx: Context): Promise<void> {
    ctx.body = this.service.home.get();
  }
}

export default HomeController;
