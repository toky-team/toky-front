import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface PostShareResponse {
  isFirstShared: boolean;
}
const postShare = async () => {
  const response = await client.post<PostShareResponse>('/bet-answer/share');
  return response.data;
};

export const usePostShare = () => {
  return useMutation({
    mutationFn: postShare,
  });
};
