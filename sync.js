const { syncAll } = require('./services/syncService');

syncAll()
  .then(() => {
    console.log('Sincronização concluída!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Erro na sincronização:', err);
    process.exit(1);
  });
