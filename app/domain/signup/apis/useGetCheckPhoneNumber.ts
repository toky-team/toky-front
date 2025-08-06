import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

const getCheckPhoneNumber = async (phoneNumber: string) => {
  const response = await client.get<boolean>('/user/phone-number-exists', {
    params: {
      phoneNumber,
    },
  });
  return response.data;
};

export const useGetCheckPhoneNumber = (phoneNumber: string) => {
  return useQuery({
    queryKey: ['checkPhoneNumber', phoneNumber],
    queryFn: () => getCheckPhoneNumber(phoneNumber),
    enabled: false,
  });
};
