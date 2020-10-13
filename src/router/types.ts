import { RouterContext as Context } from 'koa-router';

export interface Route {
  path: string;
  method: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  handler: (ctx: Context) => any;
}
