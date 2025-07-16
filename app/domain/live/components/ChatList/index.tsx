import { useEffect, useState } from 'react';

import { chatSocket } from '@/common/utils/socket';
import type { ChatMessageInterface } from '@/lib/types/live';
import { useGetChatMessages } from '@/domain/live/apis/useGetChatMessages';
import useIntersect from '@/common/hooks/useIntersect';

const ChatList = () => {
  const [newMessages, setNewMessages] = useState<ChatMessageInterface[]>([]);
  const {
    data: oldMessages,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetChatMessages({
    sport: '축구',
    limit: 10,
  });
  const messages = [...newMessages, ...(oldMessages ?? [])];

  useEffect(() => {
    const onReceiveMessage = ({ message }: { message: ChatMessageInterface }) => {
      setNewMessages((prev) => [message, ...prev]);
    };

    const onConnectError = (error: { message: string }) => {
      console.log(error.message);
    };

    chatSocket.on('receive_message', onReceiveMessage);
    chatSocket.on('connect_error', onConnectError);
    chatSocket.emit('join_room', { sport: '축구' });

    return () => {
      chatSocket.off('receive_message', onReceiveMessage);
      chatSocket.off('connect_error', onConnectError);
    };
  }, []);

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <p>{message.username}</p>
          <p>{message.content}</p>
        </div>
      ))}
    </div>
  );
};
export default ChatList;
