import type { SportType } from '@/lib/types';
import * as s from './style.css';
import { BALL_NAME } from '@/domain/game/constants';
import StepToken from '@/domain/game/components/StepToken';

interface Props {
  sport: SportType;
  step: number;
  handleStart: () => void;
}
const GameLanding = ({ step, sport, handleStart }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Header}>
        <StepToken step={step} />
        <div className={s.TitleContainer}>
          <h1 className={s.Title}>미션! {BALL_NAME[sport]}을 잡아라</h1>
          <p>단계를 통과할 때마다 응모권을 드려요!</p>
        </div>
      </div>
      {/* TODO: 사진 추가 */}
      <div className={s.BottomButton} onClick={handleStart}>
        {step === 1 ? '시작하기' : '2단계 도전하기'}
      </div>
    </div>
  );
};
export default GameLanding;
