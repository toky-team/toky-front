import { useRef, useState } from 'react';

import * as s from './style.css';

import type { SportType } from '@/lib/types';
import Icon from '@/lib/assets/icons';
import PlayerSelector from '@/domain/bet/components/PlayerSelector';
import ScorePrediction from '@/domain/bet/components/ScorePrediction';
import TeamPrediction from '@/domain/bet/components/TeamPrediction';
import { useGetMyBet } from '@/domain/bet/apis/useGetMyBet';
import { PREDICTION_QUESTION } from '@/domain/bet/constants';
import { usePostMatchResultBet } from '@/domain/bet/apis/usePostMatchResultBet';

interface Props {
  sport: SportType;
}
const PredictionContents = ({ sport }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: betData, isLoading, isError } = useGetMyBet(sport);
  const { mutate: postMatchResultBet } = usePostMatchResultBet();

  const [isScorePrediction, setIsScorePrediction] = useState(false);

  if (isError) return <div>데이터를 불러오는데 실패했습니다.</div>; // TODO: Not Found 페이지
  if (betData === undefined) return null;

  const canPredictScore = sport === '야구' || sport === '축구' || sport === '아이스하키';

  const scrollToBottom = async () => {
    if (scrollRef.current) {
      await scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const changePredictionMode = () => {
    if (isScorePrediction) {
      // 점수 예측 -> 우승팀 예측으로 변경
      setIsScorePrediction(false);
      return;
    }

    if (canPredictScore) {
      setIsScorePrediction(true);
      // 우승팀 예측 -> 점수 예측으로 변경
      // 우승팀 예측 데이터에 맞추어 점수 예측을 만들어주고 (1 : 0), 우승팀 예측 데이터를 삭제
      if (betData.predict && betData.predict.matchResult) {
        const newScore =
          betData.predict.matchResult === '고려대학교'
            ? { kuScore: 1, yuScore: 0 }
            : betData.predict.matchResult === '연세대학교'
              ? { kuScore: 0, yuScore: 1 }
              : { kuScore: 0, yuScore: 0 };
        postMatchResultBet({ sport, predict: { score: newScore } });
      }
      return;
    }
  };

  return (
    <div className={s.Container} ref={scrollRef}>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>
          {isScorePrediction ? '최종 점수를 예측해주세요' : '우승할 팀을 예측해주세요'}
        </h2>
        {isScorePrediction ? (
          <ScorePrediction sport={sport} betData={betData} />
        ) : (
          <TeamPrediction sport={sport} betData={betData} isLoading={isLoading} />
        )}
        {canPredictScore && (
          <button className={s.MoreButton({ isScorePrediction })} onClick={changePredictionMode}>
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
        )}
      </div>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>{PREDICTION_QUESTION[sport]}</h2>
        <PlayerSelector
          sport={sport}
          mySelection={{
            kuPlayerId: betData.kuPlayer?.playerId || null,
            yuPlayerId: betData.yuPlayer?.playerId || null,
          }}
          scrollToBottom={scrollToBottom}
        />
      </div>
    </div>
  );
};
export default PredictionContents;
