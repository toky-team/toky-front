import type { SportType } from '@/lib/types';
import soccer from '@/lib/assets/images/ball_soccer.webp';
import baseball from '@/lib/assets/images/ball_baseball.webp';
import basketball from '@/lib/assets/images/ball_basketball.webp';
import rugby from '@/lib/assets/images/ball_rugby.webp';
import hockey from '@/lib/assets/images/ball_hockey.webp';
import nullBall from '@/lib/assets/images/ball_null.webp';

const BALL_IMAGE: Record<SportType | 'null', string> = {
  축구: soccer,
  야구: baseball,
  농구: basketball,
  럭비: rugby,
  아이스하키: hockey,
  null: nullBall,
};

interface Props {
  sport: SportType | null;
  isNull?: boolean;
  className?: string;
}
const Ball = ({ sport, isNull = false, className }: Props) => {
  if (sport === null) return <div />;
  const src = BALL_IMAGE[isNull ? 'null' : sport];
  return <img src={src} className={className} />;
};
export default Ball;
