const express = require('express');
const router = express.Router();
const PlanosAlimentarController = require('../controllers/planosAlimentarController');

/**
 * @swagger
 * tags:
 *   name: PlanosAlimentar
 *   description: Gerenciamento dos planos alimentares
 */

/**
 * @swagger
 * /api/planos-alimentar:
 *   get:
 *     summary: Lista todos os planos alimentares
 *     tags: [PlanosAlimentar]
 *     responses:
 *       200:
 *         description: Lista de planos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', PlanosAlimentarController.getAll);

/**
 * @swagger
 * /api/planos-alimentar:
 *   post:
 *     summary: Cria um novo plano alimentar
 *     tags: [PlanosAlimentar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *               duracao:
 *                 type: integer
 *               calorias:
 *                 type: integer
 *               objetivo:
 *                 type: string
 *               proteinas_percent:
 *                 type: integer
 *               carboidratos_percent:
 *                 type: integer
 *               gorduras_percent:
 *                 type: integer
 *               restricoes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Plano criado com sucesso
 *       500:
 *         description: Erro ao criar o plano
 */
router.post('/', PlanosAlimentarController.create);

module.exports = router;
