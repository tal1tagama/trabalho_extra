const Marca = require('../models/Marca');

exports.createMarca = async (req, res) => {
  try {
    const marca = new Marca(req.body);
    await marca.save();
    res.status(201).json(marca);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMarcas = async (req, res) => {
  try {
    const marcas = await Marca.find();
    res.json(marcas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
