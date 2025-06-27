const request = require('supertest');
const app = require('../app');

describe('Testes de /produtos', () => {
  let idCriado;

  it('Deve listar produtos', async () => {
    const res = await request(app).get('/produtos');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Deve criar um produto válido', async () => {
    const res = await request(app).post('/produtos').send({
      nome: 'Notebook',
      descricao: 'Notebook gamer',
      preco: 4500.99,
      data_atualizado: '2024-06-01'
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    idCriado = res.body.id;
  });

  it('Deve obter produto pelo ID', async () => {
    const res = await request(app).get(`/produtos/${idCriado}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('nome', 'Notebook');
  });

  it('Deve atualizar produto', async () => {
    const res = await request(app).put(`/produtos/${idCriado}`).send({
      nome: 'Notebook atualizado',
      descricao: 'Descrição atualizada',
      preco: 4600,
      data_atualizado: '2024-06-15'
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe('Notebook atualizado');
  });

  it('Deve deletar produto', async () => {
    const res = await request(app).delete(`/produtos/${idCriado}`);
    expect(res.statusCode).toBe(204);
  });

  it('Deve retornar erro de validação com dados inválidos', async () => {
    const res = await request(app).post('/produtos').send({
      nome: 'A',
      descricao: '',
      preco: -5,
      data_atualizado: '1900-01-01'
    });

    expect(res.statusCode).toBe(400);
    expect(Array.isArray(res.body.erros)).toBe(true);
  });
});
