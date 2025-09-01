import type { SportType } from '@/lib/types';

export const LOCATION_MAP: Record<SportType, string> = {
  축구: '고양 종합운동장',
  농구: '고양운동장 체육관',
  야구: '서울종합운동장 야구장',
  럭비: '고양 종합운동장',
  아이스하키: '목동아이스링크',
};

export const PREV_SCORE_MAP: Record<SportType, string> = {
  축구: '21:18',
  농구: '24:23',
  야구: '26:19',
  럭비: '21:25',
  아이스하키: '18:24',
};

// TODO: 라이브 주소 추가
export const FALLBACK_LIVE_URL = 'https://youtu.be/3Txsz8eq5KY?t=603';
