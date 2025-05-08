const API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_BASE_URL,
    ENDPOINTS: {
      POSTS: '/posts',
    },
    DEFAULT_HEADERS: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }
  };
  
  export default API_CONFIG;