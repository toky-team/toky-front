import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { ActivityRankItem } from './useGetActivityRank';

const getMyActivityRank = async () => {
  const response = await client.get<ActivityRankItem>('/activity/rank/me');
  return response.data;
};

export const useGetMyActivityRank = () => {
  return useQuery({
    queryKey: ['activity-rank', 'me'],
    queryFn: () => getMyActivityRank(),
  });
};
