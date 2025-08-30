import client from '@/common/utils/client';
import { useInfiniteQuery } from '@tanstack/react-query';

interface GetTicketHistoryResponse {
  items: { id: string; reason: string; changeAmount: number; resultAmount: number; createdAt: string }[];
  nextCursor: string | undefined;
  hasNext: boolean;
}
const getTicketHistory = async (cursor?: string) => {
  const response = await client.get<GetTicketHistoryResponse>('/ticket-history', {
    params: {
      cursor,
      limit: 20,
    },
  });
  return response.data;
};
export const useGetTicketHistory = (cursor?: string) => {
  return useInfiniteQuery({
    queryKey: ['ticket-history'],
    queryFn: ({ pageParam }) => getTicketHistory(pageParam),
    initialPageParam: cursor,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    select: (data) => data.pages.flatMap((page) => page.items),
  });
};
