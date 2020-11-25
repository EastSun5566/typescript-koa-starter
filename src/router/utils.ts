import Router, { IMiddleware } from 'koa-router';

export interface Route {
  path: string;
  method?: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  handler?: IMiddleware;
  children?: Route[];
}

export const registerRoute = ({
  router,
  route,
  prefixPath = '',
}: {
  router: Router,
  route: Route,
  prefixPath?: string,
}): void => {
  const {
    path,
    method,
    handler,
    children,
  } = route;

  if (children?.length) {
    if (method && handler) router[method](`${prefixPath}/${path}`, handler);

    children.forEach((nestRoute) => registerRoute({
      router,
      route: nestRoute,
      prefixPath: `${prefixPath}/${nestRoute.path}`,
    }));
    return;
  }

  if (!method) throw new Error('No method');
  if (!handler) throw new Error('No handler');

  router[method](`${prefixPath}/${path}`, handler);
};
