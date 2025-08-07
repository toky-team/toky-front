import * as s from './style.css';

import { useGetChatMessages } from '@/domain/live/apis/useGetChatMessages';
import useIntersect from '@/common/hooks/useIntersect';
import Chat from '@/domain/live/components/Chat';
import type { SportType } from '@/lib/types';
import { useSportSocketSocket } from '@/domain/live/hooks/useSportSocket';
import { useCallback } from 'react';

interface Props {
  sport: SportType;
}
const ChatList = ({ sport }: Props) => {
  const newMessages = useSportSocketSocket(sport);
  const {
    data: oldMessages,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetChatMessages({ sport, limit: 20 });
  const messages = [...(oldMessages?.reverse() ?? []), ...newMessages];

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const Loader = useCallback(() => {
    if (!hasNextPage) return null;

    if (isFetchingNextPage)
      return (
        <div className={s.LoadingWrapper}>
          <div className={s.LoadingSpinner} />
        </div>
      );

    return <div className={s.Trigger} ref={fetchNextRef} />;
  }, [hasNextPage, isFetchingNextPage, fetchNextRef]);

  return (
    <div className={s.Container}>
      <Loader />
      {messages.map((message) => (
        <Chat key={message.id} nickname={message.username} message={message.content} />
      ))}
    </div>
  );
};
export default ChatList;
