import { Server } from 'http';
import request from 'supertest';

import { createApp } from '../../src/app';

describe('GET /', () => {
  let app: Server;

  beforeEach(() => {
    app = createApp();
  });

  afterEach(() => {
    app.close();
  });

  it('should return 200 OK', async () => {
    await request(app)
      .get('/')
      .expect(200);
  });
});
