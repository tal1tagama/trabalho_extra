import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/bd_rpv', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado!');
  } catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
  }
};

export default connectMongo;
