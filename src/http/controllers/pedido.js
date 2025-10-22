const Pedido = require('../models/Pedido');

exports.createPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.status(201).json(pedido);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('produtos.produtoId');
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
