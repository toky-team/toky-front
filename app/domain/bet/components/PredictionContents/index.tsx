import { useEffect, useState } from 'react';

import * as s from './style.css';

import type { SportType } from '@/lib/types';
import Icon from '@/lib/assets/icons';
import PlayerSelector from '@/domain/bet/components/PlayerSelector';
import ScorePrediction from '@/domain/bet/components/ScorePrediction';
import TeamPrediction from '@/domain/bet/components/TeamPrediction';
import { useGetMyBet } from '@/domain/bet/apis/useGetMyBet';
import { usePostMatchResultBet } from '@/domain/bet/apis/usePostMatchResultBet';
import { useLoginModal } from '@/common/hooks/useLoginModal';
import { useToast } from '@/common/hooks/useToast';
import { useGetBetQuestion } from '@/domain/bet/apis/useGetBetQuestion';
import { useGetScore } from '@/domain/live/apis/useGetScore';

interface Props {
  sport: SportType;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}
const PredictionContents = ({ sport, scrollRef }: Props) => {
  const { data: betQuestion } = useGetBetQuestion(sport);
  const {
    data: betData = { sport, predict: null, kuPlayer: null, yuPlayer: null },
    isLoading,
    isSuccess,
  } = useGetMyBet(sport);
  const { mutate: postMatchResultBet } = usePostMatchResultBet();
  const { openLoginModal } = useLoginModal();
  const { openToast } = useToast();
  const { data: scoreData } = useGetScore(sport);
  const canPredict = scoreData?.matchStatus === '시작 전';

  const [isScorePrediction, setIsScorePrediction] = useState(false);
  const canPredictScore = sport === '야구' || sport === '축구' || sport === '아이스하키';

  useEffect(() => {
    // score 뷰 상태 제어
    if (canPredictScore && isSuccess && betData.predict?.score) {
      setIsScorePrediction(true);
    } else {
      setIsScorePrediction(false);
    }
  }, [canPredictScore, isSuccess, betData?.predict?.score, sport]);

  const scrollToBottom = async () => {
    if (scrollRef.current) {
      await scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const changePredictionMode = () => {
    if (openLoginModal() !== false) return;

    if (isScorePrediction) {
      // 점수 예측 -> 우승팀 예측으로 변경
      setIsScorePrediction(false);
      return;
    }

    if (canPredictScore) {
      setIsScorePrediction(true);
      // 우승팀 예측 -> 점수 예측으로 변경
      // 우승팀 예측 데이터에 맞추어 점수 예측을 만들어주고 (1 : 0), 우승팀 예측 데이터를 삭제
      if (betData.predict && betData.predict.score) return;

      if (!canPredict) return;

      let newScore = { kuScore: 0, yuScore: 0 };
      if (betData.predict && betData.predict.matchResult) {
        newScore =
          betData.predict.matchResult === '고려대학교'
            ? { kuScore: 1, yuScore: 0 }
            : betData.predict.matchResult === '연세대학교'
              ? { kuScore: 0, yuScore: 1 }
              : { kuScore: 0, yuScore: 0 };
      }
      postMatchResultBet(
        { sport, predict: { score: newScore } },
        {
          onSuccess: () => {
            if (betData.predict === null) {
              openToast({ message: '응모권 2장 획득!' });
            }
            scrollToBottom();
          },
        },
      );

      return;
    }
  };

  if (betQuestion === undefined) return null;

  return (
    <div className={s.Container} ref={scrollRef}>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>
          {isScorePrediction ? '최종 점수를 예측해주세요' : '우승할 팀을 예측해주세요'}
        </h2>
        {isScorePrediction ? (
          <ScorePrediction sport={sport} betData={betData} betAnswer={betQuestion.answer} />
        ) : (
          <TeamPrediction
            sport={sport}
            betData={betData}
            isLoading={isLoading}
            scrollToBottom={scrollToBottom}
            betAnswer={betQuestion.answer}
          />
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
        <h2 className={s.QuestionTitle}>{betQuestion.question}</h2>
        <PlayerSelector
          sport={sport}
          mySelection={{
            kuPlayerId: betData.kuPlayer ? betData.kuPlayer.playerId : undefined,
            yuPlayerId: betData.yuPlayer ? betData.yuPlayer.playerId : undefined,
          }}
          scrollToBottom={scrollToBottom}
          betAnswer={betQuestion.answer}
        />
      </div>
    </div>
  );
};
export default PredictionContents;
