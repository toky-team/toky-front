import client from '@/common/utils/client';
import type { GiftInterface } from '@/domain/ticket/apis/useGetGift';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postDraw = async (id: string, count?: number) => {
  // const response = await client.post(`/gift/${id}/draw`, { count: count ?? 1 });
  // return response.data;
  return;
};

export const usePostDraw = (giftId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postDraw(giftId, 1),
    onSuccess: () => {
      queryClient.setQueryData(['gift'], (old: GiftInterface[]) => {
        return old.map((gift) => {
          if (gift.id === giftId) {
            return { ...gift, drawCount: gift.drawCount + 1, drawCountByUser: gift.drawCountByUser + 1 };
          }
          return gift;
        });
      });
      queryClient.setQueryData(['ticket-count'], (old: number) => {
        return old - 1;
      });
    },
  });
};
