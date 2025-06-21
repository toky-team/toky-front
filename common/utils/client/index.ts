import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

const responseErrorHandler = async (error: AxiosError) => {
  const { config, response } = error;

  if (response?.status === 401 && config) {
    try {
      await client.post('/auth/refresh');
      return client(config);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

client.interceptors.response.use((response) => response, responseErrorHandler);
export default client;
