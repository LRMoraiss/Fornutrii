const db = require('../db/db');

class CadastroRepository {
  async create(dados) {
    const { usuario_id, peso, altura, idade, foto, objetivo, restricoes } = dados;
    const query = `
      INSERT INTO cadastro (usuario_id, peso, altura, idade, foto, objetivo, restricoes)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [usuario_id, peso, altura, idade, foto, objetivo, restricoes];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  async update(usuario_id, dados) {
    const { peso, altura, idade, foto, objetivo, restricoes } = dados;
    const query = `
      UPDATE cadastro
      SET peso = $1, altura = $2, idade = $3, foto = $4, objetivo = $5, restricoes = $6
      WHERE usuario_id = $7
      RETURNING *;
    `;
    const values = [peso, altura, idade, foto, objetivo, restricoes, usuario_id];
    const result = await db.query(query, values);
    return result.rows[0];
  }

  async findByUsuarioId(usuario_id) {
    const query = `SELECT * FROM cadastro WHERE usuario_id = $1;`;
    const result = await db.query(query, [usuario_id]);
    return result.rows[0];
  }
}

module.exports = new CadastroRepository();
