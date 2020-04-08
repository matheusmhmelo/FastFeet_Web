import axios from 'axios';

const api = axios.create({
  baseURL: 'http://134.122.112.63:3333',
});

export default api;
