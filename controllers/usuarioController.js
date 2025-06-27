const usuarioService = require('../services/usuarioService');
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
  const { usuario, senha } = req.body;
  const hash = await bcrypt.hash(senha, 10);
  const novoUsuario = await usuarioService.createUsuario({ usuario, senha: hash });
  res.status(201).json(novoUsuario);
};

exports.getAll = async (req, res) => {
  const usuarios = await usuarioService.getAllUsuarios();
  res.json(usuarios);
};
