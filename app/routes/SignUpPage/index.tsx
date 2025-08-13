import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

import { useSignupError, useSignupForm } from '@/domain/signup/stores/SignupFormStore';
import TopBar from '@/common/components/TopBar';
import SignupProgress from '@/domain/signup/components/SignupProgress';
import SignupFooter from '@/domain/signup/components/SignupFooter';
import type { CarouselApi } from '@/components/ui/carousel';
import SignupFunnel from '@/domain/signup/components/SignupFunnel';
import { useGetCheckName } from '@/domain/signup/apis/useGetCheckName';
import { usePostSignup } from '@/domain/signup/apis/usePostSignup';
import { useGetCheckPhoneNumber } from '@/domain/signup/apis/useGetCheckPhoneNumber';
import { usePostSendSMS } from '@/domain/signup/apis/usePostSendSMS';
import { usePostVerifySMS } from '@/domain/signup/apis/usePostVerifySMS';
import useGetAuthCheck from '@/common/apis/useGetAuthCheck';

const TOTAL_PROGRESS = 6;

const SignUp = () => {
  const [api, setApi] = useState<CarouselApi>();
  const navigate = useNavigate();

  const formState = useSignupForm();
  const errorState = useSignupError();

  const [progress, setProgress] = useState(0);

  const { data: authCheck, isSuccess: isSuccessAuthCheck, isLoading: isLoadingAuthCheck } = useGetAuthCheck();
  const { refetch: checkName } = useGetCheckName(formState.name);
  const { refetch: checkPhoneNumber } = useGetCheckPhoneNumber(formState.phoneNumber);
  const { mutate: signup } = usePostSignup();
  const { mutate: sendSMS } = usePostSendSMS();
  const { mutate: verifySMS } = usePostVerifySMS();

  const isAlreadySignup = authCheck?.isSignup || false;
  const isLogin = authCheck?.isLogin || false;

  useEffect(() => {
    // progress -> 캐러셀 동기화
    if (api) {
      api.scrollTo(progress);
    }
  }, [api, progress]);

  useEffect(() => {
    // 캐러셀 -> progress 동기화
    if (api) {
      api.on('slidesInView', (api) => {
        if (api.selectedScrollSnap() !== progress) {
          api.scrollTo(progress);
        }
      });
    }
  }, [api, progress]);

  useEffect(() => {
    if (isSuccessAuthCheck) {
      if (isAlreadySignup) {
        navigate('/', { replace: true });
      } else if (!isLogin) {
        navigate('/login', { replace: true });
      }
    }
  }, [isSuccessAuthCheck, isAlreadySignup, isLogin, navigate]);

  const handlePrevButton = useCallback(() => {
    if (progress === 0) {
      navigate(-1);
    } else {
      setProgress((prev) => prev - 1);
    }
  }, [navigate, progress]);

  const clickable = useMemo(() => {
    switch (progress) {
      case 0:
        return formState.university !== null;
      case 1:
        return formState.name !== '';
      case 2:
        return (
          formState.phoneNumber.length === 11 &&
          /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/.test(formState.phoneNumber)
        );
      case 3:
        return formState.authNumber !== '';
      case 4:
        return formState.agreement;
      case 5:
        return true;
      default:
        return false;
    }
  }, [progress, formState]);

  const handleNextButton = () => {
    if (clickable) {
      switch (progress) {
        case 0:
          setProgress((prev) => prev + 1);
          break;
        case 1:
          checkName().then(({ data }) => {
            if (data !== undefined && data === false) {
              setProgress((prev) => prev + 1);
            } else {
              errorState.setError('name');
            }
          });
          break;
        case 2:
          checkPhoneNumber().then(({ data }) => {
            if (data !== undefined && data === false) {
              sendSMS(formState.phoneNumber, {
                onSuccess: () => {
                  setProgress((prev) => prev + 1);
                },
              });
            } else {
              errorState.setError('phoneNumber');
            }
          });
          break;
        case 3:
          verifySMS(
            {
              phoneNumber: formState.phoneNumber,
              code: formState.authNumber,
            },
            {
              onSuccess: () => {
                setProgress((prev) => prev + 1);
              },
              onError: () => {
                errorState.setError('authNumber');
              },
            },
          );
          break;
        case 4: {
          // TODO: 초대 코드 추가 필요
          // const inviteCode = localStorage.getItem('invite-code');
          // localStorage.removeItem('invite-code');
          signup(
            {
              name: formState.name,
              phoneNumber: formState.phoneNumber,
              university: formState.university,
            },
            {
              onSuccess: () => {
                setProgress((prev) => prev + 1);
              },
            },
          );
          break;
        }
        case 5:
          navigate('/');
          break;
      }
    }
  };

  if (isLoadingAuthCheck || isAlreadySignup) return null;

  return (
    <div className="h-full">
      {progress !== TOTAL_PROGRESS - 1 && (
        <>
          <TopBar handlePrevButton={handlePrevButton} />
          <SignupProgress curProgress={progress} totalProgress={TOTAL_PROGRESS - 1} />
        </>
      )}
      <SignupFunnel curProgress={progress} setApi={setApi} />
      <SignupFooter
        progress={progress}
        totalProgress={TOTAL_PROGRESS}
        clickable={clickable}
        onClick={handleNextButton}
      />
    </div>
  );
};
export default SignUp;
