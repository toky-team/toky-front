import type { SportType } from '@/lib/types';

const getNoPlayerSelectText = (sport: SportType) => {
  if (sport === '야구') return '안타 없음';
  return '득점 없음';
};

export default getNoPlayerSelectText;
