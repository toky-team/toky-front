import image from '@/lib/assets/images/fail_image.png';
import * as s from './style.css';
import StepToken from '@/domain/game/components/StepToken';
import { useNavigate } from 'react-router';

interface Props {
  step: number;
}
const GameFail = ({ step }: Props) => {
  const navigate = useNavigate();

  return (
    <div className={s.Container}>
      <div className={s.Header}>
        <StepToken step={step} />
        <div className={s.HeaderText}>
          <p className={s.Description}>아쉽게 놓쳤어요</p>
          <div>공유하고 다시 도전해보세요!</div>
        </div>
      </div>
      <img src={image} className={s.Image} />
      <div className={s.BottomAction}>
        <button className={s.Button({ color: 'primary' })} onClick={() => navigate('/attendance', { replace: true })}>
          내일 다시 도전하기
        </button>
        <button className={s.Button({ color: 'secondary' })}>공유하고 바로 도전하기</button>
      </div>
    </div>
  );
};
export default GameFail;
