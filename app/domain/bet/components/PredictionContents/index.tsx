import { useState } from 'react';

import * as s from './style.css';

import { PREDICTION_QUESTION } from '@/domain/bet/constants';
import type { SportType, UniversityType } from '@/lib/types';
import Icon from '@/lib/assets/icons';
import PlayerSelector from '@/domain/bet/components/PlayerSelector';
import ScorePrediction from '@/domain/bet/components/ScorePrediction';
import TeamPrediction from '@/domain/bet/components/TeamPrediction';
import { useGetMyBet } from '@/domain/bet/apis/useGetMyBet';
import { usePostBet, type BetAnswer } from '@/domain/bet/apis/usePostBet';

interface Props {
  sport: SportType;
}
const PredictionContents = ({ sport }: Props) => {
  const [isScorePrediction, setIsScorePrediction] = useState(false);
  const { data: myBet } = useGetMyBet(sport);
  const { mutate: postBet } = usePostBet();

  const betData: BetAnswer = myBet || { sport, predict: {}, player: { kuPlayerId: null, yuPlayerId: null } };

  const handleTeamPrediction = (team: UniversityType | '무승부') => {
    postBet({
      ...betData,
      predict: {
        score: undefined,
        matchResult: team,
      },
    });
  };

  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>
          {isScorePrediction ? '최종 점수를 예측해주세요' : '우승할 팀을 예측해주세요'}
        </h2>
        {isScorePrediction ? (
          <ScorePrediction />
        ) : (
          <TeamPrediction sport={sport} betData={betData} handleTeamPrediction={handleTeamPrediction} />
        )}
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
