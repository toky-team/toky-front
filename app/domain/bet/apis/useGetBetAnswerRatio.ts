import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';
import type { SportType } from '@/lib/types';

interface GetBetAnswerRatioResponse {
  고려대학교: number;
  연세대학교: number;
  무승부: number;
}
const getBetAnswerRatio = async (sport: SportType) => {
  const response = await client.get<GetBetAnswerRatioResponse>('/bet-answer/ratio', {
    params: {
      sport,
    },
  });
  return response.data;
};
export const useGetBetAnswerRatio = (sport: SportType) => {
  return useQuery({
    queryKey: ['bet-answer-ratio', sport],
    queryFn: () => getBetAnswerRatio(sport),
  });
};
