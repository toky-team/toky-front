import { useQuery } from '@tanstack/react-query';
import client from '@/common/utils/client';

interface UserSummary {
  totalUsers: number;
  KUUsers: number;
  YUUsers: number;
  newUsers: {
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
};

const getUserSummary = async () => {
  const response = await client.get<UserSummary>('user/summary');
  return response.data;
};

export const useGetUserSummary = () => {
  return useQuery({
    queryKey: ['user-summary'],
    queryFn: getUserSummary,
  });
};