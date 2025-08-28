import Ball from '@/domain/game/components/Ball';
import { GAME_TIME } from '@/domain/game/constants';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';

import * as s from './style.css';

interface Props {
  step: number;
  goToFail: () => void;
  goToSuccess: () => void;
}
const GamePlaying = ({ step, goToFail, goToSuccess }: Props) => {
  const time = GAME_TIME[step - 1];
  const [catchCount, setCatchCount] = useState(0);

  const checkGameResult = useCallback(() => {
    if (catchCount < 3) {
      goToFail();
      return;
    }
  }, [catchCount, goToFail]);

  useEffect(() => {
    if (catchCount >= 3) {
      goToSuccess();
    }
  }, [catchCount, goToSuccess]);

  useEffect(() => {
    const timer = setTimeout(() => {
      checkGameResult();
    }, time);
    return () => clearTimeout(timer);
  }, [checkGameResult, time]);

  return (
    <div>
      <div className={s.ProgressBar}>
        <motion.div
          className={s.ProgressBarFill}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: time / 1000, ease: 'linear' }}
        />
      </div>
      <button onClick={() => setCatchCount(3)}>성공하는 버튼</button>
    </div>
  );
};
export default GamePlaying;
