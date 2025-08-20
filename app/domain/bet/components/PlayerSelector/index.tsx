import { useState } from 'react';
import * as s from './style.css';
import type { SportType, UniversityType } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import PlayerItem from '@/domain/bet/components/PlayerSelector/PlayerItem';
import { useGetPlayer } from '@/common/apis/useGetPlayer';
import type { PlayerInterface } from '@/lib/types/player';
import SelectedPlayerView from '@/domain/bet/components/PlayerSelector/SelectedPlayerView';

interface Props {
  sport: SportType;
}
const PlayerSelector = ({ sport }: Props) => {
  const [status, setStatus] = useState<UniversityType | null>(null);
  const { data } = useGetPlayer(sport, status || '고려대학교');
  const [kuSelectedPlayer, setKUSelectedPlayer] = useState<PlayerInterface | null>(null);
  const [yuSelectedPlayer, setYuSelectedPlayer] = useState<PlayerInterface | null>(null);

  return (
    <div className={s.Wrapper}>
      <div className={s.Container}>
        <SelectedPlayerView
          university="고려대학교"
          status={status}
          selectedPlayer={kuSelectedPlayer}
          onClick={() => setStatus('고려대학교')}
        />
        <SelectedPlayerView
          university="연세대학교"
          status={status}
          selectedPlayer={yuSelectedPlayer}
          onClick={() => setStatus('연세대학교')}
        />
      </div>
      {status !== null &&
        (() => {
          const selectedPlayer = status === '고려대학교' ? kuSelectedPlayer : yuSelectedPlayer;
          const setSelectedPlayer = status === '고려대학교' ? setKUSelectedPlayer : setYuSelectedPlayer;
          return (
            <div className={s.PlayerContainer}>
              <div className={s.PlayerContainerHeader}>
                <h2>{status} 선수</h2>
                {/* TODO: 선수 페이지 보내기 */}
                <button className={s.MoreButton}>
                  자세히보기 <ChevronRight size={18} />
                </button>
              </div>
              <div className={s.PlayerList}>
                {/* TODO: 캐러셀 적용 */}
                <PlayerItem isSelected={selectedPlayer === null} onClick={() => setSelectedPlayer(null)} />
                {data?.map((player) => (
                  <PlayerItem
                    key={player.id}
                    player={player}
                    isSelected={selectedPlayer?.id === player.id}
                    onClick={() => setSelectedPlayer(player)}
                  />
                ))}
              </div>
            </div>
          );
        })()}
    </div>
  );
};
export default PlayerSelector;
