const express = require('express');
const router = express.Router();
const marca = require('../controllers/marca');

router.post('/marcas', marca.createMarca);
router.get('/marcas', marca.getMarcas);

module.exports = router;
