import type { SportType } from '@/lib/types';
import basketballBg from '@/lib/assets/images/field_basketball.webp';
import soccerBg from '@/lib/assets/images/field_soccer.webp';
import hockeyBg from '@/lib/assets/images/field_hockey.webp';

import baseballKorea from '@/lib/assets/images/toky/baseball_korea.webp';
import baseballYonsei from '@/lib/assets/images/toky/baseball_yonsei.webp';
import soccerKorea from '@/lib/assets/images/toky/soccer_korea.webp';
import soccerYonsei from '@/lib/assets/images/toky/soccer_yonsei.webp';
import basketballKorea from '@/lib/assets/images/toky/basketball_korea.webp';
import basketballYonsei from '@/lib/assets/images/toky/basketball_yonsei.webp';
import rugbyKorea from '@/lib/assets/images/toky/rugby_korea.webp';
import rugbyYonsei from '@/lib/assets/images/toky/rugby_yonsei.webp';
import hockeyKorea from '@/lib/assets/images/toky/hockey_korea.webp';
import hockeyYonsei from '@/lib/assets/images/toky/hockey_yonsei.webp';

export const BALL_NAME: Record<SportType, string> = {
  야구: '야구공',
  축구: '축구공',
  농구: '농구공',
  럭비: '럭비공',
  아이스하키: '퍽',
};

export const GAME_TIME = [2000, 800]; // MS

export const GAME_GAP_TIME = 2000; // MS

// TODO: 야구 경기장 이미지 추가
export const BOARD_BG_URL_MAP: Record<SportType, string> = {
  야구: basketballBg,
  축구: soccerBg,
  농구: basketballBg,
  럭비: soccerBg,
  아이스하키: hockeyBg,
};

export const CALENDAR_DATE: { date: string; isVisible: boolean }[] = [
  {
    date: '2025-08-25 09:00:00',
    isVisible: false,
  },
  {
    date: '2025-08-26 09:00:00',
    isVisible: false,
  },
  {
    date: '2025-08-27 09:00:00',
    isVisible: false,
  },
  {
    date: '2025-08-28 09:00:00',
    isVisible: false,
  },
  {
    date: '2025-08-29 09:00:00',
    isVisible: false,
  },
  {
    date: '2025-08-30 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-08-31 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-01 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-02 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-03 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-04 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-05 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-06 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-07 09:00:00',
    isVisible: true,
  },

  {
    date: '2025-09-08 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-09 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-10 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-11 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-12 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-13 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-14 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-15 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-16 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-17 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-18 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-19 09:00:00',
    isVisible: true,
  },
  {
    date: '2025-09-20 09:00:00',
    isVisible: true,
  },
];

export const GAME_LANDING_CHARACTER_IMAGE: Record<
  SportType,
  {
    korea: string;
    yonsei: string;
  }
> = {
  야구: {
    korea: baseballKorea,
    yonsei: baseballYonsei,
  },
  축구: {
    korea: soccerKorea,
    yonsei: soccerYonsei,
  },
  농구: {
    korea: basketballKorea,
    yonsei: basketballYonsei,
  },
  럭비: {
    korea: rugbyKorea,
    yonsei: rugbyYonsei,
  },
  아이스하키: {
    korea: hockeyKorea,
    yonsei: hockeyYonsei,
  },
};
