import axios from 'axios';
import store from '@/store';

const axiosInstance = axios.create({
  baseURL: 'https://speedionode.onrender.com',
  // Produção -->  baseURL: 'https://speedionode.onrender.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const vuexData = localStorage.getItem('vuex');
    if (vuexData) {
      const token = JSON.parse(vuexData).user.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

window.addEventListener('storage', (event) => {
  if (event.key === 'vuex') {
    const vuexData = JSON.parse(event.newValue);
    const user = vuexData?.user || null;
    store.commit('SET_USER', user); 
  }
});

export default axiosInstance;