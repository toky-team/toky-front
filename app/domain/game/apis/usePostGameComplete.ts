import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface PostGameCompleteRequest {
  stage: 1 | 2;
  win: boolean;
}
const postGameComplete = async (request: PostGameCompleteRequest) => {
  const response = await client.post('/attendance/game/complete', request);
  return response.data;
};

export const usePostGameComplete = () => {
  return useMutation({
    mutationFn: postGameComplete,
  });
};
