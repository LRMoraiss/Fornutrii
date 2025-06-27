const repository = require('../repositories/usuarioRepository');
const db = require('../db/db');
const bcrypt = require('bcrypt');

class UsuarioService {
  static async getAll() {
    return await repository.findAll();
  }

  static async getById(id) {
    return await repository.findById(id);
  }

  static async getByEmail(email) {
    return await repository.findByEmail(email);
  }

  static async create(dados) {
    dados.senha = await bcrypt.hash(dados.senha, 10);
    return await repository.create(dados);
  }

  static async update(id, dados) {
    if (dados.senha) {
      dados.senha = await bcrypt.hash(dados.senha, 10);
    }
    return await repository.update(id, dados);
  }

  static async remove(id) {
    return await repository.remove(id);
  }
}

module.exports = UsuarioService;