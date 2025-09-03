import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '@/common/utils/client';

const postCheer = async (university: string) => {
  const response = await client.post('/cheer', {
    university: university,
  });
  return response.data;
};

export const usePostCheer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postCheer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cheer'] });
      queryClient.invalidateQueries({ queryKey: ['cheer-count'] });
    },
  });
};
