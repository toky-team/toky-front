import { SportArray } from '@/lib/types';

const getRandomSport = () => {
  return SportArray[Math.floor(Math.random() * 5)].id;
};

export default getRandomSport;
