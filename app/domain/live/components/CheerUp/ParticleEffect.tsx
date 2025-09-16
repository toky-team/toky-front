import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Props {
  isActive: boolean;
  color: string;
  onComplete: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  velocity: number;
}

const ParticleEffect = ({ isActive, color, onComplete }: Props) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isActive) {
      // 파티클 생성
      const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: 0,
        y: 0,
        angle: i * 45 + Math.random() * 30 - 15, // 45도씩 분산하되 약간의 랜덤성 추가
        velocity: 0.8 + Math.random() * 0.4, // 0.8~1.2 속도
      }));

      setParticles(newParticles);

      // 애니메이션 완료 후 파티클 제거
      const timer = setTimeout(() => {
        setParticles([]);
        onComplete();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive || particles.length === 0) return null;

  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 8px ${color}`,
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: Math.cos((particle.angle * Math.PI) / 180) * particle.velocity * 60,
            y: Math.sin((particle.angle * Math.PI) / 180) * particle.velocity * 60,
            scale: [1, 1.2, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffect;
