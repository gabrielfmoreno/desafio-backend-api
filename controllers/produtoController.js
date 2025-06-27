const produtoService = require('../services/produtoService');
const { validarProduto } = require('../middlewares/validacaoProduto');

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await produtoService.listarProdutos();
    res.json(produtos);
  } catch {
    res.status(500).json({ error: 'Erro ao listar produtos.' });
  }
};

exports.obterProdutoPorId = async (req, res) => {
  try {
    const produto = await produtoService.obterProdutoPorId(req.params.id);
    if (!produto) return res.status(404).json({ error: 'Produto não encontrado.' });
    res.json(produto);
  } catch {
    res.status(500).json({ error: 'Erro ao obter produto.' });
  }
};

exports.criarProduto = async (req, res) => {
  try {
    const erros = validarProduto(req.body);
    if (erros.length > 0) return res.status(400).json({ erros });

    const produtoCriado = await produtoService.criarProduto(req.body);
    res.status(201).json(produtoCriado);
  } catch {
    res.status(500).json({ error: 'Erro ao criar produto.' });
  }
};

exports.atualizarProduto = async (req, res) => {
  try {
    const erros = validarProduto(req.body);
    if (erros.length > 0) return res.status(400).json({ erros });

    const atualizado = await produtoService.atualizarProduto(req.params.id, req.body);
    if (!atualizado) return res.status(404).json({ error: 'Produto não encontrado.' });
    res.json(atualizado);
  } catch {
    res.status(500).json({ error: 'Erro ao atualizar produto.' });
  }
};

exports.deletarProduto = async (req, res) => {
  try {
    const deletado = await produtoService.deletarProduto(req.params.id);
    if (!deletado) return res.status(404).json({ error: 'Produto não encontrado.' });
    res.status(204).send();
  } catch {
    res.status(500).json({ error: 'Erro ao deletar produto.' });
  }
};
exports.criarProduto = async (req, res) => {
  try {
    const erros = validarProduto(req.body);
    if (erros.length > 0) return res.status(400).json({ erros });

    const novoProduto = await produtoService.criarProduto(req.body);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto.' });
  }
};

