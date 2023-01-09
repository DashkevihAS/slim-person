import axios from 'axios';
import { API_URL } from './assets/const';

const instance = axios.create({
  baseURL: API_URL,
});

// // мидлвор  для проверки авторизации при любом запросе
// instance.interceptors.request.use((config) => {
//   config.headers.Authorization = window.localStorage.getItem('token');
//   return config;
// });

export default instance;
