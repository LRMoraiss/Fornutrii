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

    if (!usuario) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    console.log('Senha correta?', senhaCorreta);

    if (!senhaCorreta) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    console.log('Token gerado:', token);

    res.status(200).json({
      token,
      user: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
        papel: usuario.papel
      }
    });
  } catch (error) {
    console.error('Erro no login:', error); // ← mostra no terminal o erro real
    res.status(500).json({ error: 'Erro interno no login' });
  }
}
}

module.exports = new AuthController();
