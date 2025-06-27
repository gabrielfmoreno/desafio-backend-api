const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.create);
router.get('/', usuarioController.getAll);

module.exports = router;
