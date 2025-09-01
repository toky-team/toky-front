import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const getAuthCheck = async () => {
  try {
    const response = await client.get<{ isRegistered: boolean }>('/auth/check');
    if (response.status === 200) {
      if (response.data.isRegistered) {
        return {
          isLogin: true,
          isSignup: true,
        };
      }
      return {
        isLogin: true,
        isSignup: false,
      };
    }
  } catch (error) {
    if (isAxiosError(error) && error.status === 401) {
      return {
        isLogin: false,
        isSignup: false,
      };
    }
    return Promise.reject(error);
  }
  return {
    isLogin: false,
    isSignup: false,
  };
};

const useGetAuthCheck = () => {
  return useQuery({
    queryKey: ['auth-check'],
    queryFn: getAuthCheck,
  });
};

export default useGetAuthCheck;
