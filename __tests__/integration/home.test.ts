import { Server } from 'http';
import request from 'supertest';

import { createServer } from '../../src/server';

describe('GET /', () => {
  let app: Server;

  beforeAll(() => {
    app = createServer();
  });

  afterAll(() => {
    app.close();
  });

  it('should return 200 OK', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);

    expect(res.text).toBe('Hello World');
  });
});
