import { useEffect, useState } from 'react';

import * as s from './style.css';

import type { SportType, UniversityType } from '@/lib/types';
import PlayerItem from '@/domain/bet/components/PlayerSelector/PlayerItem';
import { useGetPlayer } from '@/common/apis/useGetPlayer';
import type { PlayerInterface } from '@/lib/types/player';
import SelectedPlayerView from '@/domain/bet/components/PlayerSelector/SelectedPlayerView';
import { usePostPlayerBet } from '@/domain/bet/apis/usePostPlayerBet';
import { useLoginModal } from '@/common/hooks/useLoginModal';
import { ChevronRight } from 'lucide-react';

interface Props {
  sport: SportType;
  mySelection: {
    kuPlayerId: string | null | undefined;
    yuPlayerId: string | null | undefined;
  };
  scrollToBottom: () => void;
}

const ITEMS_PER_PAGE = 8;

const PlayerSelector = ({ sport, mySelection, scrollToBottom }: Props) => {
  const [status, setStatus] = useState<UniversityType | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetPlayer(sport);
  const { mutate: postPlayerBet } = usePostPlayerBet();
  const { openLoginModal } = useLoginModal();

  const kuSelectedPlayer =
    mySelection.kuPlayerId === undefined
      ? undefined
      : mySelection.kuPlayerId === null
        ? null
        : data?.find((player) => player.id === mySelection.kuPlayerId) || undefined;
  const yuSelectedPlayer =
    mySelection.yuPlayerId === undefined
      ? undefined
      : mySelection.yuPlayerId === null
        ? null
        : data?.find((player) => player.id === mySelection.yuPlayerId) || undefined;

  const setKuSelectedPlayer = (player: PlayerInterface | null) => {
    if (openLoginModal() !== false) return;
    postPlayerBet(
      { sport, university: '고려대학교', playerId: player?.id || null },
      {
        onSuccess: () => {
          setTimeout(() => {
            scrollToBottom();
          }, 0);
        },
      },
    );
  };
  const setYuSelectedPlayer = (player: PlayerInterface | null) => {
    if (openLoginModal() !== false) return;
    postPlayerBet(
      { sport, university: '연세대학교', playerId: player?.id || null },
      {
        onSuccess: () => {
          setTimeout(() => {
            scrollToBottom();
          }, 0);
        },
      },
    );
  };

  // 스포츠 변경 시 상태 초기화
  useEffect(() => {
    setStatus(null);
    setCurrentPage(1);
  }, [sport]);

  // 대학교 변경 시 페이지 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [status]);

  const handlePlayerProfileClick = (playerId: string) => {
    // TODO: 선수 프로필 보여주기
    alert(playerId);
  };

  // 현재 대학교의 선수들만 필터링
  const filteredPlayers = data?.filter((player) => player.university === status) || [];

  // 페이지네이션 계산
  const totalPages = Math.ceil((filteredPlayers.length + 1) / ITEMS_PER_PAGE); // +1은 "선택하지 않음" 옵션

  // 현재 페이지에 표시할 아이템들
  const currentPageItems = [];

  // 첫 번째 페이지에만 "선택하지 않음" 옵션 추가
  if (currentPage === 1) {
    currentPageItems.push(null); // null은 "선택하지 않음"을 의미
  }

  // 현재 페이지에 표시할 선수들 계산
  const playerStartIndex = currentPage === 1 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE - 1;
  const playerEndIndex = currentPage === 1 ? ITEMS_PER_PAGE - 1 : currentPage * ITEMS_PER_PAGE - 1;
  const playersForCurrentPage = filteredPlayers.slice(playerStartIndex, playerEndIndex);

  currentPageItems.push(...playersForCurrentPage);

  // 12개 미만일 때 빈 더미 아이템 추가
  while (currentPageItems.length < ITEMS_PER_PAGE) {
    currentPageItems.push('dummy'); // 더미 아이템
  }

  return (
    <div className={s.Wrapper}>
      <div className={s.Container}>
        <SelectedPlayerView
          university="고려대학교"
          status={status}
          selectedPlayer={kuSelectedPlayer}
          onClick={() => {
            setStatus('고려대학교');
            setTimeout(() => {
              scrollToBottom();
            }, 0);
          }}
        />
        <SelectedPlayerView
          university="연세대학교"
          status={status}
          selectedPlayer={yuSelectedPlayer}
          onClick={() => {
            setStatus('연세대학교');
            setTimeout(() => {
              scrollToBottom();
            }, 0);
          }}
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
                {currentPageItems.map((player, index) => (
                  <PlayerItem
                    key={
                      player === 'dummy' ? `dummy-${index}` : (typeof player === 'object' && player?.id) || 'no-player'
                    }
                    sport={sport}
                    player={player === 'dummy' ? undefined : typeof player === 'object' ? player : undefined}
                    isSelected={player !== 'dummy' && selectedPlayer === player}
                    onClick={
                      player === 'dummy'
                        ? () => {}
                        : () => setSelectedPlayer(typeof player === 'object' ? player : null)
                    }
                    isDummy={player === 'dummy'}
                  />
                ))}
              </div>
              {totalPages > 1 && (
                <div className={s.PaginationContainer}>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      className={s.PaginationButton({ isActive: page === currentPage })}
                      onClick={() => setCurrentPage(page)}
                    />
                  ))}
                </div>
              )}
              {selectedPlayer !== undefined &&
                (selectedPlayer === null ? (
                  <button
                    className={s.PlayerButton({ type: 'noPlayerSelect' })}
                    onClick={() => {
                      setStatus(null);
                    }}
                  >
                    '득점 없음' 선택
                  </button>
                ) : (
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
                ))}
            </div>
          );
        })()}
    </div>
  );
};
export default PlayerSelector;
