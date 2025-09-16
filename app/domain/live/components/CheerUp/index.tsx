import { motion } from 'motion/react';
import { useState } from 'react';

import * as s from './style.css';

import Icon from '@/lib/assets/icons';
import { useGetLike } from '@/domain/live/apis/useGetLike';
import type { SportType, UniversityType } from '@/lib/types';
import useCheerUpSocket from '@/domain/live/hooks/useCheerUpSocket';
import { cheerUpSocket } from '@/common/utils/socket';
import ParticleEffect from './ParticleEffect';

interface Props {
  sport: SportType;
}
const CheerUp = ({ sport }: Props) => {
  const { data } = useGetLike(sport);
  useCheerUpSocket(sport);

  const [koreaParticles, setKoreaParticles] = useState(false);
  const [yonseiParticles, setYonseiParticles] = useState(false);

  const handleLike = (university: UniversityType) => {
    cheerUpSocket.emit('add_like', { sport, university, likes: 1 });

    // 파티클 효과 트리거
    if (university === '고려대학교') {
      setKoreaParticles(true);
    } else {
      setYonseiParticles(true);
    }
  };

  if (!data) return null;

  return (
    <div className={s.Container}>
      <motion.button
        className={s.LikeButton({ univ: 'korea' })}
        onClick={() => handleLike('고려대학교')}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        type="button"
      >
        <Icon.Heart />
        <p className={s.LikeCount}>{data.KULike}</p>
        <ParticleEffect isActive={koreaParticles} color="#FF6B6B" onComplete={() => setKoreaParticles(false)} />
      </motion.button>

      <motion.button
        className={s.LikeButton({ univ: 'yonsei' })}
        onClick={() => handleLike('연세대학교')}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        type="button"
      >
        <Icon.Heart />
        <p className={s.LikeCount}>{data.YULike}</p>
        <ParticleEffect isActive={yonseiParticles} color="#4ECDC4" onComplete={() => setYonseiParticles(false)} />
      </motion.button>
    </div>
  );
};
export default CheerUp;
