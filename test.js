import request from 'supertest';
import server from './app.js';

describe('GET /', () => {
  it('should return Hello Donald Tru/mp 🥳', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello Donald Trump 🥳', done);
  });
});

after((done) => {
  server.close(done);
});
