import TopBar from '@/common/components/TopBar';

import * as s from './style.css';
import { useEffect, useState } from 'react';
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

type PageState = 'landing' | 'ready' | 'playing' | 'success' | 'fail' | 'restart';

const GamePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [pageState, setPageState] = useState<PageState>('landing');
  const [sport, setSport] = useState<SportType>('농구');
  const { mutate: postGameStart } = usePostGameStart();
  const { mutate: postGameComplete } = usePostGameComplete();
  const { openToast } = useToast();

  const handleBack = () => {
    navigate('/attendance', { replace: true });
  };

  const handleStart = () => {
    postGameStart(undefined, {
      onSuccess: () => {
        setPageState('ready');
      },
    });
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

  const handleRestart = () => {
    setPageState('restart');
  };

  useEffect(() => {
    // 스텝 바뀔 때마다 스포츠 랜덤 선택
    setSport(getRandomSport());
  }, [step]);

  return (
    <div className={s.Container}>
      {pageState !== 'playing' && pageState !== 'ready' && <TopBar handlePrevButton={handleBack} />}
      {pageState === 'landing' && <GameLanding step={step} sport={sport} handleStart={handleStart} />}
      {pageState === 'ready' && <GameReady step={step} goToNextStep={handleGameStart} />}
      {pageState === 'playing' && (
        <GamePlaying step={step} sport={sport} goToFail={handleGameFail} goToSuccess={handleGameSuccess} />
      )}
      {pageState === 'success' && (
        <GameSuccess
          step={step}
          goToNextStep={() => {
            if (step === 1) {
              setStep(2);
              setPageState('landing');
              return;
            }

            navigate('/attendance', { replace: true });
            openToast({ message: '응모권 2장 획득!' });
          }}
        />
      )}
      {pageState === 'fail' && <GameFail step={step} handleRestart={handleRestart} />}
      {pageState === 'restart' && <GameLanding step={step} sport={sport} handleStart={handleStart} retry />}
    </div>
  );
};
export default GamePage;
