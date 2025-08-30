import client from '@/common/utils/client';
import type { SportType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

type GetLiveUrlResponse = {
  id: string;
  sport: SportType;
  broadcastName: string;
  url: string;
}[];
const getLiveUrl = async () => {
  const response = await client.get<GetLiveUrlResponse>('/live-url');
  return response.data;
};
export const useGetLiveUrl = () => {
  return useQuery({
    queryKey: ['live-url'],
    queryFn: getLiveUrl,
    staleTime: 0,
  });
};
