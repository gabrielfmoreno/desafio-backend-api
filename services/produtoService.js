const db = require('../configs/db');

exports.listarProdutos = async () => {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
};

exports.obterProdutoPorId = async (id) => {
  const [rows] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
  return rows[0];
};

exports.criarProduto = async (produto) => {
  const { nome, descricao, preco, data_atualizado } = produto;
  const [res] = await db.query(
    'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)',
    [nome, descricao, preco, data_atualizado]
  );
  return { id: res.insertId, ...produto };
};

exports.atualizarProduto = async (id, produto) => {
  const { nome, descricao, preco, data_atualizado } = produto;
  const [res] = await db.query(
    'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?',
    [nome, descricao, preco, data_atualizado, id]
  );
  return res.affectedRows > 0 ? { id, ...produto } : null;
};

exports.deletarProduto = async (id) => {
  const [res] = await db.query('DELETE FROM produtos WHERE id = ?', [id]);
  return res.affectedRows > 0;
};
