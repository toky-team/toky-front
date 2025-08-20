import client from '@/common/utils/client';
import type { UniversityType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export interface UserInfoInterface {
  id: string;
  name: string;
  phoneNumber: string;
  university: UniversityType;
  createdAt: string;
}
const getUserInfo = async () => {
  const response = await client.get<UserInfoInterface>('/user');
  return response.data;
};

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['user-info'],
    queryFn: getUserInfo,
  });
};
