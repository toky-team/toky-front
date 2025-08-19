import { useQuery } from '@tanstack/react-query';

import type { SportType } from '@/lib/types';
import client from '@/common/utils/client';

interface GetLikeResponse {
  sport: SportType;
  KULike: number;
  YULike: number;
}
const getLike = async (sport: SportType) => {
  const response = await client.get<GetLikeResponse>('/like', {
    params: {
      sport,
    },
  });
  return response.data;
};

export const useGetLike = (sport: SportType) => {
  return useQuery({
    queryKey: ['cheer-up', sport],
    queryFn: () => getLike(sport),
    staleTime: 0,
  });
};
