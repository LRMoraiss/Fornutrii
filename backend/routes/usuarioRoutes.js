const express = require('express');
const UsuarioController = require('../controllers/usuarioController');
const ValidateUsuario = require('../middleware/validateUsuario');

class UsuarioRoutes {
  constructor() {
    this.router = express.Router();
    this.registerRoutes();
  }

  registerRoutes() {
    /**
     * @swagger
     * /api/usuario:
     *   post:
     *     summary: Cria um novo usuário
     *     tags: [Usuários]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - nome
     *               - email
     *               - senha
     *               - papel
     *             properties:
     *               nome:
     *                 type: string
     *               email:
     *                 type: string
     *               senha:
     *                 type: string
     *               papel:
     *                 type: string
     *                 enum: [patient, nutritionist, trainer]
     *     responses:
     *       201:
     *         description: Usuário criado com sucesso
     *       400:
     *         description: Dados inválidos
     *       500:
     *         description: Erro no servidor
     */
    this.router.post(
      '/',
      ValidateUsuario.validateFields,
      UsuarioController.create
    );

    /**
     * @swagger
     * /api/usuario:
     *   get:
     *     security:
     *       - bearerAuth: []
     *     summary: Lista todos os usuários (apenas admin)
     *     tags: [Usuários]
     *     responses:
     *       200:
     *         description: Lista de usuários
     *       401:
     *         description: Não autorizado
     *       403:
     *         description: Acesso negado
     */
    this.router.get(
      '/',
      ValidateUsuario.authenticate,
      ValidateUsuario.authorize(['admin']),
      UsuarioController.getAll
    );

    /**
     * @swagger
     * /api/usuario/{id}:
     *   get:
     *     security:
     *       - bearerAuth: []
     *     summary: Obtém um usuário específico
     *     tags: [Usuários]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Dados do usuário
     *       404:
     *         description: Usuário não encontrado
     */
    this.router.get(
      '/:id',
      ValidateUsuario.authenticate,
      UsuarioController.getById
    );

    /**
     * @swagger
     * /api/usuario/{id}:
     *   put:
     *     security:
     *       - bearerAuth: []
     *     summary: Atualiza um usuário
     *     tags: [Usuários]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *               email:
     *                 type: string
     *               senha:
     *                 type: string
     *     responses:
     *       200:
     *         description: Usuário atualizado
     *       404:
     *         description: Usuário não encontrado
     */
    this.router.put(
      '/:id',
      ValidateUsuario.authenticate,
      UsuarioController.update
    );

    /**
     * @swagger
     * /api/usuario/{id}:
     *   delete:
     *     security:
     *       - bearerAuth: []
     *     summary: Remove um usuário (apenas admin)
     *     tags: [Usuários]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Usuário removido
     *       403:
     *         description: Acesso negado
     *       404:
     *         description: Usuário não encontrado
     */
    this.router.delete(
      '/:id',
      ValidateUsuario.authenticate,
      ValidateUsuario.authorize(['admin']),
      UsuarioController.remove
    );

    /**
     * @swagger
     * /api/usuario/{id}/complete-cadastro:
     *   patch:
     *     security:
     *       - bearerAuth: []
     *     summary: Completa o cadastro do usuário
     *     tags: [Usuários]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - peso
     *               - altura
     *               - idade
     *             properties:
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
     *         description: Cadastro completo atualizado
     *       400:
     *         description: Dados inválidos
     */
    this.router.patch(
      '/:id/complete-cadastro',
      ValidateUsuario.authenticate,
      UsuarioController.completeRegistration
    );
  }

  getRouter() {
    return this.router;
  }
}


module.exports = new UsuarioRoutes().getRouter();