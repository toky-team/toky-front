import TopBar from '@/common/components/TopBar';

import * as s from './style.css';
import { useState } from 'react';
import GameLanding from '@/domain/game/components/GameLanding';
import { SportArray, type SportType } from '@/lib/types';
import GameReady from '@/domain/game/components/GameReady';
import { usePostGameStart } from '@/domain/game/apis/usePostGameStart';
import GamePlaying from '@/domain/game/components/GamePlaying';
import GameSuccess from '@/domain/game/components/GameSuccess';
import GameFail from '@/domain/game/components/GameFail';
import { useNavigate } from 'react-router';

type PageState = 'landing' | 'ready' | 'playing' | 'success' | 'fail' | 'restart';

const GamePage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [pageState, setPageState] = useState<PageState>('landing');
  const [sport, setSport] = useState<SportType>(SportArray[Math.floor(Math.random() * 5)].id);
  const { mutate: postGameStart } = usePostGameStart();

  const handleBack = () => {
    navigate('/attendance', { replace: true });
  };

  const handleStart = () => {
    // postGameStart(undefined, {
    //   onSuccess: () => {
    setPageState('ready');
    //   },
    // });
  };

  const handleGameStart = () => {
    setPageState('playing');
  };

  const handleGameFail = () => {
    setPageState('fail');
  };
  const handleGameSuccess = () => {
    // TODO: 성공 로직
    setPageState('success');
  };

  return (
    <div className={s.Container}>
      {pageState !== 'playing' && pageState !== 'ready' && <TopBar handlePrevButton={handleBack} />}
      {pageState === 'landing' && <GameLanding step={step} sport={sport} handleStart={handleStart} />}
      {pageState === 'ready' && <GameReady step={step} goToNextStep={handleGameStart} />}
      {pageState === 'playing' && <GamePlaying step={step} goToFail={handleGameFail} goToSuccess={handleGameSuccess} />}
      {pageState === 'success' && <GameSuccess />}
      {pageState === 'fail' && <GameFail step={step} />}
    </div>
  );
};
export default GamePage;
