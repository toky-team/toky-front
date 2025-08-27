import client from '@/common/utils/client';
import useHandleMutationError from '@/common/utils/handleMutationError';
import type { SportType, UniversityType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostMatchResultBetRequest {
  sport: SportType;
  predict: {
    matchResult?: UniversityType | '무승부';
    score?: {
      kuScore: number;
      yuScore: number;
    };
  };
}
const postMatchResultBet = async (request: PostMatchResultBetRequest) => {
  const response = await client.post('/bet-answer/match-result', request);
  return response.data;
};

export const usePostMatchResultBet = () => {
  const { onError } = useHandleMutationError();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postMatchResultBet,
    onSuccess: (_, request) => {
      queryClient.invalidateQueries({ queryKey: ['my-bet', request.sport] });
      queryClient.invalidateQueries({ queryKey: ['bet-answer-ratio', request.sport] });
    },
    onError: (error) => onError(error),
  });
};
