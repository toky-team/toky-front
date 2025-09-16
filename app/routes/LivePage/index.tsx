import { useEffect, useMemo, useState } from 'react';

import * as s from './style.css';

import TopBar from '@/common/components/TopBar';
import BottomSheet from '@/common/components/BottomSheet';
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
import { FALLBACK_LIVE_URL } from '@/lib/constants';
import RecordView from '@/domain/live/components/RecordView';

const LivePage = ({ params }: { params: { sports: SportsPathType } }) => {
  const [page, setPage] = useState<'chat' | 'analysis'>('chat');
  const sport = SportsPathMap[params.sports];
  const { openModal } = useGuideModal();
  const { data: rawUrls } = useGetLiveUrl();
  const liveUrls = rawUrls?.filter((url) => url.sport === sport);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const liveUrl = liveUrls?.[selectedIndex]?.url || FALLBACK_LIVE_URL;
  const selectedLabel = `${liveUrls?.[selectedIndex]?.broadcastName || ''} ${sport} 라이브`;

  const items = useMemo(
    () =>
      (liveUrls || []).map((u, index) => ({
        id: u.id,
        label: u.broadcastName,
        selected: u.url === liveUrl,
        onSelect: () => {
          setSelectedIndex(index);
          setSheetOpen(false);
        },
      })),
    [liveUrls, liveUrl],
  );

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
        {/* 방송사 선택 바텀시트 트리거 */}
        <button className={s.LiveSrc} onClick={() => setSheetOpen(true)} type="button">
          <p>{selectedLabel}</p>
          <span>
            <Icon.DropdownArrow />
          </span>
        </button>
      </TopBar>
      {/* TODO: URI 제대로 끼우기 */}
      <Player src={liveUrl} />
      <BottomSheet open={sheetOpen} onOpenChange={setSheetOpen} title="방송사" items={items} />
      <ScoreBoard sport={sport} />
      <LiveMenu page={page} setPage={setPage} />
      {page === 'chat' ? (
        <>
          <ChatList sport={sport} />
          <ChatInput sport={sport} handleSendMessage={handleSendMessage} />
        </>
      ) : (
        <RecordView sport={sport} />
      )}
    </>
  );
};
export default LivePage;
