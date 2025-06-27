const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController'); 
const autenticarToken = require('../middlewares/authMiddleware');

router.use(autenticarToken);

router.get('/', clienteController.listarClientes);
router.post('/', clienteController.criarCliente);
router.get('/:id', clienteController.obterClientePorId);
router.put('/:id', clienteController.atualizarCliente);

module.exports = router;
