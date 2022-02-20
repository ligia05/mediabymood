const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const validacoes = require('../middlewares/ValidadorFormCadastro')

router.get('/cadastro', usuarioController.cadastro);
router.post('/cadastro', validacoes, usuarioController.store);
router.get('/login', usuarioController.showlogin);
router.post('/login', usuarioController.login);
router.get('/escolha_estado', usuarioController.estadoDeHumor);
router.get('/indicacao', usuarioController.indicacao)

module.exports = router;