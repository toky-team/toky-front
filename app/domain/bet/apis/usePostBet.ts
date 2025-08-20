import client from '@/common/utils/client';
import type { SportType, UniversityType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export interface BetAnswer {
  sport: SportType;
  predict: {
    matchResult?: UniversityType | '무승부';
    score?: {
      kuScore: number;
      yuScore: number;
    };
  };
  player: {
    kuPlayerId: string | null;
    yuPlayerId: string | null;
  };
}
const postBet = async (request: BetAnswer) => {
  const response = await client.post('/bet-answer', request);
  return response.data;
};

export const usePostBet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postBet,
    onSuccess: (_, request) => {
      queryClient.setQueryData(['my-bet', request.sport], request);
      queryClient.invalidateQueries({ queryKey: ['bet-answer-ratio', request.sport] });
    },
  });
};
