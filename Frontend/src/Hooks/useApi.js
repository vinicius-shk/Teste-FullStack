import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: { 'X-Custom-Header': 'foobar' },
});

const useApi = () => ({
  crawl: async () => {
    const response = await api.get('/crawl');
    return response;
  },
  postSearch: async (body) => {
    const response = await api.post('/user', body);
    return response;
  } 
});

export default useApi;
