const express = require('express');
const router = express.Router();
const pedido = require('../controllers/pedido');

router.post('/pedidos', pedido.createPedido);
router.get('/pedidos', pedido.getPedidos);

module.exports = router;
