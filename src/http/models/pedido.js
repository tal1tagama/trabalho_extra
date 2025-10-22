import mongoose from 'mongoose';

const PedidoSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  produtos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Produto' }],
  total: { type: Number, required: true },
  data: { type: Date, default: Date.now }
});

const Pedido = mongoose.model('Pedido', PedidoSchema);

export default Pedido;
