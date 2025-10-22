const express = require('express');
const router = express.Router();
const produto = require('../controllers/produto');

router.post('/produtos', produto.createProduto);
router.get('/produtos', produto.getProdutos);

module.exports = router;
