const request = require('supertest');
const app = require('../app');

let token = '';

beforeAll(async () => {
  const res = await request(app)
    .post('/login')
    .send({ usuario: 'testuser', senha: '123456' });

  token = res.body.token;
});

describe('Testes de /clientes', () => {
  it('Deve bloquear acesso sem token', async () => {
    const res = await request(app).get('/clientes');
    expect(res.statusCode).toBe(401); // ou 403 dependendo do middleware
  });

  it('Deve permitir acesso autenticado e retornar lista de clientes', async () => {
    const res = await request(app)
      .get('/clientes')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Deve criar um cliente com dados válidos', async () => {
    const res = await request(app)
      .post('/clientes')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: 'Ana',
        sobrenome: 'Souza',
        email: 'ana@souza.com',
        idade: 25
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
