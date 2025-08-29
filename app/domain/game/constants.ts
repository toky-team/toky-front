import type { SportType } from '@/lib/types';
import basketballBg from '@/lib/assets/images/field_basketball.webp';
import soccerBg from '@/lib/assets/images/field_soccer.webp';
import hockeyBg from '@/lib/assets/images/field_hockey.webp';

export const BALL_NAME: Record<SportType, string> = {
  야구: '야구공',
  축구: '축구공',
  농구: '농구공',
  럭비: '럭비공',
  아이스하키: '퍽',
};

export const GAME_TIME = [3000, 1000]; // MS

export const GAME_GAP_TIME = 3000; // MS

export const BOARD_BG_URL_MAP: Record<SportType, string> = {
  야구: basketballBg,
  축구: soccerBg,
  농구: basketballBg,
  럭비: soccerBg,
  아이스하키: hockeyBg,
};
