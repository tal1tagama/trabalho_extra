import express from 'express';
import connectMongo from './config/mongoConfig.js';
import marcaRoutes from './routes/marcaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';

const app = express();

app.use(express.json());

connectMongo()
  .then(() => console.log('MongoDB conectado!'))
  .catch((err) => console.error('Erro conexão MongoDB:', err));

app.use('/api', marcaRoutes);
app.use('/api', produtoRoutes);
app.use('/api', pedidoRoutes);

export default app; 
