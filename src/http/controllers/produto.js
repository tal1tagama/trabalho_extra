const Produto = require('../models/Produto');

exports.createProduto = async (req, res) => {
  try {
    const produto = new Produto(req.body);
    await produto.save();
    res.status(201).json(produto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find().populate('marcaId');
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
