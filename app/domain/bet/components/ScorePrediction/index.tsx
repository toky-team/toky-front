import Icon from '@/lib/assets/icons';
import * as s from './style.css';
import type { BetAnswer } from '@/domain/bet/apis/usePostBet';

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
  betData: BetAnswer;
  handleScorePrediction: (
    setScore: (prev: { kuScore: number; yuScore: number }) => {
      kuScore: number;
      yuScore: number;
    },
  ) => void;
}
const ScorePrediction = ({ betData, handleScorePrediction }: Props) => {
  const { kuScore, yuScore } = betData.predict.score || { kuScore: 0, yuScore: 0 };
  return (
    <div className={s.Container}>
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
