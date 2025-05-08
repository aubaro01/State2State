import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('Erro de API:', error.response.status);
    }
    return Promise.reject(error);
  }
);

export default api;