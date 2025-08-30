import { useQuery } from '@tanstack/react-query';

import client from '@/common/utils/client';

interface BetHitRankInterface {
  userId: string;
  username: string;
  university: string;
  hitRate: number;
  rank: number;
}

const getBetHitRank = async (cursor: string, limit: number) => {
  const response = await client.get<BetHitRankInterface[]>('/bet-hit/rank', {
    params: {
      cursor,
      limit,
    },
  });
  return response.data;
};

export const useGetBetHitRank = (cursor: string, limit: number) => {
  return useQuery({
    queryKey: ['bet-hit-rank', cursor, limit],
    queryFn: () => getBetHitRank(cursor, limit),
  });
};
