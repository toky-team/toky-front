import { useState } from 'react';

import * as s from './style.css';

import { PREDICTION_QUESTION } from '@/domain/bet/constants';
import type { SportType } from '@/lib/types';
import Icon from '@/lib/assets/icons';
import PlayerSelector from '@/domain/bet/components/PlayerSelector';
import ScorePrediction from '@/domain/bet/components/ScorePrediction';
import TeamPrediction from '@/domain/bet/components/TeamPrediction';

interface Props {
  sport: SportType;
}
const PredictionContents = ({ sport }: Props) => {
  const [isScorePrediction, setIsScorePrediction] = useState(false);

  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>
          {isScorePrediction ? '최종 점수를 예측해주세요' : '우승할 팀을 예측해주세요'}
        </h2>
        {isScorePrediction ? <ScorePrediction /> : <TeamPrediction />}
        <button className={s.MoreButton({ isScorePrediction })} onClick={() => setIsScorePrediction((prev) => !prev)}>
          {isScorePrediction ? (
            <Icon.Return />
          ) : (
            <span className={s.MoreTicketText}>
              <Icon.GoldenTicket />
              추가 응모권
            </span>
          )}
          {isScorePrediction ? '우승팀만 예측할래요' : '점수까지 예측해볼래요'}
        </button>
      </div>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>{PREDICTION_QUESTION[sport]}</h2>
        <PlayerSelector />
      </div>
    </div>
  );
};
export default PredictionContents;
