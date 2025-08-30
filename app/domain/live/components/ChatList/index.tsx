import { useCallback, useEffect, useRef } from 'react';

import * as s from './style.css';

import { useGetChatMessages } from '@/domain/live/apis/useGetChatMessages';
import useIntersect from '@/common/hooks/useIntersect';
import Chat from '@/domain/live/components/Chat';
import type { SportType } from '@/lib/types';
import useSportSocket from '@/domain/live/hooks/useSportSocket';
import Loader from '@/common/components/Loader';

// TODO: 스크롤 관련 고치기!!!!
// 1. 위로 올려서 페이지네이션 시에 스크롤 위치 저장했다가 유지하기
// 2. 처음 페이지 접속 시에 가장 하단으로 스크롤 고정
// 3. 내가 메세지 보낼 때 하단으로 스크롤 스무스하게 이동 시켜주기
interface Props {
  sport: SportType;
}
const ChatList = ({ sport }: Props) => {
  const newMessages = useSportSocket(sport);
  // const { data: userInfo } = useGetUserInfo();
  // const myId = userInfo?.id;
  const {
    data: oldMessages,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetChatMessages({ sport, limit: 20 });
  const messages = [[...(oldMessages ?? [])].reverse(), ...newMessages].flat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevHeight = useRef(0);
  const isMountedRef = useRef(false);

  const fetchNextRef = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      prevHeight.current = scrollRef?.current?.scrollHeight || 0;
      fetchNextPage();
    }
  });

  useEffect(() => {
    // 첫 방문시에 스크롤 위치 초기화
    if (scrollRef.current && !isFetching && !isMountedRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      isMountedRef.current = true;
    }
  }, [isFetching]);

  useEffect(() => {
    // 페이지네이션시에 스크롤 보정
    if (prevHeight.current > 0 && scrollRef.current && !isFetching) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight - prevHeight.current;
    }
  }, [isFetching]);

  useEffect(() => {
    if (newMessages.length > 0 && scrollRef.current) {
      // if (newMessages[newMessages.length - 1].userId === myId) {
      // 내가 새로운 메세지를 보낼 때
      // 또는 새로운 메세지가 올 때 바닥에 있는 경우
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
      // }
    }
  }, [newMessages]);

  return (
    <div className={s.Container} ref={scrollRef}>
      <Loader hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} fetchNextRef={fetchNextRef} />
      {messages.map((message) => (
        <Chat key={message.id} nickname={message.username} message={message.content} />
      ))}
    </div>
  );
};
export default ChatList;
