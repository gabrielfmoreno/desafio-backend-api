// middlewares/authMiddleware.js
function autenticarToken(req, res, next) {
  // sua lógica de autenticação aqui
  // ex:
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ error: 'Token não fornecido' });
  // valida token...
  next();
}

module.exports = autenticarToken; // exporta a função diretamente
