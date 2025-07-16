import TopBar from '@/common/components/TopBar';

import * as s from './style.css';
import Player from '@/domain/live/components/Player';
import Icon from '@/lib/assets/icons';
import { chatSocket } from '@/common/utils/socket';
import ChatList from '@/domain/live/components/ChatList';

const LivePage = () => {
  const handleSendMessage = (message: string) => {
    chatSocket.emit('send_message', {
      message,
      sport: '축구',
    });
  };

  return (
    <>
      <TopBar>
        {/* TODO: 드롭다운 방송사 선택 메뉴 */}
        <div className={s.LiveSrc}>
          <p>KUBS 축구 라이브</p>
          <button>
            <Icon.DropdownArrow />
          </button>
        </div>
      </TopBar>
      <Player src="https://youtu.be/3Txsz8eq5KY?t=603" />
      <button onClick={() => handleSendMessage('안녕')}>전송</button>
      <ChatList />
    </>
  );
};
export default LivePage;
