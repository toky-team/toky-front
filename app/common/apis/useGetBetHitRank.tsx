import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { BetHitRankItem, BetHitRankResponse } from './useBetHitRankPagination';

const getBetHitRank = async (limit: number, cursor?: string): Promise<BetHitRankResponse> => {
  const response = await client.get<BetHitRankResponse>('/bet-hit/rank', {
    params: {
      limit,
      cursor,
    },
  });
  return response.data;
};

export const useGetBetHitRank = (limit: number, cursor?: string) => {
  return useQuery({
    queryKey: ['bet-hit-rank', cursor, limit],
    queryFn: () => getBetHitRank(limit, cursor),
  });
};

export type { BetHitRankItem, BetHitRankResponse };
