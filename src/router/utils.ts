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
  if (method && handler) router[method](`${prefixPath}${path}`, handler);

  if (children?.length) {
    children.forEach((nestRoute) => registerRoute({
      router,
      route: nestRoute,
      prefixPath: `${prefixPath}${path}`,
    }));
  }
};
