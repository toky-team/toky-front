import { useGetBetAnswerRatio } from '@/domain/bet/apis/useGetBetAnswerRatio';
import type { SportType, UniversityType } from '@/lib/types';

import * as s from './style.css';
import { usePostMatchResultBet } from '@/domain/bet/apis/usePostMatchResultBet';
import { useMemo } from 'react';
import OptionButton from '@/domain/bet/components/TeamPrediction/OptionButton';
import type { BetAnswer } from '@/domain/bet/apis/useGetMyBet';
import { useLoginModal } from '@/common/hooks/useLoginModal';
import { useToast } from '@/common/hooks/useToast';
import type { BetQuestionAnswer } from '@/domain/bet/apis/useGetBetQuestion';

const OPTIONS: { value: UniversityType | '무승부'; text: string; position: 'left' | 'center' | 'right' }[] = [
  { value: '고려대학교', text: '고려대', position: 'left' },
  { value: '무승부', text: '무승부', position: 'center' },
  { value: '연세대학교', text: '연세대', position: 'right' },
];

interface Props {
  sport: SportType;
  betData: BetAnswer;
  isLoading: boolean;
  scrollToBottom: () => Promise<void>;
  betAnswer: BetQuestionAnswer;
}
const TeamPrediction = ({ sport, betData, isLoading: isMyBetLoading, scrollToBottom, betAnswer }: Props) => {
  const { mutate: postMatchResultBet } = usePostMatchResultBet();
  const { data: betAnswerRatio, isLoading: isBetAnswerRatioLoading } = useGetBetAnswerRatio(sport);
  const { openLoginModal } = useLoginModal();
  const selectedTeam = useMemo(() => {
    if (!betData.predict) return null;
    if (betData.predict.matchResult) return betData.predict.matchResult;
    return null;
  }, [betData]);
  const { openToast } = useToast();

  const isLoading = isBetAnswerRatioLoading || isMyBetLoading;
  const hasRealAnswer = betAnswer?.predict.matchResult !== undefined && betAnswer.predict.matchResult !== null;

  const handleTeamPrediction = (team: UniversityType | '무승부') => {
    if (hasRealAnswer) {
      openToast({ message: '승부 예측 기간이 지났어요' });
      return;
    }
    if (openLoginModal() !== false) return;
    postMatchResultBet(
      { sport, predict: { matchResult: team } },
      {
        onSuccess: () => {
          scrollToBottom();
          if (betData.predict === null) {
            openToast({ message: '응모권 1장 획득!' });
          }
        },
      },
    );
  };

  const totalSum = useMemo(() => {
    if (!betAnswerRatio) return undefined;
    return (betAnswerRatio.고려대학교 || 0) + (betAnswerRatio.연세대학교 || 0) + (betAnswerRatio.무승부 || 0);
  }, [betAnswerRatio]);

  return (
    <div className={s.Container}>
      {OPTIONS.map((option) => {
        const percentage =
          betAnswerRatio && totalSum !== undefined
            ? Math.round(((betAnswerRatio[option.value] || 0) / totalSum) * 100)
            : 0;
        return (
          <OptionButton
            key={option.value}
            isLoading={isLoading}
            position={option.position}
            text={option.text}
            value={option.value}
            handleClick={handleTeamPrediction}
            myAnswer={selectedTeam}
            percentage={percentage}
            realAnswer={betAnswer?.predict.matchResult || null}
          />
        );
      })}
    </div>
  );
};
export default TeamPrediction;
