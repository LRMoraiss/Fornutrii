const service = require('../services/planoAlimentarService');

class PlanosAlimentarController {
  async create(req, res) {
    try {
      const novoPlano = await service.create(req.body);
      res.status(201).json(novoPlano);
    } catch (error) {
      console.error('Erro ao criar plano:', error);
      res.status(500).json({ error: 'Erro ao criar plano' });
    }
  }

  async getAll(req, res) {
    try {
      const planos = await service.getAll();
      res.status(200).json(planos);
    } catch (error) {
      console.error('Erro ao buscar planos:', error);
      res.status(500).json({ error: 'Erro ao buscar planos' });
    }
  }
}

module.exports = new PlanosAlimentarController();
