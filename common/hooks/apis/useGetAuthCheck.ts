import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getAuthCheck = async () => {
  try {
    const response = await client.get('/auth/check');
    if (response.status === 200) return true;
  } catch {
    return false;
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
