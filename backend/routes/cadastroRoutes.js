const express = require('express');
const controller = require('../controllers/cadastroController');
const authMiddleware = require('../middleware/validateUsuario');

const router = express.Router();

router.post('/completar', authMiddleware, controller.completarCadastro);
router.get('/:usuario_id', authMiddleware, controller.obterCadastro);

/**
 * @swagger
 * /api/cadastro/completar:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Completa o cadastro do usuário
 *     tags: [Cadastro]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - usuario_id
 *               - peso
 *               - altura
 *               - idade
 *             properties:
 *               usuario_id:
 *                 type: integer
 *               peso:
 *                 type: number
 *               altura:
 *                 type: number
 *               idade:
 *                 type: integer
 *               foto:
 *                 type: string
 *               objetivo:
 *                 type: string
 *               restricoes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cadastro completo realizado com sucesso
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro no servidor
 */
router.post('/completar', authMiddleware, controller.completarCadastro);

/**
 * @swagger
 * /api/cadastro/{usuario_id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Obtém os dados completos do usuário
 *     tags: [Cadastro]
 *     parameters:
 *       - in: path
 *         name: usuario_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do usuário
 *       404:
 *         description: Usuário não encontrado
 *       500:
 *         description: Erro no servidor
 */
router.get('/:usuario_id', authMiddleware, controller.obterCadastro);

module.exports = router;