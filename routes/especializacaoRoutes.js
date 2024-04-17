const express = require('express');
const router = express.Router();
const EspecializacaoController = require('../controllers/EspecializacaoController');

router.get('/', EspecializacaoController.listarEspecializacoes);
router.post('/', EspecializacaoController.criarEspecializacao);

module.exports = router;