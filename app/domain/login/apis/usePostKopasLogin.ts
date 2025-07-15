import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface KopasLoginRequest {
  id: string;
  password: string;
}

const postKopasLogin = async (request: KopasLoginRequest) => {
  const response = await client.post('/auth/login/kopas', request);
  return response.data;
};

export const usePostKopasLogin = () => {
  return useMutation({
    mutationFn: postKopasLogin,
  });
};
