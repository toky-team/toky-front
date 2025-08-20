import { useEffect, useState } from 'react';
import * as s from './style.css';
import type { SportType, UniversityType } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import PlayerItem from '@/domain/bet/components/PlayerSelector/PlayerItem';
import { useGetPlayer } from '@/common/apis/useGetPlayer';
import type { PlayerInterface } from '@/lib/types/player';
import SelectedPlayerView from '@/domain/bet/components/PlayerSelector/SelectedPlayerView';

interface Props {
  sport: SportType;
  mySelection: {
    kuPlayerId: string | null;
    yuPlayerId: string | null;
  };
  handlePlayerSelection: (university: UniversityType, playerId: string | null) => void;
}
const PlayerSelector = ({ sport, mySelection, handlePlayerSelection }: Props) => {
  const [status, setStatus] = useState<UniversityType | null>(null);
  const { data } = useGetPlayer(sport);

  const kuSelectedPlayer =
    mySelection?.kuPlayerId && data ? data.find((player) => player.id === mySelection.kuPlayerId) || null : null;
  const yuSelectedPlayer =
    mySelection?.yuPlayerId && data ? data.find((player) => player.id === mySelection.yuPlayerId) || null : null;
  const setKuSelectedPlayer = (player: PlayerInterface | null) => {
    handlePlayerSelection('고려대학교', player?.id || null);
  };
  const setYuSelectedPlayer = (player: PlayerInterface | null) => {
    handlePlayerSelection('연세대학교', player?.id || null);
  };

  useEffect(() => {
    // TODO: 스크롤 가장 아래로 내리기
  }, [kuSelectedPlayer, yuSelectedPlayer]);

  // 스포츠 변경 시 상태 초기화
  useEffect(() => setStatus(null), [sport]);

  const handlePlayerProfileClick = (playerId: string) => {
    // TODO: 선수 프로필 보여주기
    alert(playerId);
  };

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
          const setSelectedPlayer = status === '고려대학교' ? setKuSelectedPlayer : setYuSelectedPlayer;
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
                <PlayerItem
                  sport={sport}
                  isSelected={selectedPlayer === null}
                  onClick={() => setSelectedPlayer(null)}
                />
                {data?.map((player) => {
                  if (player.university !== status) return null;
                  return (
                    <PlayerItem
                      key={player.id}
                      sport={sport}
                      player={player}
                      isSelected={selectedPlayer?.id === player.id}
                      onClick={() => setSelectedPlayer(player)}
                    />
                  );
                })}
              </div>
              {selectedPlayer !== null && (
                <div className={s.ButtonWrapper}>
                  <button
                    className={s.PlayerButton({ type: 'profile' })}
                    onClick={() => handlePlayerProfileClick(selectedPlayer.id)}
                  >
                    선수 프로필
                  </button>
                  <button
                    className={s.PlayerButton({ type: 'select', status })}
                    onClick={() => {
                      setStatus(null);
                    }}
                  >
                    '{selectedPlayer.name}' 선수 선택
                  </button>
                </div>
              )}
            </div>
          );
        })()}
    </div>
  );
};
export default PlayerSelector;
