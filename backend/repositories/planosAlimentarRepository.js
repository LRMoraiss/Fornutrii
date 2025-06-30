const db = require('../db/db');

class PlanosAlimentarRepository {
  async create(plano) {
    const {
      nome, descricao, duracao, calorias, objetivo,
      proteinas_percent, carboidratos_percent, gorduras_percent, restricoes
    } = plano;

    const result = await db.query(
      `INSERT INTO plano_alimentar
      (usuario_id, nome, descricao, duracao, calorias, objetivo, proteinas_percent, carboidratos_percent, gorduras_percent, restricoes)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [
        plano.usuario_id,
        plano.nome,
        plano.descricao,
        plano.duracao,
        plano.calorias,
        plano.objetivo,
        plano.proteinas_percent,
        plano.carboidratos_percent,
        plano.gorduras_percent,
        plano.restricoes
      ]
    );

    return result.rows[0];
  }

  async findAll() {
    const result = await db.query('SELECT * FROM plano_alimentar');
    return result.rows;
  }
}

module.exports = new PlanosAlimentarRepository();
