import { useInfiniteQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';

interface ActivityRankItem {
  userId: string;
  username: string;
  university: string;
  hitRate: number;
  rank: number;
}

interface ActivityRankResponse {
  items: ActivityRankItem[];
  nextCursor?: string;
  hasNext: boolean;
}

const getActivityRankPagination = async (limit: number, cursor?: string): Promise<ActivityRankResponse> => {
  const response = await client.get<ActivityRankResponse>('/activity/rank', {
    params: {
      limit,
      cursor,
    },
  });
  return response.data;
};

export const useActivityRankPagination = (limit: number = 10) => {
  return useInfiniteQuery({
    queryKey: ['activity-rank-pagination', limit],
    queryFn: ({ pageParam }) => getActivityRankPagination(limit, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
    initialPageParam: undefined as string | undefined,
  });
};

export type { ActivityRankItem, ActivityRankResponse };
