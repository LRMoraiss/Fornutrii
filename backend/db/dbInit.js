const db = require('./db');

async function dbInit() {
  try {
    // Tabela usuario com CPF como id
    await db.query(`
      CREATE TABLE IF NOT EXISTS usuario (
        id CHAR(11) PRIMARY KEY,
        nome TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        papel TEXT NOT NULL
      );
    `);

    // Tabela perfil_nutricional usando CPF como chave estrangeira
    await db.query(`
      CREATE TABLE IF NOT EXISTS perfil_nutricional (
        id SERIAL PRIMARY KEY,
        usuario_id CHAR(11) UNIQUE NOT NULL REFERENCES usuario(id) ON DELETE CASCADE,
        peso REAL,
        altura REAL,
        idade INTEGER,
        foto TEXT,
        objetivo TEXT,
        restricoes TEXT
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS plano_alimentar (
        id SERIAL PRIMARY KEY,
        usuario_id TEXT REFERENCES usuario(id),
        nome TEXT NOT NULL,
        descricao TEXT NOT NULL,
        duracao INTEGER NOT NULL,
        calorias INTEGER NOT NULL,
        objetivo TEXT,
        proteinas_percent NUMERIC,
        carboidratos_percent NUMERIC,
        gorduras_percent NUMERIC,
        restricoes TEXT
      );
    `);

    console.log('Tabelas criadas/verificadas com sucesso');
  } catch (err) {
    console.error('Erro ao criar tabelas:', err);
    throw err;
  }
}

module.exports = dbInit;
