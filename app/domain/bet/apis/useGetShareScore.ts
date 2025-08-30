import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

interface GetShareScoreResponse {
  kuScore: number;
  yuScore: number;
}

const getShareScore = async () => {
  const response = await client.get<GetShareScoreResponse>('/bet-answer/summary');
  return response.data;
};

export const useGetShareScore = () => {
  return useQuery({
    queryKey: ['share-score'],
    queryFn: getShareScore,
    staleTime: 0,
  });
};
