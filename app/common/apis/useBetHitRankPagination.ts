import { useInfiniteQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';

interface BetHitRankItem {
  userId: string;
  username: string;
  university: string;
  score: number;
  rank: number;
}

interface BetHitRankResponse {
  items: BetHitRankItem[];
  nextCursor?: string;
  hasNext: boolean;
}

const getBetHitRankPagination = async (cursor?: string, limit: number = 20): Promise<BetHitRankResponse> => {
  const response = await client.get<BetHitRankResponse>('/bet-hit/rank', {
    params: {
      cursor,
      limit,
    },
  });
  return response.data;
};

export const useBetHitRankPagination = (limit: number = 20) => {
  return useInfiniteQuery({
    queryKey: ['bet-hit-rank-pagination', limit],
    queryFn: ({ pageParam }) => getBetHitRankPagination(pageParam, limit),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
    initialPageParam: undefined as string | undefined,
  });
};

export type { BetHitRankItem, BetHitRankResponse };
