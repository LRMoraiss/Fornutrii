class ValidateUsuario {
  static validate(req, res, next) {
    const { id, nome, email, senha, papel } = req.body;

    if (!id || !nome || !email || !senha || !papel) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios, incluindo matrícula.' });
    }
    next();
  }
}

module.exports = ValidateUsuario;