import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    preco: { type: Number, required: true },
    marcaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Marca' }
});

const Produto = mongoose.model('Produto', produtoSchema);

export default Produto;
