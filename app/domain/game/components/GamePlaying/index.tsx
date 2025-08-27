import { GAME_TIME } from '@/domain/game/constants';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  step: number;
  goToFail: () => void;
  goToSuccess: () => void;
}
const GamePlaying = ({ step, goToFail, goToSuccess }: Props) => {
  const [catchCount, setCatchCount] = useState(0);
  const [count, setCount] = useState(GAME_TIME[step - 1]);

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
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          checkGameResult();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [count, checkGameResult]);

  return (
    <div>
      대충 게임
      <button onClick={() => setCatchCount(3)}>성공하는 버튼</button>
    </div>
  );
};
export default GamePlaying;
