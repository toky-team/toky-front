import REFRESH_WHITELIST_PATHS from '@/lib/constants/refreshWhitelist';
import axios, { AxiosError } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// TODO: Pending Requests Queue 추가 필요
// 여러 요청이 동시에 발생할 경우 문제 발생 가능
const responseErrorHandler = async (error: AxiosError<{ message: string }>) => {
  const { config, response } = error;

  if (
    response?.status === 401 &&
    config &&
    !REFRESH_WHITELIST_PATHS.includes(config.url as string) &&
    response.data.message !== '사용자가 등록되지 않았습니다'
  ) {
    try {
      await client.post('/auth/refresh');
      return client(config);
    } catch {
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
};

client.interceptors.response.use((response) => response, responseErrorHandler);
export default client;
