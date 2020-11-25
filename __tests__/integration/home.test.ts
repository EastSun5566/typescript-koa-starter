import { Server } from 'http';
import request from 'supertest';

import { createServer } from '../../src/server';

describe('GET /', () => {
  let server: Server;

  beforeAll(() => {
    server = createServer();
  });

  afterAll(() => {
    server.close();
  });

  it('should return 200 OK', async () => {
    const res = await request(server)
      .get('/')
      .expect(200);

    expect(res.text).toBe('Hello World');
  });
});
