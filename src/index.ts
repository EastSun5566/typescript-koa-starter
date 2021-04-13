import { createServer } from './server';

createServer({
  route: { prefix: '/api/v1' },
});
