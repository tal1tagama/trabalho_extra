import express from 'express';
import { listarMarca } from '../http/controllers/marca.js';

const router = express.Router();

router.get('/marcas', listarMarca);

export default router;