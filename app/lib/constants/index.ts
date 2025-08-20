import type { SportType } from '@/lib/types';

// TODO: 추후 수정
export const LOCATION_MAP: Record<SportType, string> = {
  축구: '고양 종합운동장',
  농구: '고양운동장 체육관',
  야구: '서울종합운동장 야구장',
  럭비: '고양 종합운동장',
  아이스하키: '목동아이스링크',
};

// TODO: 정기전 총점 추가
export const PREV_SCORE_MAP: Record<SportType, string> = {
  축구: '1:0',
  농구: '5:0',
  야구: '3:2',
  럭비: '8:6',
  아이스하키: '1:1',
};

// TODO: 라이브 주소 추가
export const FALLBACK_LIVE_URL = 'https://youtu.be/3Txsz8eq5KY?t=603';
