import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface KopasLoginRequest {
  id: string;
  password: string;
}

const postKopasLogin = async (request: KopasLoginRequest) => {
  const response = await client.post<{ isRegistered: boolean }>('/auth/login/kopas', request);
  return response.data;
};

export const usePostKopasLogin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: postKopasLogin,
    onSuccess: () => {
      // 로그인 성공시 인증 관련 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['auth-check'] });
      queryClient.invalidateQueries({ queryKey: ['user-info'] });
      queryClient.invalidateQueries({ queryKey: ['ticket-count'] });
    },
  });
};
