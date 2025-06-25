const db = require('../db/db');
const Usuario = require('../models/usuarioModel');

class UsuarioRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM usuario');
    return result.rows.map(row => new Usuario(row));
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM usuario WHERE id = $1', [id]);
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }

  async findByEmail(email) {
    const result = await db.query('SELECT * FROM usuario WHERE email = $1', [email]);
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }

  async create({ id, nome, email, senha, papel, cadastro_completo = false }) {
    const result = await db.query(
      'INSERT INTO usuario (id, nome, email, senha, papel, cadastro_completo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [id, nome, email, senha, papel, cadastro_completo]
    );
    return new Usuario(result.rows[0]);
  }

  async update(id, { nome, email, senha, papel, cadastro_completo }) {
    const result = await db.query(
      'UPDATE usuario SET nome=$1, email=$2, senha=$3, papel=$4, cadastro_completo=$5 WHERE id=$6 RETURNING *',
      [nome, email, senha, papel, cadastro_completo, id]
    );
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }

  async updateCadastroCompleto(id) {
    const result = await db.query(
      'UPDATE usuario SET cadastro_completo = true WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }

  async remove(id) {
    const result = await db.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }
}

module.exports = new UsuarioRepository();
