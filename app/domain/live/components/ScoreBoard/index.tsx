import * as s from './style.css';

import type { SportType } from '@/lib/types';
import { LOCATION_MAP, PREV_SCORE_MAP } from '@/lib/constants';
import { useScoreSocket } from '@/domain/live/hooks/useScoreSocket';

interface Props {
  sport: SportType;
}
const ScoreBoard = ({ sport }: Props) => {
  const { KUScore, YUScore } = useScoreSocket({ sport });

  return (
    <div className={s.Container}>
      <div className={s.Score}>
        <div className={s.ScoreNumber}>{KUScore}</div>
        <p>고려대</p>
      </div>
      <div className={s.Info}>
        <div className={s.SportsSummary}>
          <div className={s.SportsTitle}>{sport}</div>
          <div className={s.SportsLocation}>{LOCATION_MAP[sport]}</div>
        </div>
        <div className={s.PrevStats}>
          <span className={s.PrevText}>정기전 총점</span>
          <span className={s.PrevScore}>{PREV_SCORE_MAP[sport]}</span>
        </div>
      </div>
      <div className={s.Score}>
        <div className={s.ScoreNumber}>{YUScore}</div>
        <p>연세대</p>
      </div>
      <div className={s.Background({ school: 'korea' })} />
      <div className={s.Background({ school: 'yonsei' })} />
    </div>
  );
};
export default ScoreBoard;
