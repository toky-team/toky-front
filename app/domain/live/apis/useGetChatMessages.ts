import client from '@/common/utils/client';
import type { SportType } from '@/lib/types';
import type { ChatMessageInterface } from '@/lib/types/live';
import { useInfiniteQuery } from '@tanstack/react-query';

interface GetChatMessagesRequest {
  cursor?: string;
  limit: number;
  sport: SportType;
}

interface GetChatMessagesResponse {
  items: ChatMessageInterface[];
  nextCursor: string;
  hasNext: boolean;
}

const getChatMessages = async (params: GetChatMessagesRequest) => {
  const response = await client.get<GetChatMessagesResponse>('/chat/messages', { params });
  return response.data;
};

export const useGetChatMessages = (params: GetChatMessagesRequest) => {
  return useInfiniteQuery({
    queryKey: ['chat-messages', params],
    queryFn: ({ pageParam }) => getChatMessages({ ...params, cursor: pageParam }),
    initialPageParam: params.cursor,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    select: (data) => (data.pages ?? []).flatMap((page) => page.items),
  });
};
