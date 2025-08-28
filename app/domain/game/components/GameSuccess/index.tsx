import StepToken from '@/domain/game/components/StepToken';

import * as s from './style.css';
import { useEffect } from 'react';
import { GAME_GAP_TIME } from '@/domain/game/constants';

interface Props {
  step: number;
  goToNextStep: () => void;
}
const GameSuccess = ({ step, goToNextStep }: Props) => {
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(goToNextStep, GAME_GAP_TIME);
      return () => clearTimeout(timer);
    }
  }, [goToNextStep, step]);

  return (
    <div className={s.Container}>
      <StepToken step={step} />
      <div className={s.Contents}>
        {step === 1 ? (
          <>
            <h2 className={s.Heading}>성공! 응모권을 획득했어요</h2>
            <p>2단계에 성공하고 하나 더 받아보세요</p>
          </>
        ) : (
          <>
            <p>2단계까지 모두 성공!</p>
            <h2 className={s.Heading}>응모권을 총 2장 획득했어요</h2>
          </>
        )}
      </div>
      {step === 2 && (
        <button className={s.Button} onClick={goToNextStep}>
          응모권 2장 받기
        </button>
      )}
    </div>
  );
};
export default GameSuccess;
