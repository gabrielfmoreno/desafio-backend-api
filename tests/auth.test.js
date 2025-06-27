const request = require('supertest');
const app = require('../app');

describe('Testes de autenticação', () => {
  it('Deve realizar login e retornar um token JWT', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        usuario: 'testuser',
        senha: '123456'
      });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('Deve falhar ao logar com senha errada', async () => {
    const res = await request(app)
      .post('/login')
      .send({
        usuario: 'testuser',
        senha: 'senha_errada'
      });

    expect(res.statusCode).toBe(401);
  });
});
