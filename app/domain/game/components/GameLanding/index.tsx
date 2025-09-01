import { type SportType, type UniversityType } from '@/lib/types';
import * as s from './style.css';
import { BALL_NAME, GAME_LANDING_CHARACTER_IMAGE } from '@/domain/game/constants';
import StepToken from '@/domain/game/components/StepToken';
import Ball from '@/domain/game/components/Ball';

interface Props {
  sport: SportType;
  step: number;
  handleStart: () => void;
  retry?: boolean;
  university: UniversityType;
}
const GameLanding = ({ step, sport, handleStart, retry, university }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Header}>
        <StepToken step={step} />
        <div className={s.TitleContainer}>
          <h1 className={s.Title}>미션! {BALL_NAME[sport]}을 잡아라</h1>
          <p>{retry ? '이번에는 꼭 성공하세요!' : '단계를 통과할 때마다 응모권을 드려요!'}</p>
        </div>
      </div>
      <Ball sport={sport} className={s.BallImage} />
      <img
        src={GAME_LANDING_CHARACTER_IMAGE[sport][university === '고려대학교' ? 'korea' : 'yonsei']}
        className={s.TokyImage}
      />
      <div className={s.BottomButton} onClick={handleStart}>
        {step === 1 ? '시작하기' : '2단계 도전하기'}
      </div>
    </div>
  );
};
export default GameLanding;
