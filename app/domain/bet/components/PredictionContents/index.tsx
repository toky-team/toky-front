import { useRef } from 'react';

import * as s from './style.css';

import type { SportType, UniversityType } from '@/lib/types';
import Icon from '@/lib/assets/icons';
import PlayerSelector from '@/domain/bet/components/PlayerSelector';
import ScorePrediction from '@/domain/bet/components/ScorePrediction';
import TeamPrediction from '@/domain/bet/components/TeamPrediction';
import { useGetMyBet } from '@/domain/bet/apis/useGetMyBet';
import { usePostBet, type BetAnswer } from '@/domain/bet/apis/usePostBet';
import { PREDICTION_QUESTION } from '@/domain/bet/constants';
import editBetAnswer from '@/domain/bet/utils/editBetAnswer';

interface Props {
  sport: SportType;
}
const PredictionContents = ({ sport }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data: myBet, isLoading } = useGetMyBet(sport);
  const { mutate: postBet } = usePostBet();

  const betData: BetAnswer = editBetAnswer(sport, myBet);

  const canPredictScore = sport === '야구' || sport === '축구' || sport === '아이스하키';
  const isScorePrediction = betData.predict.score !== undefined && betData.predict.score !== null && canPredictScore;

  const scrollToBottom = async () => {
    if (scrollRef.current) {
      await scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const changePredictionMode = () => {
    if (isScorePrediction && betData.predict.score) {
      // 점수 예측 -> 우승팀 예측으로 변경
      // 점수 예측 데이터에 맞추어 우승팀 예측을 만들어주고, 점수 예측 데이터를 삭제
      const matchResult =
        betData.predict.score.kuScore > betData.predict.score.yuScore
          ? '고려대학교'
          : betData.predict.score.kuScore < betData.predict.score.yuScore
            ? '연세대학교'
            : '무승부';
      postBet({
        ...betData,
        predict: {
          score: undefined,
          matchResult,
        },
      });
      return;
    }

    // 우승팀 예측 -> 점수 예측으로 변경
    // 우승팀 예측 데이터에 맞추어 점수 예측을 만들어주고 (1 : 0), 우승팀 예측 데이터를 삭제
    const newScore =
      betData.predict.matchResult === '고려대학교'
        ? { kuScore: 1, yuScore: 0 }
        : betData.predict.matchResult === '연세대학교'
          ? { kuScore: 0, yuScore: 1 }
          : { kuScore: 0, yuScore: 0 };

    postBet({
      ...betData,
      predict: {
        matchResult: undefined,
        score: newScore,
      },
    });
  };

  const handleTeamPrediction = (team: UniversityType | '무승부') => {
    postBet({
      ...betData,
      predict: {
        score: undefined,
        matchResult: team,
      },
    });
  };

  const handleScorePrediction = (
    setScore: (prev: { kuScore: number; yuScore: number }) => { kuScore: number; yuScore: number },
  ) => {
    const newScore = setScore(betData.predict.score || { kuScore: 0, yuScore: 0 });
    postBet({
      ...betData,
      predict: {
        score: newScore,
        matchResult: undefined,
      },
    });
  };

  const handlePlayerSelection = (university: UniversityType, playerId: string | null) => {
    postBet({
      ...betData,
      player: {
        kuPlayerId: university === '고려대학교' ? playerId : betData.player.kuPlayerId,
        yuPlayerId: university === '연세대학교' ? playerId : betData.player.yuPlayerId,
      },
    });
  };

  return (
    <div className={s.Container} ref={scrollRef}>
      <div className={s.Wrapper}>
        <h2 className={s.QuestionTitle}>
          {isScorePrediction ? '최종 점수를 예측해주세요' : '우승할 팀을 예측해주세요'}
        </h2>
        {isScorePrediction ? (
          <ScorePrediction betData={betData} handleScorePrediction={handleScorePrediction} />
        ) : (
          <TeamPrediction
            sport={sport}
            betData={betData}
            handleTeamPrediction={handleTeamPrediction}
            isLoading={isLoading}
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
        <h2 className={s.QuestionTitle}>{PREDICTION_QUESTION[sport]}</h2>
        <PlayerSelector
          sport={sport}
          mySelection={betData.player}
          handlePlayerSelection={handlePlayerSelection}
          scrollToBottom={scrollToBottom}
        />
      </div>
    </div>
  );
};
export default PredictionContents;
