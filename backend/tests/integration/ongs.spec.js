const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONGS', () => {
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should be able to create a new ONG.', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'TESTE',
        email: 'josewso55@gmail.com',
        whatsapp: '5511974221186',
        city: 'Mogi das Cruzes',
        uf: 'SP',
      })

    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)    
  })
})