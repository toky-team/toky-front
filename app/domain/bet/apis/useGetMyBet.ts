import client from '@/common/utils/client';
import type { BetAnswer } from '@/domain/bet/apis/usePostBet';
import type { SportType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

const getMyBet = async (sport: SportType) => {
  const response = await client.get<BetAnswer>('/bet-answer', {
    params: {
      sport,
    },
  });
  return response.data;
};
export const useGetMyBet = (sport: SportType) => {
  return useQuery({
    queryKey: ['my-bet', sport],
    queryFn: () => getMyBet(sport),
  });
};
