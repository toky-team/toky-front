import { useEffect, useState } from 'react';

import type { ChatMessageInterface } from '@/lib/types/live';
import { chatSocket } from '@/common/utils/socket';
import type { SportType } from '@/lib/types';

const useSportSocket = (sport: SportType) => {
  const [newMessages, setNewMessages] = useState<ChatMessageInterface[]>([]);

  useEffect(() => {
    const onReceiveMessage = ({ message }: { message: ChatMessageInterface }) => {
      setNewMessages((prev) => [...prev, message]);
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

  return newMessages;
};

export default useSportSocket;
