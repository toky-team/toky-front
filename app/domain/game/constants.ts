import type { SportType } from '@/lib/types';

export const BALL_NAME: Record<SportType, string> = {
  야구: '야구공',
  축구: '축구공',
  농구: '농구공',
  럭비: '럭비공',
  아이스하키: '퍽',
};

export const GAME_TIME = [3000, 1000];

export const GAME_GAP_TIME = 3000;
