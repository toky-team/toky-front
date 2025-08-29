import Ball from '@/domain/game/components/Ball';
import type { SportType } from '@/lib/types';

import * as s from './style.css';
import { useState } from 'react';

interface Props {
  sport: SportType | null;
  onClick: () => void;
}
const BallItem = ({ sport, onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className={s.Target}
      onClick={() => {
        setIsClicked(true);
        onClick();
      }}
    >
      <Ball sport={isClicked ? null : sport} className={s.TargetBall} />
    </button>
  );
};
export default BallItem;
