import { useToast } from '@/common/hooks/useToast';
import client from '@/common/utils/client';
import useHandleMutationError from '@/common/utils/handleMutationError';
import type { SportType, UniversityType } from '@/lib/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

interface PostPlayerBetRequest {
  sport: SportType;
  university: UniversityType;
  playerId: string | null;
}
const postPlayerBet = async (request: PostPlayerBetRequest) => {
  const response = await client.post('/bet-answer/player', request);
  return response.data;
};
export const usePostPlayerBet = () => {
  const queryClient = useQueryClient();
  const { onError } = useHandleMutationError();

  return useMutation({
    mutationFn: postPlayerBet,
    onSuccess: (_, request) => {
      queryClient.setQueryData(['my-bet', request.sport], request);
      queryClient.invalidateQueries({ queryKey: ['bet-answer-ratio', request.sport] });
    },
    onError: (error) => onError(error),
  });
};
