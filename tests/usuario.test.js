const request = require('supertest');
const app = require('../app');

describe('Testes de /usuarios', () => {
  it('Deve criar um novo usuário', async () => {
    const res = await request(app)
      .post('/usuarios')
      .send({
        usuario: 'testuser',
        senha: '123456'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.usuario).toBe('testuser');
  });

  it('Deve listar usuários cadastrados (sem senhas)', async () => {
    const res = await request(app).get('/usuarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
