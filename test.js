import request from 'supertest';
import server from './app.js';

describe('GET /', () => {
  it('should return 'Hello Kubernetes 🥳', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello Kubernetes 🥳', done);
  });
});

after((done) => {
  server.close(done);
});
