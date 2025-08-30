import { useQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';

interface BetHitRankInterface {
  userId: string;
  username: string;
  university: string;
  hitRate: number;
  rank: number;
}

const getMyBetHitRank = async () => {
  const response = await client.get<BetHitRankInterface>('/bet-hit/rank/me');
  return response.data;
};

export const useGetMyBetHitRank = () => {
  return useQuery({
    queryKey: ['bet-hit-rank', 'me'],
    queryFn: () => getMyBetHitRank(),
  });
};
