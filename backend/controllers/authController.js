const UsuarioService = require('../services/usuarioService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class AuthController {
  async login(req, res) {
    const { email, senha } = req.body;
    console.log('Requisição recebida com:', { email, senha });

    try {
      const usuario = await UsuarioService.getByEmail(email);
      console.log('Usuário encontrado:', usuario);

      if (!usuario || !usuario.senha) {
        return res.status(400).json({ error: 'Usuário ou senha inválidos' });
      }

      const senhaValida = await bcrypt.compare(senha, usuario.senha);

      if (!senhaValida) {
        return res.status(400).json({ error: 'Senha incorreta' });
      }

      const token = jwt.sign(
        { id: usuario.id, email: usuario.email, papel: usuario.papel },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.status(200).json({
        token,
        user: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          papel: usuario.papel,
        },
      });
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ error: 'Erro interno no login' });
    }
  }

  async register(req, res) {
    const { nome, email, senha, papel } = req.body;

    try {
      const existente = await UsuarioService.getByEmail(email);
      if (existente) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      }

      const novoUsuario = await UsuarioService.create({ nome, email, senha, papel });

      res.status(201).json({
        message: 'Usuário registrado com sucesso',
        user: {
          id: novoUsuario.id,
          nome: novoUsuario.nome,
          email: novoUsuario.email,
          papel: novoUsuario.papel,
        },
      });
    } catch (error) {
      console.error('Erro no registro:', error);
      res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
  }
}

module.exports = new AuthController();
