const repository = require('../repositories/cadastroRepository');

class CadastroService {
  async salvarOuAtualizar(usuario_id, dados) {
    const existente = await repository.findByUsuarioId(usuario_id);
    if (existente) {
      return await repository.update(usuario_id, dados);
    } else {
      return await repository.create({ usuario_id, ...dados });
    }
  }

  async buscarPorUsuario(usuario_id) {
    return await repository.findByUsuarioId(usuario_id);
  }
}

module.exports = new CadastroService();
