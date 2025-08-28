import image1 from '@/lib/assets/images/fail_1_image.png';
import image2 from '@/lib/assets/images/fail_2_image.png';
import * as s from './style.css';
import StepToken from '@/domain/game/components/StepToken';
import { useNavigate } from 'react-router';
import { usePostAttendanceShare } from '@/domain/game/apis/usePostAttendanceShare';
import { useToast } from '@/common/hooks/useToast';

interface Props {
  step: number;
}
const GameFail = ({ step }: Props) => {
  const navigate = useNavigate();
  const { mutate: postAttendanceShare } = usePostAttendanceShare();
  const { openToast } = useToast();

  const handleShare = async () => {
    if (!navigator.share) {
      alert('지원되지 않는 브라우저입니다. 모바일 크롬으로 접속해주세요!');
      return;
    }

    if (navigator.canShare({ text: import.meta.env.VITE_CLIENT_URL })) {
      navigator.canShare({});

      try {
        await navigator.share({
          text: import.meta.env.VITE_CLIENT_URL,
        });
      } finally {
        postAttendanceShare(undefined, {
          onSuccess: () => openToast({ message: '공유 성공' }),
        });
      }
    }
  };

  return (
    <div className={s.Container}>
      <div className={s.Header}>
        <StepToken step={step} />
        <div className={s.HeaderText}>
          <p className={s.Description}>{step === 1 ? '아쉽게 놓쳤어요' : '2단계는 아쉽게 놓쳤어요'}</p>
          <div>{step === 1 ? '공유하고 다시 도전해보세요!' : '내일 다시 도전해보세요!'}</div>
        </div>
      </div>
      <img src={step === 1 ? image1 : image2} className={s.Image} />
      <div className={s.BottomAction}>
        {step === 1 ? (
          <>
            <button
              className={s.Button({ color: 'primary' })}
              onClick={() => navigate('/attendance', { replace: true })}
            >
              내일 다시 도전하기
            </button>
            <button className={s.Button({ color: 'secondary' })} onClick={handleShare}>
              공유하고 바로 도전하기
            </button>
          </>
        ) : (
          <button
            className={s.Button({ color: 'secondary' })}
            onClick={() => {
              openToast({ message: '응모권 1장 획득' });
              navigate('/attendance', { replace: true });
            }}
          >
            응모권 1장 받기
          </button>
        )}
      </div>
    </div>
  );
};
export default GameFail;
