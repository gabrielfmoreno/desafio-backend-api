// controllers/clienteController.js

exports.listarClientes = (req, res) => {
  res.json([{ id: 1, nome: 'Cliente Teste' }]);
};

exports.criarCliente = (req, res) => {
  const novoCliente = req.body;
  // Simula criação e retorna o cliente com id
  res.status(201).json({ id: 2, ...novoCliente });
};

exports.obterClientePorId = (req, res) => {
  const { id } = req.params;
  res.json({ id, nome: 'Cliente Teste' });
};

exports.atualizarCliente = (req, res) => {
  const { id } = req.params;
  const dadosAtualizados = req.body;
  res.json({ id, ...dadosAtualizados });
};
