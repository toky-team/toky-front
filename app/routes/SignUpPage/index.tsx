import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { useSignupError, useSignupForm } from '@/domain/signup/stores/SignupFormStore';
import TopBar from '@/common/components/TopBar';
import SignupProgress from '@/domain/signup/components/SignupProgress';
import SignupFooter from '@/domain/signup/components/SignupFooter';
import type { CarouselApi } from '@/components/ui/carousel';
import SignupFunnel from '@/domain/signup/components/SignupFunnel';

const TOTAL_PROGRESS = 5;

const SignUp = () => {
  const [api, setApi] = useState<CarouselApi>();
  const navigate = useNavigate();

  const formState = useSignupForm();
  const errorState = useSignupError();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 스와이퍼와 progress 동기화
    if (api) {
      api.scrollTo(progress);
    }
  }, [api, progress]);

  useEffect(() => {
    // TODO: 이미 회원가입이 완료된 사용자는 홈으로 보내기
    // if ((isSuccess && isAlreadySignup) || isError) {
    //   router.push('/');
    // }
  }, []);

  const handlePrevButton = useCallback(() => {
    if (progress === 0) {
      navigate(-1);
    } else {
      setProgress((prev) => prev - 1);
    }
  }, [navigate, progress]);

  return (
    <div>
      {progress !== TOTAL_PROGRESS && (
        <>
          <TopBar handlePrevButton={handlePrevButton} />
          <SignupProgress curProgress={progress} totalProgress={TOTAL_PROGRESS - 1} />
        </>
      )}
      <SignupFunnel setApi={setApi} />
      <SignupFooter
        progress={progress}
        totalProgress={TOTAL_PROGRESS}
        clickable={progress !== TOTAL_PROGRESS}
        onClick={() => setProgress((prev) => prev + 1)}
      />
    </div>
  );
};
export default SignUp;
