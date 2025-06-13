const db = require('../db/db');
const Usuario = require('../models/usuarioModel');

class UsuarioRepository {
  // Método para buscar todos os profissionais
  async findAll() {
    const result = await db.query('SELECT * FROM usuario');
    return result.rows.map(row => new Usario(row));  // Retorna um array de objetos Usario
  }

  // Método para buscar um Usario por ID
  async findById(id) {
    const result = await db.query('SELECT * FROM usuario WHERE id = $1', [id]);
    return result.rows[0] ? new Usuario(result.rows[0]) : null;  // Retorna um objeto Usario ou null
  }

  // Método para criar um novo Usario
  async create({ id, nome, email, senha, papel }) {
    const result = await db.query(
      'INSERT INTO usuario (id, nome, email, senha, papel) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [id, nome, email, senha, papel]
    );
    return new Usuario(result.rows[0]);
  }

  // Método para atualizar um Usario
  async update({ id, nome, email, senha, papel }) {
    const result = await db.query(
      'UPDATE usuario SET id=$1, nome=$2, email=$3, senha=$4, papel=$5 RETURNING *',
      [id, nome, email, senha, papel]
    );
    return new Usuario(result.rows[0]);  // Retorna a instância atualizada de Usario
  }

  // Método para remover um Usario
  async remove(id) {
    const result = await db.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] ? new Usuario(result.rows[0]) : null;  // Retorna o Usario deletado ou null
  }
}

module.exports = new UsuarioRepository();  // Exporte uma instância única da classe