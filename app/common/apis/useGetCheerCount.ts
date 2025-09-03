import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';

interface CheerCountResponse {
  KUCheer: number;
  YUCheer: number;
}

const getCheerCount = async () => {
  const response = await client.get<CheerCountResponse>('/cheer/count');
  return response.data;
};

export const useGetCheerCount = () => {
  return useQuery({
    queryKey: ['cheer-count'],
    queryFn: () => getCheerCount(),
  });
};
