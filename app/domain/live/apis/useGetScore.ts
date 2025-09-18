import client from '@/common/utils/client';
import type { SportType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

interface GetScoreResponse {
  sport: SportType;
  KUScore: number;
  YUScore: number;
  matchStatus: '시작 전' | '진행 중' | '종료';
}
const getScore = async (sport: SportType) => {
  const response = await client.get<GetScoreResponse>('/score', {
    params: {
      sport,
    },
  });
  return response.data;
};

export const useGetScore = (sport: SportType) => {
  return useQuery({
    queryKey: ['score', sport],
    queryFn: () => getScore(sport),
    // Avoid aggressive refetching to prevent UI flicker on mount/focus
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
};
