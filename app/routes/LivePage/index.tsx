import { useEffect, useState } from 'react';

import * as s from './style.css';

import TopBar from '@/common/components/TopBar';
import Player from '@/domain/live/components/Player';
import Icon from '@/lib/assets/icons';
import { chatSocket } from '@/common/utils/socket';
import ChatList from '@/domain/live/components/ChatList';
import { SportsPathMap, type SportsPathType } from '@/lib/types';
import ScoreBoard from '@/domain/live/components/ScoreBoard';
import LiveMenu from '@/domain/live/components/LiveMenu';
import ChatInput from '@/domain/live/components/ChatInput';
import useGuideModal from '@/domain/live/hooks/useGuideModal';
import { useGetLiveUrl } from '@/domain/live/apis/useGetLiveUrl';

const LivePage = ({ params }: { params: { sports: SportsPathType } }) => {
  // TODO: 전력 분석 페이지 구현
  const [page, setPage] = useState<'chat' | 'analysis'>('chat');
  const sport = SportsPathMap[params.sports];
  const { openModal } = useGuideModal();
  const { data: rawUrls } = useGetLiveUrl();
  const liveUrls = rawUrls?.filter((url) => url.sport === sport);
  // TODO: 여러 라이브 주소 변경 가능하도록
  const liveUrl = liveUrls?.[0]?.url || 'https://youtu.be/3Txsz8eq5KY?t=603';

  useEffect(() => {
    openModal();
  }, [openModal]);

  const handleSendMessage = (message: string) => {
    chatSocket.emit('send_message', {
      message,
      sport,
    });
  };

  return (
    <>
      <TopBar>
        {/* TODO: 드롭다운 방송사 선택 메뉴 */}
        <div className={s.LiveSrc}>
          <p>KUBS {sport} 라이브</p>
          <button>
            <Icon.DropdownArrow />
          </button>
        </div>
      </TopBar>
      {/* TODO: URI 제대로 끼우기 */}
      <Player src={liveUrl} />
      <ScoreBoard sport={sport} />
      <LiveMenu page={page} setPage={setPage} />
      <ChatList sport={sport} />
      <ChatInput sport={sport} handleSendMessage={handleSendMessage} />
    </>
  );
};
export default LivePage;
