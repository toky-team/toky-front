import Icon from '@/lib/assets/icons';
import * as s from './style.css';
import type { BetAnswer } from '@/domain/bet/apis/useGetMyBet';
import { usePostMatchResultBet } from '@/domain/bet/apis/usePostMatchResultBet';
import type { SportType } from '@/lib/types';
import { useLoginModal } from '@/common/hooks/useLoginModal';
import type { BetQuestionAnswer } from '@/domain/bet/apis/useGetBetQuestion';
import { useToast } from '@/common/hooks/useToast';

interface ScoreControllerProps {
  handlePlus: () => void;
  handleMinus: () => void;
}
const ScoreController = ({ handlePlus, handleMinus }: ScoreControllerProps) => {
  return (
    <div className={s.ScoreController}>
      <button className={s.ScoreControllerButton} onClick={handlePlus}>
        <Icon.Plus />
      </button>
      <button className={s.ScoreControllerButton} onClick={handleMinus}>
        <Icon.Minus />
      </button>
    </div>
  );
};

interface Props {
  sport: SportType;
  betData: BetAnswer;
  betAnswer: BetQuestionAnswer;
}
const ScorePrediction = ({ sport, betData, betAnswer }: Props) => {
  const { mutate: postMatchResultBet } = usePostMatchResultBet();
  const { kuScore, yuScore } = betData.predict?.score || { kuScore: 0, yuScore: 0 };
  const { openLoginModal } = useLoginModal();
  const { openToast } = useToast();

  const hasRealAnswer = betAnswer?.predict.score !== null && betAnswer?.predict.score !== undefined;
  const isCorrect =
    hasRealAnswer && kuScore === betAnswer.predict.score.kuScore && yuScore === betAnswer.predict.score.yuScore;

  const handleScorePrediction = (
    setScore: (prev: { kuScore: number; yuScore: number }) => { kuScore: number; yuScore: number },
  ) => {
    if (hasRealAnswer) {
      openToast({ message: '승부 예측 기간이 지났어요' });
      return;
    }
    if (openLoginModal() !== false) return;
    const newScore = setScore({ kuScore, yuScore });
    postMatchResultBet({ sport, predict: { score: newScore } });
  };

  return (
    <div className={s.Container}>
      {isCorrect && (
        <div className={s.StickerWrapper}>
          <Icon.Hit />
        </div>
      )}
      <div className={s.ScoreBox}>
        <ScoreController
          handlePlus={() => {
            handleScorePrediction((prev) => ({ ...prev, kuScore: prev.kuScore + 1 }));
          }}
          handleMinus={() => {
            handleScorePrediction((prev) => {
              if (prev.kuScore === 0) return prev;
              return { ...prev, kuScore: prev.kuScore - 1 };
            });
          }}
        />
        <div className={s.ScoreNumberContainer}>
          고려대학교
          <p className={s.ScoreNumber}>{kuScore}</p>
        </div>
      </div>
      <span className={s.Divider}>
        <div className={s.Square} />
        <div className={s.Square} />
      </span>
      <div className={s.ScoreBox}>
        <div className={s.ScoreNumberContainer}>
          연세대학교
          <p className={s.ScoreNumber}>{yuScore}</p>
        </div>
        <ScoreController
          handlePlus={() => {
            handleScorePrediction((prev) => ({ ...prev, yuScore: prev.yuScore + 1 }));
          }}
          handleMinus={() => {
            handleScorePrediction((prev) => {
              if (prev.yuScore === 0) return prev;
              return { ...prev, yuScore: prev.yuScore - 1 };
            });
          }}
        />
      </div>
    </div>
  );
};
export default ScorePrediction;
