import API_CONFIG from '../config/api';

const apiService = {
  async get(endpoint, requiresAuth = false) {
    const headers = new Headers(API_CONFIG.DEFAULT_HEADERS);
    
    if (requiresAuth) {
      const token = localStorage.getItem('authToken');
      headers.append('Authorization', `Bearer ${token}`);
    }

    const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
      method: 'GET',
      headers,
      credentials: 'same-origin'
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
};

export default apiService;