const mysql = require('mysql2/promise');

const createMySQLConnection = () => {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'suaSenha',
    database: 'seuBancoMySQL',
  });
};

module.exports = createMySQLConnection;
