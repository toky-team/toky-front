import client from '@/common/utils/client';
import { useMutation } from '@tanstack/react-query';

const postSendSMS = async (phoneNumber: string) => {
  const response = await client.post('/auth/sms/send', {
    phoneNumber,
  });
  return response.data;
};

export const usePostSendSMS = () => {
  return useMutation({
    mutationFn: postSendSMS,
  });
};
