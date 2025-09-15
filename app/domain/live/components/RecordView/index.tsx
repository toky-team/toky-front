import RecordStats from '@/domain/record/components/RecordStats';
import type { SportType } from '@/lib/types';

import * as s from './style.css';
import type { SportItem } from '@/domain/record/components/RecordOverallSummary';
import RecordSummary from '@/domain/record/components/RecordSummary';

const sports: Record<SportType, SportItem> = {
  축구: { label: '축구', KOREA_WINS: 21, YONSEI_WINS: 18 },
  럭비: { label: '럭비', KOREA_WINS: 21, YONSEI_WINS: 25 },
  야구: { label: '야구', KOREA_WINS: 26, YONSEI_WINS: 19 },
  농구: { label: '농구', KOREA_WINS: 24, YONSEI_WINS: 23 },
  아이스하키: { label: '빙구', KOREA_WINS: 18, YONSEI_WINS: 24 },
};

interface Props {
  sport: SportType;
}
const RecordView = ({ sport }: Props) => {
  const sum = sports[sport].KOREA_WINS + sports[sport].YONSEI_WINS;
  const leftPct = Math.round((sports[sport].KOREA_WINS / sum) * 1000) / 10;
  const rightPct = 100 - leftPct;

  return (
    <div className={s.Container}>
      <div className={s.RecordSummaryTitle}>
        <h2>역대 정기전 전적</h2>
        <div className={s.RecordSummaryContainer}>
          <RecordSummary s={sports[sport]} leftPct={leftPct} rightPct={rightPct} />
        </div>
      </div>
      <RecordStats sport={sport} />
    </div>
  );
};
export default RecordView;
