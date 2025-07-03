const perfilService = require('../services/perfilNutricionalService');

class CadastroController {
  async completarCadastro(req, res) {
    const { usuario_id, peso, altura, idade, foto, objetivo, restricoes } = req.body;

    try {
      // 1. Salvar ou atualizar perfil nutricional
      const perfilAtualizado = await perfilService.salvarOuAtualizar(usuario_id, {
        peso, altura, idade, foto, objetivo, restricoes
      });    

      res.json(perfilAtualizado);
    } catch (error) {
      console.error('Erro ao completar cadastro:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }

  async obterCadastro(req, res) {
    const { usuario_id } = req.params;

    try {
      // Busca dados básicos
      const usuario = await perfilService.buscarUsuarioBasico(usuario_id);
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }

      // Busca dados do perfil nutricional
      const perfil = await perfilService.buscarPorUsuario(usuario_id);

      res.json({
        ...usuario,
        perfil: perfil || {}
      });
    } catch (error) {
      console.error('Erro ao obter cadastro:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  }
}

module.exports = new CadastroController();
