// services/auth.js
import api from './api';

export const login = async (email, senha) => {
  try {
    const response = await api.post('/auth/login', { email, senha });
    return response.data;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
};
