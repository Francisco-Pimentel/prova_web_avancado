import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pelo URL base da sua API
});

// Adicionar cabeçalhos padrão, se necessário (ex.: token de autenticação)
api.interceptors.request.use(async (config) => {
  // Exemplo: Pegando o token do armazenamento
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
