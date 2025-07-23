import { useState } from 'react';

import * as s from './style.css';

import TopBar from '@/common/components/TopBar';
import Player from '@/domain/live/components/Player';
import Icon from '@/lib/assets/icons';
import { chatSocket } from '@/common/utils/socket';
import ChatList from '@/domain/live/components/ChatList';
import { SportsPathMap, type SportsPathType } from '@/lib/types';
import ScoreBoard from '@/domain/live/components/ScoreBoard';
import LiveMenu from '@/domain/live/components/LiveMenu';

const LivePage = ({ params }: { params: { sports: SportsPathType } }) => {
  // TODO: 전력 분석 페이지 구현
  const [page, setPage] = useState<'chat' | 'analysis'>('chat');
  const sport = SportsPathMap[params.sports];

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
      <Player src="https://youtu.be/3Txsz8eq5KY?t=603" />
      <ScoreBoard sport={sport} />
      <LiveMenu page={page} setPage={setPage} />
      <ChatList sport={sport} />
      <button onClick={() => handleSendMessage('안녕')}>전송</button>
    </>
  );
};
export default LivePage;
