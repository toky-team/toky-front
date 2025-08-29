import client from '@/common/utils/client';
import useHandleMutationError from '@/common/utils/handleMutationError';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postAttendanceShare = async () => {
  const response = await client.post('/attendance/share');
  return response.data;
};
export const usePostAttendanceShare = () => {
  const queryClient = useQueryClient();
  const { onError } = useHandleMutationError();

  return useMutation({
    mutationFn: postAttendanceShare,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['today-attendance'] });
    },
    onError,
  });
};
