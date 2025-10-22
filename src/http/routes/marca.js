const express = require('express');
const router = express.Router();
const marcaController = require('../controllers/marcaController');

router.post('/marcas', marcaController.createMarca);
router.get('/marcas', marcaController.getMarcas);

module.exports = router;
