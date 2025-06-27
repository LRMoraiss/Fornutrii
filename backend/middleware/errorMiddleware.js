class ErrorHandler {
  static handle(err, req, res, next) {
    console.error(err.stack);
    
    // Tratamento específico para erros JWT
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Token inválido' });
    }
    
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expirado' });
    }

    // Erro genérico
    res.status(500).json({ 
      error: 'Erro interno do servidor',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
}

module.exports = ErrorHandler;