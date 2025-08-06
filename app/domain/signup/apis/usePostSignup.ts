import client from '@/common/utils/client';
import type { SignupFormType } from '@/lib/types/signup';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postSignup = async (data: Omit<SignupFormType, 'authNumber'>) => {
  const response = await client.post('/auth/register', data);
  return response.data;
};

export const usePostSignup = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['auth-check'] });
    },
  });
};
