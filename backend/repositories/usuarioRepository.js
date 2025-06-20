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

  async create({ nome, email, senha, papel }) {
    const result = await db.query(
      'INSERT INTO usuario (nome, email, senha, papel) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, email, senha, papel]
    );
    return new Usuario(result.rows[0]);
  }

  async update(id, { nome, email, senha, papel }) {
    const result = await db.query(
      'UPDATE usuario SET nome=$1, email=$2, senha=$3, papel=$4 WHERE id=$5 RETURNING *',
      [nome, email, senha, papel, id]
    );
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }

  async remove(id) {
    const result = await db.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] ? new Usuario(result.rows[0]) : null;
  }
}

module.exports = new UsuarioRepository();
