import { useEffect, useState } from 'react';
import * as s from './style.css';
import StepToken from '@/domain/game/components/StepToken';

interface Props {
  step: number;
  goToNextStep: () => void;
}
const GameReady = ({ step, goToNextStep }: Props) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          goToNextStep();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [count, goToNextStep]);

  return (
    <div className={s.Container}>
      <div className={s.Header}>
        <StepToken step={step} />
        <div>곧 시작합니다</div>
      </div>
      <div className={s.CountDown}>{count}</div>
    </div>
  );
};
export default GameReady;
