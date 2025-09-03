import client from '@/common/utils/client';
import type { UniversityType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

const getCheer = async () => {
  const response = await client.get<{
    userId: string;
    university: UniversityType;
  }>('/cheer');
  return response.data;
};

export const useGetCheer = () => {
  return useQuery({
    queryKey: ['cheer'],
    queryFn: () => getCheer(),
  });
};
