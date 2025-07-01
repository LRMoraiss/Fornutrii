const planoRepo = require('../repositories/planosAlimentarRepository');

class PlanoAlimentarService {
  async create(dados) {
    return await planoRepo.create(dados);
  }

  async getAll() {
    return await planoRepo.findAll();
  }

  async getByUsuarioId(usuario_id) {
    return await planoRepo.findByUsuarioId(usuario_id);
  }

  async delete(id) {
    return await planoRepo.delete(id);
  }

  async update(id, dados) {
    return await planoRepo.update(id, dados);
  }
}

module.exports = new PlanoAlimentarService();
