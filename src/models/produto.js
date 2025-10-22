const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  marcaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Marca', required: true },
});

module.exports = mongoose.model('Produto', ProdutoSchema);
