import client from '@/common/utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => client.post('/auth/logout'),
    onSuccess: () => {
      // 로그아웃 성공시 인증 관련 캐시 무효화
      queryClient.setQueryData(['auth-check'], { isLogin: false, isSignup: false });
      queryClient.invalidateQueries({ queryKey: ['user-info'] });
      queryClient.invalidateQueries({ queryKey: ['ticket-count'] });
    },
  });
};

export default useLogout;
