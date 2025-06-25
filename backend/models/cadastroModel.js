const db = require('../db/db');

const CadastroModel = {
  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS cadastro (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario_id INTEGER UNIQUE,
        peso REAL,
        altura REAL,
        idade INTEGER,
        foto TEXT,
        objetivo TEXT,
        restricoes TEXT,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
      )
    `;
    return db.run(sql);
  },

  insert({ usuario_id, peso, altura, idade, foto, objetivo, restricoes }) {
    const sql = `
      INSERT INTO cadastro (usuario_id, peso, altura, idade, foto, objetivo, restricoes)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    return db.run(sql, [usuario_id, peso, altura, idade, foto, objetivo, restricoes]);
  },

  findByUserId(usuario_id) {
    const sql = `SELECT * FROM cadastro WHERE usuario_id = ?`;
    return db.get(sql, [usuario_id]);
  },

  update(usuario_id, { peso, altura, idade, foto, objetivo, restricoes }) {
    const sql = `
      UPDATE cadastro SET
        peso = ?,
        altura = ?,
        idade = ?,
        foto = ?,
        objetivo = ?,
        restricoes = ?
      WHERE usuario_id = ?
    `;
    return db.run(sql, [peso, altura, idade, foto, objetivo, restricoes, usuario_id]);
  }
};

module.exports = CadastroModel;
