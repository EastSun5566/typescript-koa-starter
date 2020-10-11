import { Context } from 'koa';

import { HomeService } from '../services/home';

export class HomeController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public homeService: HomeService,
  ) {}

  get = (ctx: Context): void => {
    ctx.body = this.homeService.get();
  }
}

export default HomeController;
