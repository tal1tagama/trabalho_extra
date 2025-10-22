import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import marcaRoutes from './routes/marca.js';
import produtoRoutes from './routes/produto.js';
import pedidoRoutes from './routes/pedido.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors()); 

app.use('/api/marcas', marcaRoutes);
app.use('/api/produtos', produtoRoutes);
app.use('/api/pedidos', pedidoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
