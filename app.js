import pkg from 'express';
const express = pkg.default;

import connectMongo from './config/mongoConfig.js';
import marca from './routes/marca.js';
import produto from './routes/produto.js';
import pedido from './routes/pedido.js';

const app = express();

app.use(express.json());

connectMongo()
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro conexão MongoDB:', err));

app.use('/api', marca);
app.use('/api', produto);
app.use('/api', pedido);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
