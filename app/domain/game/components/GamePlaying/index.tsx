import Ball from '@/domain/game/components/Ball';
import { BALL_NAME, BOARD_BG_URL_MAP, GAME_TIME } from '@/domain/game/constants';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';

import * as s from './style.css';
import type { SportType } from '@/lib/types';
import makeRandomBoard from '@/domain/game/utils/makeRandomBoard';
import BallItem from '@/domain/game/components/GamePlaying/BallItem';

interface Props {
  step: number;
  sport: SportType;
  goToFail: () => void;
  goToSuccess: () => void;
}
const GamePlaying = ({ step, sport, goToFail, goToSuccess }: Props) => {
  const time = GAME_TIME[step - 1];
  const [catchCount, setCatchCount] = useState(0);

  const board = useMemo(() => makeRandomBoard(sport), [sport]);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToFail();
    }, time);
    return () => clearTimeout(timer);
  }, [goToFail, time]);

  return (
    <>
      <div className={s.Container}>
        <div className={s.Header}>
          <div className={s.ProgressBarContainer}>
            <div className={s.ProgressBar}>
              <motion.div
                className={s.ProgressBarFill}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: time / 1000, ease: 'linear' }}
              />
            </div>
          </div>
          <div>미션! {BALL_NAME[sport]}을 잡아라</div>
          <div className={s.BallCount}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={s.BallCountItem}>
                <Ball sport={sport} isNull={index >= catchCount} className={s.BallCountItemBall} />
              </div>
            ))}
          </div>
        </div>
        <div className={s.Board}>
          {board.map((item, index) => {
            return (
              <BallItem
                key={index}
                sport={item}
                onClick={() => {
                  if (item !== sport) {
                    goToFail();
                    return;
                  }

                  setCatchCount((prev) => {
                    if (prev === 2) {
                      goToSuccess();
                    }
                    return prev + 1;
                  });
                }}
              />
            );
          })}
        </div>
      </div>
      <img src={BOARD_BG_URL_MAP[sport]} className={s.Filter} />
    </>
  );
};
export default GamePlaying;
