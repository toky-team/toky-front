import { useQuery } from '@tanstack/react-query';
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

const getActivityRank = async (limit: number, cursor?: string): Promise<ActivityRankResponse> => {
  const response = await client.get<ActivityRankResponse>('/activity/rank', {
    params: {
      limit,
      cursor,
    },
  });
  return response.data;
};

export const useGetActivityRank = (limit: number, cursor?: string) => {
  return useQuery({
    queryKey: ['activity-rank', cursor, limit],
    queryFn: () => getActivityRank(limit, cursor),
  });
};

export type { ActivityRankItem, ActivityRankResponse };
