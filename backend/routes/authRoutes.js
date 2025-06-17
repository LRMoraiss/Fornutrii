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
  }
}

module.exports = new AuthRoutes().router;
