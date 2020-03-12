import { app } from '../../src/app'
import request from 'supertest'
import { SERVER_PORT } from '../../src/config'

describe('/', () => {
  let server:any

  beforeEach(() => {
    server = app.listen(SERVER_PORT, () => console.log('Listening on port 3000'))
  })

  afterEach(async () => {
    await server.close()
  })

  test('GET / should return placeholder page', async (done) => {
    const _ = await request(app)
      .get('/')
      .expect('Content-Type', /text\/html.*/)
      .expect(200)
    done()
  })
})
