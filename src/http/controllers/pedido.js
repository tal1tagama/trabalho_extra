import Pedido from '../models/pedido.js';

export async function listarPedidos(req, res) {
  try {
    const pedidos = await Pedido.find().populate('produtos');
    res.json(pedidos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function criarPedido(req, res) {
  try {
    const pedido = new Pedido(req.body);
    await pedido.save();
    res.status(201).json(pedido);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
