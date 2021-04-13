import Router, { IMiddleware as Middleware } from 'koa-router';

type HTTPMethod = 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';

export interface Route {
  path: string;
  method?: HTTPMethod;
  handler?: Middleware;
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
