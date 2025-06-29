import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const getAuthCheck = async () => {
  try {
    const response = await client.get('/auth/check');
    if (response.status === 200) return true;
  } catch (error) {
    // TODO: 예외 없이 처리되는지 확인 필요
    if (isAxiosError(error) && error.status === 401) {
      return false;
    }
    return Promise.reject(error);
  }
  return false;
};

const useGetAuthCheck = () => {
  return useQuery({
    queryKey: ['auth-check'],
    queryFn: getAuthCheck,
  });
};

export default useGetAuthCheck;
