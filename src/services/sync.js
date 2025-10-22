const Marca = require('../models/marca');
const Produto = require('../models/produto');
const Pedido = require('../models/pedido');
const createMySQLConnection = require('../config/mysqlconfig');

async function syncMarcas(mysqlConn) {
  const marcas = await Marca.find();
  for (const marca of marcas) {
    await mysqlConn.execute(
      `INSERT INTO marcas (id, nome, descricao) VALUES (?, ?, ?) 
       ON DUPLICATE KEY UPDATE nome = VALUES(nome), descricao = VALUES(descricao)`,
      [marca._id.toString(), marca.nome, marca.descricao]
    );
  }
}

async function syncProdutos(mysqlConn) {
  const produtos = await Produto.find();
  for (const produto of produtos) {
    await mysqlConn.execute(
      `INSERT INTO produtos (id, nome, preco, marcaId) VALUES (?, ?, ?, ?) 
       ON DUPLICATE KEY UPDATE nome = VALUES(nome), preco = VALUES(preco), marcaId = VALUES(marcaId)`,
      [produto._id.toString(), produto.nome, produto.preco, produto.marcaId.toString()]
    );
  }
}

async function syncPedidos(mysqlConn) {
  const pedidos = await Pedido.find();
  for (const pedido of pedidos) {
    await mysqlConn.execute(
      `INSERT INTO pedidos (id, data, status) VALUES (?, ?, ?) 
       ON DUPLICATE KEY UPDATE data = VALUES(data), status = VALUES(status)`,
      [pedido._id.toString(), pedido.data, pedido.status]
    );

  }
}

async function syncAll() {
  const mysqlConn = await createMySQLConnection();

  await syncMarcas(mysqlConn);
  await syncProdutos(mysqlConn);
  await syncPedidos(mysqlConn);

  await mysqlConn.end();
}

module.exports = { syncAll };
