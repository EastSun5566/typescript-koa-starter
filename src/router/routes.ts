import { HomeController } from '../controllers/home';
import { HomeService } from '../services/home';

interface Route {
  path: string;
  method: 'get' | 'post' | 'put' | 'link' | 'unlink' | 'delete' | 'del' | 'head' | 'options' | 'patch' | 'all';
  controller: any;
}

export const routes: Route[] = [
  {
    path: '/',
    method: 'get',
    controller: new HomeController({ homeService: new HomeService() }),
  },
];

export default routes;
