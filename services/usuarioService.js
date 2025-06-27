const db = require('../configs/db');

const getAllUsuarios = async () => {
  const [rows] = await db.query('SELECT id, usuario FROM usuarios');
  return rows;
};

const createUsuario = async ({ usuario, senha }) => {
  const [result] = await db.query(
    'INSERT INTO usuarios (usuario, senha) VALUES (?, ?)',
    [usuario, senha]
  );
  return { id: result.insertId, usuario };
};

const getUsuarioByUsuario = async (usuario) => {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE usuario = ?', [usuario]);
  return rows[0];
};

const saveToken = async (id, token) => {
  await db.query('UPDATE usuarios SET token = ? WHERE id = ?', [token, id]);
};

module.exports = {
  getAllUsuarios,
  createUsuario,
  getUsuarioByUsuario,
  saveToken
};
