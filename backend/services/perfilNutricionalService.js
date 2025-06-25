const perfilRepo = require('../repositories/perfilNutricionalRepository');
const usuarioRepo = require('../repositories/usuarioRepository'); // para atualizar flag cadastro_completo

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

  async marcarCadastroCompleto(usuario_id) {
    // Atualiza flag cadastro_completo na tabela usuario
    const query = `
      UPDATE usuario SET cadastro_completo = TRUE WHERE id = $1 RETURNING *;
    `;
    const result = await usuarioRepo.query(query, [usuario_id]);
    return result.rows[0];
  }
}

module.exports = new PerfilNutricionalService();
