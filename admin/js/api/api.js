import { getToken } from '../utils/getToken.js';

export const api = axios.create({
  baseURL: 'http://localhost:8080/v1/',
  Headers: {
    'x-access-token': getToken(),
  },
});
