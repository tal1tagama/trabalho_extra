import express from 'express';
import { listarProdutos } from '../http/controllers/produto.js'; 
const router = express.Router();

router.get('/produtos', listarProdutos);

export default router;