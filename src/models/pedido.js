const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
  produtos: [
    {
      produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
      quantidade: { type: Number, required: true, default: 1 },
    },
  ],
  data: { type: Date, default: Date.now },
  status: { type: String, default: 'pendente' },
});

module.exports = mongoose.model('Pedido', PedidoSchema);
