// routes/auth.js (Backend)
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Usuário não encontrado' });

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).json({ error: 'Senha inválida' });

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  });
});

// Registrar
router.post('/register', async (req, res) => {
  // Validação dos dados...
  const hashedPass = await bcrypt.hash(req.body.password, 10);
  
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
    role: req.body.role // 'patient', 'nutritionist', 'trainer'
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;