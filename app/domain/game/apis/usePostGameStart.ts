import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postGameStart = async () => {
  const response = await client.post('/attendance/game/start');
  return response.data;
};
export const usePostGameStart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postGameStart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-attendance'] });
    },
  });
};
