import 'dotenv/config'
import app from "../src/app.js"
import cors from '@fastify/cors'
import { database } from "./database/index.js"

import app from './app.js'; 

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
async function server() {
    app.register(cors, {
        origin: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    })

    app.listen({
        host: '0.0.0.0',
        port: process.env.PORT
    }).then(() => {
        console.log('HTTP Server is running on PORT:' + process.env.PORT)
    })

    // const query = await database('marcas').select();
    // console.log('Query :', query)
    // database.raw('SELECT * FROM marcas WHERE id = 1;')
    //     .then(result => console.log(result[0]))
}

server();