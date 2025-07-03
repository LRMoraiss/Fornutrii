const perfilRepo = require('../repositories/perfilNutricionalRepository');

class PerfilNutricionalService {
  async salvarOuAtualizar(usuario_id, dados) {
    const existente = await perfilRepo.findByUsuarioId(usuario_id);

    if (existente) {
      return await perfilRepo.update(usuario_id, dados);
    } else {
      return await perfilRepo.create({ usuario_id, ...dados });
    }
  }

  async buscarPorUsuario(usuario_id) {
    return await perfilRepo.findByUsuarioId(usuario_id);
  }
}

module.exports = new PerfilNutricionalService();
