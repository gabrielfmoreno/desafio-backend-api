const jwt = require('jsonwebtoken');

const SECRET_KEY = 'sua_chave_secreta_aqui'; // coloque uma chave secreta segura!

exports.login = (req, res) => {
  const { usuario, senha } = req.body;

  // Exemplo simples: usuário fixo para testes
  if (usuario === 'testuser' && senha === '123456') {
    const token = jwt.sign({ usuario }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: 'Usuário ou senha inválidos' });
  }
};
