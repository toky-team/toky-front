import { useEffect, useState } from 'react';

import * as s from './style.css';

import { chatSocket } from '@/common/utils/socket';
import type { ChatMessageInterface } from '@/lib/types/live';
import { useGetChatMessages } from '@/domain/live/apis/useGetChatMessages';
import useIntersect from '@/common/hooks/useIntersect';
import Chat from '@/domain/live/components/Chat';
import type { SportType } from '@/lib/types';

interface Props {
  sport: SportType;
}
const ChatList = ({ sport }: Props) => {
  const [newMessages, setNewMessages] = useState<ChatMessageInterface[]>([]);
  const { data: oldMessages, fetchNextPage, hasNextPage, isFetching } = useGetChatMessages({ sport, limit: 20 });
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
    chatSocket.emit('join_room', { sport });

    return () => {
      chatSocket.off('receive_message', onReceiveMessage);
      chatSocket.off('connect_error', onConnectError);
    };
  }, [sport]);

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  return (
    <div className={s.Container}>
      {messages.map((message) => (
        <Chat key={message.id} nickname={message.username} message={message.content} />
      ))}
    </div>
  );
};
export default ChatList;
