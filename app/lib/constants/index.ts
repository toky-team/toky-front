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

export type ScheduleEvent = {
  title: SportType | '합동응원전';
  time: string;
  location: string;
  date: string; // e.g., '9/19 (금)'
};

export const SCHEDULE_LIST: ScheduleEvent[] = [
  { title: '합동응원전', time: '18:00', location: '연세대학교 노천극장', date: '9/12 (금)' },
  { title: '야구', time: '11:00', location: '잠실 야구장', date: '9/19 (금)' },
  { title: '아이스하키', time: '14:00', location: '목동 아이스링크', date: '9/19 (금)' },
  { title: '농구', time: '17:00', location: '고양 체육관', date: '9/19 (금)' },
  { title: '럭비', time: '11:00', location: '고양 종합운동장', date: '9/20 (토)' },
  { title: '축구', time: '14:00', location: '고양 종합운동장', date: '9/20 (토)' },
];

export const SCHEDULE_BY_SPORT: Partial<Record<SportType, Omit<ScheduleEvent, 'title'>>> =
  SCHEDULE_LIST.reduce((acc, cur) => {
    if (cur.title === '합동응원전') return acc;
    acc[cur.title as SportType] = { time: cur.time, location: cur.location, date: cur.date };
    return acc;
  }, {} as Partial<Record<SportType, Omit<ScheduleEvent, 'title'>>>);
