const request = require('supertest')

describe('Route responses', function () {
  let server

  beforeEach(function() { server = require('./server')() })
  afterEach(function(done) { server.close(done) })

  it('responds to /', function() {
    request(server)
      .get('/')
      .expect(200)
  })

  it('sends a 404 on other routes', function() {
    request(server)
      .get('/foo/bar')
      .expect(404)
  })
})
