import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

const postShare = async () => {
  const response = await client.post('/bet-answer/share');
  return response.data;
};

export const usePostShare = () => {
  return useMutation({
    mutationFn: postShare,
  });
};
