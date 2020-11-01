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
    const res = await request(app)
      .get('/')
      .expect(200);

    expect(res.text).toBe('Hello World');
  });
});
