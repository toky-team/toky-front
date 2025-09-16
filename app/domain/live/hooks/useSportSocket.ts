import { useEffect, useState } from 'react';

import type { ChatMessageInterface } from '@/lib/types/live';
import { chatSocket } from '@/common/utils/socket';
import type { SportType } from '@/lib/types';
import { useToast } from '@/common/hooks/useToast';

const useSportSocket = (sport: SportType) => {
  const { openToast } = useToast();
  const [newMessages, setNewMessages] = useState<ChatMessageInterface[]>([]);

  useEffect(() => {
    const onReceiveMessage = ({ message }: { message: ChatMessageInterface }) => {
      setNewMessages((prev) => [...prev, message]);
    };

    const onConnectError = () => {
      openToast({ message: '라이브 채팅 연결에 실패했어요' });
    };

    const onFiltered = ({
      filteredMessage,
    }: {
      filteredMessage: {
        id: string;
        sport: SportType;
      };
    }) => {
      if (sport !== filteredMessage.sport) return;
      setNewMessages((prev) => prev.filter((message) => message.id !== filteredMessage.id));
    };

    chatSocket.on('receive_message', onReceiveMessage);
    chatSocket.on('message_filtered', onFiltered);
    chatSocket.on('connect_error', onConnectError);
    chatSocket.emit('join_room', { sport });

    return () => {
      chatSocket.off('receive_message', onReceiveMessage);
      chatSocket.off('message_filtered', onFiltered);
      chatSocket.off('connect_error', onConnectError);
      chatSocket.emit('leave_room', { sport });
    };
  }, [sport, openToast]);

  return newMessages;
};

export default useSportSocket;
