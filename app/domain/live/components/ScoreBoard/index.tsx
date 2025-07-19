import type { SportType } from '@/lib/types';
import * as s from './style.css';
import { LOCATION_MAP } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { scoreSocket } from '@/common/utils/socket';

interface Props {
  sport: SportType;
}
const ScoreBoard = ({ sport }: Props) => {
  const [kuScore, setKuScore] = useState(0);
  const [yuScore, setYuScore] = useState(0);

  const onReceiveScore = ({
    score,
  }: {
    score: {
      sport: SportType;
      KUScore: number;
      YUScore: number;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
  }) => {
    setKuScore(score.KUScore);
    setYuScore(score.YUScore);
  };

  useEffect(() => {
    scoreSocket.emit('join_room', { sport });
    scoreSocket.on('score_update', onReceiveScore);

    return () => {
      scoreSocket.emit('leave_room', { sport });
      scoreSocket.off('score_update', onReceiveScore);
    };
  }, [sport]);

  return (
    <div className={s.Container}>
      <div className={s.Score}>
        <div className={s.ScoreNumber}>{kuScore}</div>
        <p>고려대</p>
      </div>
      <div className={s.Info}>
        <div className={s.SportsSummary}>
          <div className={s.SportsTitle}>{sport}</div>
          <div className={s.SportsLocation}>{LOCATION_MAP[sport]}</div>
        </div>
        <div className={s.PrevStats}>
          {/* TODO: 정기전 총점 추가 */}
          <span className={s.PrevText}>정기전 총점</span>
          <span className={s.PrevScore}>1:0</span>
        </div>
      </div>
      <div className={s.Score}>
        <div className={s.ScoreNumber}>{yuScore}</div>
        <p>연세대</p>
      </div>
      <div className={s.Background({ school: 'korea' })} />
      <div className={s.Background({ school: 'yonsei' })} />
    </div>
  );
};
export default ScoreBoard;
