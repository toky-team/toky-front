import client from '@/common/utils/client';
import type { SportType, UniversityType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export interface BetAnswer {
  sport: SportType;
  predict: {
    matchResult?: UniversityType | '무승부';
    score?: {
      kuScore: number;
      yuScore: number;
    };
  } | null;
  kuPlayer: {
    playerId: string;
  } | null;
  yuPlayer: {
    playerId: string;
  } | null;
}
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
