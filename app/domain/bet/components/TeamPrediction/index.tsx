import { useGetBetAnswerRatio } from '@/domain/bet/apis/useGetBetAnswerRatio';
import type { SportType, UniversityType } from '@/lib/types';

import * as s from './style.css';
import type { BetAnswer } from '@/domain/bet/apis/usePostBet';
import { useMemo } from 'react';
import OptionButton from '@/domain/bet/components/TeamPrediction/OptionButton';

const OPTIONS: { value: UniversityType | '무승부'; text: string; position: 'left' | 'center' | 'right' }[] = [
  { value: '고려대학교', text: '고려대', position: 'left' },
  { value: '무승부', text: '무승부', position: 'center' },
  { value: '연세대학교', text: '연세대', position: 'right' },
];

interface Props {
  sport: SportType;
  betData: BetAnswer;
  handleTeamPrediction: (team: UniversityType | '무승부') => void;
}
const TeamPrediction = ({ sport, betData, handleTeamPrediction }: Props) => {
  const { data: betAnswerRatio } = useGetBetAnswerRatio(sport);
  const selectedTeam = useMemo(() => {
    if (betData.predict.matchResult) return betData.predict.matchResult;
    if (betData.predict.score) {
      if (betData.predict.score.kuScore > betData.predict.score.yuScore) return '고려대학교';
      if (betData.predict.score.kuScore < betData.predict.score.yuScore) return '연세대학교';
      return '무승부';
    }
    return null;
  }, [betData]);

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
            position={option.position}
            text={option.text}
            value={option.value}
            handleClick={handleTeamPrediction}
            myAnswer={selectedTeam}
            percentage={percentage}
            // TODO: 정답 API 연동!!!!
            realAnswer={null}
          />
        );
      })}
    </div>
  );
};
export default TeamPrediction;
