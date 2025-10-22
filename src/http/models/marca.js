import mongoose from 'mongoose';

const MarcaSchema = new mongoose.Schema({
  nome: { type: String, required: true }
});

const Marca = mongoose.model('Marca', MarcaSchema);

export default Marca;

