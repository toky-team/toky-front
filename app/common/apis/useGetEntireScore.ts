import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getEntireScore = async () => {
  const response = await client.get<{
    KUScore: number;
    YUScore: number;
  }>('/score/entire');
  return response.data;
};

export const useGetEntireScore = () => {
  return useQuery({
    queryKey: ['entire-score'],
    queryFn: () => getEntireScore(),
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
