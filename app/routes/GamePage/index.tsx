import TopBar from '@/common/components/TopBar';

import * as s from './style.css';
import { useEffect, useRef, useState } from 'react';
import GameLanding from '@/domain/game/components/GameLanding';
import { type SportType } from '@/lib/types';
import GameReady from '@/domain/game/components/GameReady';
import { usePostGameStart } from '@/domain/game/apis/usePostGameStart';
import GamePlaying from '@/domain/game/components/GamePlaying';
import GameSuccess from '@/domain/game/components/GameSuccess';
import GameFail from '@/domain/game/components/GameFail';
import { useNavigate } from 'react-router';
import getRandomSport from '@/domain/game/utils/getRandomSport';
import { useToast } from '@/common/hooks/useToast';
import { usePostGameComplete } from '@/domain/game/apis/usePostGameComplete';
import { useGetAttendance } from '@/domain/game/apis/useGetAttendance';
import { useGetUserInfo } from '@/common/apis/useGetUserInfo';

type PageState = 'landing' | 'ready' | 'playing' | 'success' | 'fail' | 'restart';

const GamePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [pageState, setPageState] = useState<PageState>('landing');
  const [sport, setSport] = useState<SportType>('농구');
  const { mutate: postGameStart } = usePostGameStart();
  const { mutate: postGameComplete } = usePostGameComplete();
  const { data: todayAttendance, isSuccess: isTodayAttendanceSuccess } = useGetAttendance();
  const { openToast } = useToast();
  const isMount = useRef(false);
  const { data: userInfo } = useGetUserInfo();

  const university = userInfo?.university || '고려대학교';

  const handleBack = () => {
    navigate('/attendance', { replace: true });
  };

  const handleStart = () => {
    if (step === 1 && todayAttendance?.gameStatus === '시작 전') {
      postGameStart(undefined, {
        onSuccess: () => {
          setPageState('ready');
        },
      });
      return;
    }

    setPageState('ready');
  };

  const handleGameStart = () => {
    setPageState('playing');
  };

  const handleGameFail = () => {
    postGameComplete(
      { stage: step, win: false },
      {
        onSuccess: () => {
          setPageState('fail');
        },
      },
    );
  };

  const handleGameSuccess = () => {
    postGameComplete(
      { stage: step, win: true },
      {
        onSuccess: () => {
          setPageState('success');
        },
      },
    );
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
      setPageState('landing');
      return;
    }

    navigate('/attendance', { replace: true });
    openToast({ message: '응모권 2장 획득!' });
  };

  const handleRestart = () => {
    setPageState('restart');
  };

  const handleRestartGame = () => {
    setPageState('ready');
  };

  useEffect(() => {
    if (isMount.current) return;

    if (!isTodayAttendanceSuccess) return;

    isMount.current = true;

    if (todayAttendance.firstStageResult === false) {
      setPageState('fail');
      return;
    }

    if (todayAttendance.secondStageResult !== null) {
      navigate('/attendance', { replace: true });
      return;
    }

    if (todayAttendance.firstStageResult) {
      setStep(2);
      return;
    }
  }, [todayAttendance, isTodayAttendanceSuccess, navigate]);

  useEffect(() => {
    // 스텝 바뀔 때마다 스포츠 랜덤 선택
    setSport(getRandomSport());
  }, [step]);

  return (
    <div className={s.Container}>
      {pageState !== 'playing' && pageState !== 'ready' && <TopBar handlePrevButton={handleBack} />}
      {pageState === 'landing' && (
        <GameLanding step={step} sport={sport} handleStart={handleStart} university={university} />
      )}
      {pageState === 'ready' && <GameReady step={step} goToNextStep={handleGameStart} />}
      {pageState === 'playing' && (
        <GamePlaying step={step} sport={sport} goToFail={handleGameFail} goToSuccess={handleGameSuccess} />
      )}
      {pageState === 'success' && <GameSuccess step={step} goToNextStep={handleNextStep} />}
      {pageState === 'fail' && <GameFail step={step} handleRestart={handleRestart} />}
      {pageState === 'restart' && (
        <GameLanding step={step} sport={sport} handleStart={handleRestartGame} university={university} retry />
      )}
    </div>
  );
};
export default GamePage;
