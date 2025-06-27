const jwt = require('jsonwebtoken');
const db = require('../db/db');
const cors = require('cors');
class ValidateUsuario {
  static validateFields(req, res, next) {
    const { nome, email, senha, papel } = req.body;
    
    if (!nome || !email || !senha || !papel) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    
    if (!['patient', 'nutritionist', 'trainer', 'admin'].includes(papel)) {
      return res.status(400).json({ error: 'Papel inválido' });
    }
    
    next();
  }

  static async authenticate(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: 'Token não fornecido' });
      }

      const [bearer, token] = authHeader.split(' ');
      if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ error: 'Formato de token inválido' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const usuario = await db.query('SELECT * FROM usuario WHERE id = $1', [decoded.id]);
      
      if (!usuario.rows[0]) {
        return res.status(401).json({ error: 'Usuário não encontrado' });
      }

      req.user = usuario.rows[0];
      next();
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expirado' });
      }
      return res.status(401).json({ error: 'Token inválido' });
    }
  }

  static authorize(roles = []) {
    return (req, res, next) => {
      if (!roles.includes(req.user.papel)) {
        return res.status(403).json({ 
          error: `Acesso restrito a: ${roles.join(', ')}` 
        });
      }
      next();
    };
  }
}

module.exports = ValidateUsuario;