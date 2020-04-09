import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mmdev.tech',
});

export default api;
