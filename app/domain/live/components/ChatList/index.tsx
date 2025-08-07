import * as s from './style.css';

import { useGetChatMessages } from '@/domain/live/apis/useGetChatMessages';
import useIntersect from '@/common/hooks/useIntersect';
import Chat from '@/domain/live/components/Chat';
import type { SportType } from '@/lib/types';
import { useSportSocketSocket } from '@/domain/live/hooks/useSportSocket';
import { useCallback, useEffect, useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevHeight = useRef(0);

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      prevHeight.current = scrollRef?.current?.scrollHeight || 0;
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (prevHeight.current > 0 && scrollRef.current && !isFetching) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight - prevHeight.current;
    } else if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isFetching]);

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
    <div className={s.Container} ref={scrollRef}>
      <Loader />
      {messages.map((message) => (
        <Chat key={message.id} nickname={message.username} message={message.content} />
      ))}
    </div>
  );
};
export default ChatList;
