import Icon from '@/lib/assets/icons';
import * as s from './style.css';

const ScoreController = () => {
  return (
    <div className={s.ScoreController}>
      <button className={s.ScoreControllerButton}>
        <Icon.Plus />
      </button>
      <button className={s.ScoreControllerButton}>
        <Icon.Minus />
      </button>
    </div>
  );
};

const ScorePrediction = () => {
  return (
    <div className={s.Container}>
      <div className={s.ScoreBox}>
        <ScoreController />
        <div className={s.ScoreNumberContainer}>
          고려대학교
          <p className={s.ScoreNumber}>0</p>
        </div>
      </div>
      <span className={s.Divider}>
        <div className={s.Square} />
        <div className={s.Square} />
      </span>
      <div className={s.ScoreBox}>
        <div className={s.ScoreNumberContainer}>
          연세대학교
          <p className={s.ScoreNumber}>0</p>
        </div>
        <ScoreController />
      </div>
    </div>
  );
};
export default ScorePrediction;
