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

const getBetHitRankPagination = async (limit: number, cursor?: string): Promise<BetHitRankResponse> => {
  const response = await client.get<BetHitRankResponse>('/bet-hit/rank', {
    params: {
      limit,
      cursor,
    },
  });
  return response.data;
};

export const useBetHitRankPagination = (limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: ['bet-hit-rank-pagination', limit],
    queryFn: ({ pageParam }) => getBetHitRankPagination(limit, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
    initialPageParam: undefined as string | undefined,
  });
};

export type { BetHitRankItem, BetHitRankResponse };
