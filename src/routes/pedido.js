import express from 'express';
import { listarPedidos } from '../http/controllers/pedido.js';

const router = express.Router();

router.get('/pedidos', listarPedidos);

export default router;
