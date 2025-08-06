import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getCheckName = async (name: string) => {
  const response = await client.get<boolean>('/user/name-exists', {
    params: {
      name,
    },
  });
  return response.data;
};

export const useGetCheckName = (name: string) => {
  return useQuery({
    queryKey: ['checkName', name],
    queryFn: () => getCheckName(name),
    enabled: false,
  });
};
