import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { BetHitRankItem } from './useBetHitRankPagination';

const getMyBetHitRank = async () => {
  const response = await client.get<BetHitRankItem>('/bet-hit/rank/me');
  return response.data;
};

export const useGetMyBetHitRank = () => {
  return useQuery({
    queryKey: ['bet-hit-rank', 'me'],
    queryFn: () => getMyBetHitRank(),
  });
};
