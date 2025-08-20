import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

interface PostVerifySMSProps {
  phoneNumber: string;
  code: string;
}
const postVerifySMS = async (data: PostVerifySMSProps) => {
  const response = await client.post('/auth/sms/verify', data);
  return response.data;
};

export const usePostVerifySMS = () => {
  return useMutation({
    mutationFn: postVerifySMS,
  });
};
