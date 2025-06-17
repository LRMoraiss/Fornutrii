const repository = require('../repositories/usuarioRepository');
const db = require('../db/db'); // importe seu client/db para query direta, se necessário

class UsuarioService {
  static async getAll() {
    const usuarios = await repository.findAll();
    return usuarios;  // Já é um array de objetos usuario
  }

  static async getById(id) {
    const usuario = await repository.findById(id);
    return usuario;  // Pode ser null ou um objeto usuario
  }

  static async create(dados) {
    const novousuario = await repository.create(dados);
    return novousuario;  // Retorna um objeto usuario
  }

  static async update(id, dados) {
    const usuarioAtualizado = await repository.update(id, dados);
    return usuarioAtualizado;  // Retorna um objeto usuario
  }

  static async remove(id) {
    const usuarioRemovido = await repository.remove(id);
    return usuarioRemovido;  // Retorna um objeto usuario ou null
  }

  // Agora método estático para ser chamado direto via UsuarioService.getByEmail()
  static async getByEmail(email) {
    // Se seu repository já tem um método para isso, use:
    if(repository.findByEmail) {
      return await repository.findByEmail(email);
    }

    // Se não, faça a query direta (importando db do seu client)
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const result = await db.query(query, [email]);
    return result.rows[0];
  }
}

module.exports = UsuarioService;
