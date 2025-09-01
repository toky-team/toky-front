import client from '@/common/utils/client';
import { useQuery } from '@tanstack/react-query';

export interface GiftInterface {
  id: string;
  name: string;
  alias: string;
  requiredTicket: number;
  imageUrl: string;
  drawCount: number;
  drawCountByUser: number;
}
type GetGiftResponse = GiftInterface[];

const getGift = async () => {
  const response = await client.get<GetGiftResponse>('/gift');
  return response.data;
};
export const useGetGift = () => {
  return useQuery({
    queryKey: ['gift'],
    queryFn: getGift,
  });
};
