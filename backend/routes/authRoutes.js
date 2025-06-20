const express = require('express');
const authController = require('../controllers/authController');

class AuthRoutes {
  constructor() {
    this.router = express.Router();
    this.routes(); // chama o método que define as rotas
  }

  routes() {
    /**
     * @swagger
     * /auth/login:
     *   post:
     *     summary: Login do usuário
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               email:
     *                 type: string
     *               senha:
     *                 type: string
     *     responses:
     *       200:
     *         description: Login bem-sucedido
     *       401:
     *         description: Credenciais inválidas
     */
    this.router.post('/login', authController.login);

    /**
     * @swagger
     * /auth/register:
     *   post:
     *     summary: Cadastro de novo usuário
     *     tags: [Auth]
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
     *               papel:
     *                 type: string
     *     responses:
     *       201:
     *         description: Usuário cadastrado com sucesso
     *       400:
     *         description: Erro no cadastro
     */
    this.router.post('/register', authController.register);
  }
}

module.exports = new AuthRoutes().router;
