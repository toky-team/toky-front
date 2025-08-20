import { useState } from 'react';
import * as s from './style.css';
import type { UniversityType } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import PlayerItem from '@/domain/bet/components/PlayerSelector/PlayerItem';

type StatusType = null | UniversityType;

const PlayerSelector = () => {
  const [status, setStatus] = useState<StatusType>(null);

  return (
    <div className={s.Wrapper}>
      <div className={s.Container}>
        <button
          className={s.SelectedPlayerView({ status: status === '고려대학교' ? 'selecting' : 'default' })}
          onClick={() => setStatus('고려대학교')}
        >
          <p className={s.UnivTitle}>고려대학교</p>
          선수보기
        </button>
        <button
          className={s.SelectedPlayerView({
            status: status === '연세대학교' ? 'selecting' : 'default',
          })}
          onClick={() => setStatus('연세대학교')}
        >
          <p className={s.UnivTitle}>연세대학교</p>
          선수보기
        </button>
      </div>
      {status !== null && (
        <div className={s.PlayerContainer}>
          <div className={s.PlayerContainerHeader}>
            <h2>{status} 선수</h2>
            <button className={s.MoreButton}>
              자세히보기 <ChevronRight size={18} />
            </button>
          </div>
          <div className={s.PlayerList}>
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
            <PlayerItem />
          </div>
        </div>
      )}
    </div>
  );
};
export default PlayerSelector;
