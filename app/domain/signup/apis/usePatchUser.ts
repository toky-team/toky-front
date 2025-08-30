import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const patchUser = async (name: string) => {
  const response = await client.patch('/user', {
    name,
  });
  return response.data;
};

export const usePatchUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-info'] });
    },
  });
};
