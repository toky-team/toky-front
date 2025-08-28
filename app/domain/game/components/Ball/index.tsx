import type { SportType } from '@/lib/types';
import soccer from '@/lib/assets/images/ball_soccer.webp';
import baseball from '@/lib/assets/images/ball_baseball.webp';
import basketball from '@/lib/assets/images/ball_basketball.webp';
import rugby from '@/lib/assets/images/ball_rugby.webp';
import hockey from '@/lib/assets/images/ball_hockey.webp';

const BALL_IMAGE: Record<SportType, string> = {
  축구: soccer,
  야구: baseball,
  농구: basketball,
  럭비: rugby,
  아이스하키: hockey,
};

interface Props {
  sport: SportType;
}
const Ball = ({ sport }: Props) => {
  return <img src={BALL_IMAGE[sport]} />;
};
export default Ball;
