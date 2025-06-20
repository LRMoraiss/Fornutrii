const db = require('./db');

const createTable = async () => {
  const checkTableQuery = `SELECT to_regclass('public.usuario');`;
  try {
    const result = await db.query(checkTableQuery);
    if (result.rows[0].to_regclass === null) {
      const createQuery = `
        CREATE TABLE usuario (
          id SERIAL PRIMARY KEY,
          nome VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          senha VARCHAR(255) NOT NULL,
          papel VARCHAR(100) NOT NULL
        );`;
      await db.query(createQuery);
      console.log('Tabela "usuario" criada com sucesso!');
    } else {
      console.log('Tabela "usuario" já existe.');
    }
  } catch (err) {
    console.error('Erro ao criar tabela "usuario":', err.message);
  }
};

module.exports = createTable;