import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface PostGameCompleteRequest {
  stage: 1 | 2;
  win: boolean;
}
const postGameComplete = async (request: PostGameCompleteRequest) => {
  const response = await client.post('/attendance/game/complete', request);
  return response.data;
};

export const usePostGameComplete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postGameComplete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-attendance'] });
      queryClient.invalidateQueries({ queryKey: ['attendance-all'] });
    },
  });
};
