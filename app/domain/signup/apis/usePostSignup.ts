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
      // 회원가입 성공시 인증 관련 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['auth-check'] });
      queryClient.invalidateQueries({ queryKey: ['user-info'] });
      queryClient.invalidateQueries({ queryKey: ['ticket-count'] });
    },
  });
};
